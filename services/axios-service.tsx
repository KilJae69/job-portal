import axios, { AxiosInstance } from 'axios';
import { API_LANG, API_URL, API_VERSION } from '@/config';
import eventBus from '@/services/event-bus';
import { Session } from '@/types/auth-types';
import { storageService } from "@/services/storage";
import {createTokenService, TokenService} from "@/services/token-service";


// Create TokenService instance
const tokenService: TokenService = createTokenService({
    serverUrl: API_URL,
    lang: API_LANG,
    version: API_VERSION
});

// Create axios instance
const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${API_URL}/${API_VERSION}/${API_LANG}`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Flag to track if a token refresh is in progress
let isRefreshing = false;
// Queue of failed requests to retry after token refresh
let failedQueue: Array<{
    resolve: (value: string | null) => void;
    reject: (reason?: any) => void;
}> = [];

// Process the queue of failed requests
const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

// Perform token refresh
const performTokenRefresh = async (session: Session): Promise<Session | null> => {
    try {
        const user = await storageService.getStoredUser();
        if (!user || !user.id) {
            throw new Error('User ID not available');
        }

        const deviceId = session?.device_id || 'default_device';

        // Use the tokenService to refresh the token
        const newSession = await tokenService.refreshToken(
            session,
            user.id,
            deviceId
        );

        if (!newSession) {
            throw new Error('Token refresh failed');
        }

        // Update session with new tokens
        const updatedSession: Session = {
            ...session,
            access_token: newSession.access_token,
            access_token_expiration: newSession.access_token_expiration,
        };

        // If a new refresh token was provided, update it
        if (newSession.refresh_token) {
            updatedSession.refresh_token = newSession.refresh_token;
            updatedSession.refresh_token_expiration = newSession.refresh_token_expiration;
        }

        // Store updated session
        await storageService.storeSession(updatedSession);
        console.log("Stored updated session with new tokens");

        return updatedSession;
    } catch (error) {
        console.error('Token refresh failed:', error);
        return null;
    }
};

// Request interceptor to add Authorization header and check token validity
axiosInstance.interceptors.request.use(
    async (config) => {
        // Log request for debugging
        console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);

        try {
            const session = await storageService.getStoredSession();

            if (!session) {
                console.log("No session available");
                return config;
            }

            console.log("SESSION--------------------->", session)

            // Check if access token exists but is expired
            if (session.access_token && tokenService.isTokenExpired(session.access_token_expiration)) {

                console.log("Access token expired, checking refresh token...");

                // Check if refresh token is still valid
                if (session.refresh_token &&
                    !tokenService.isRefreshTokenExpired(session.refresh_token_expiration)) {

                    // Refresh token is valid, perform refresh
                    console.log("Refresh token valid, refreshing access token...");

                    if (!isRefreshing) {
                        isRefreshing = true;
                        const updatedSession = await performTokenRefresh(session);
                        isRefreshing = false;

                        if (updatedSession) {
                            // Set the new token in the request
                            config.headers = config.headers || {};
                            config.headers.Authorization = `Bearer ${updatedSession.access_token}`;
                            return config;
                        } else {
                            // Refresh failed, clear auth data
                            await storageService.clearAuthData();
                            eventBus.publish('auth:sessionExpired', {
                                message: 'Your session has expired. Please log in again.'
                            });
                            return config;
                        }
                    } else {
                        // Wait for ongoing refresh
                        const newToken = await new Promise<string | null>((resolve, reject) => {
                            failedQueue.push({ resolve, reject });
                        });

                        if (newToken) {
                            config.headers = config.headers || {};
                            config.headers.Authorization = `Bearer ${newToken}`;
                        }
                        return config;
                    }
                } else {
                    // Refresh token expired, clear auth data
                    console.log("Refresh token expired, logging out...");
                    await storageService.clearAuthData();
                    eventBus.publish('auth:sessionExpired', {
                        message: 'Your session has expired. Please log in again.'
                    });
                    return config;
                }
            } else if (session.access_token) {
                // Access token exists and is valid
                config.headers = config.headers || {};
                config.headers.Authorization = `Bearer ${session.access_token}`;
                console.log("Setting auth header:", `Bearer ${session.access_token.substring(0, 10)}...`);
            }
        } catch (error) {
            console.error('Error in request interceptor:', error);
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for handling 401 errors
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the request was already retried or isn't a 401, just reject
        if (!originalRequest || error.response?.status !== 401 || originalRequest._retry) {
            return Promise.reject(error);
        }

        // Mark this request as retried to prevent infinite loops
        originalRequest._retry = true;

        // Handle token refresh logic
        if (isRefreshing) {
            // If a refresh is already in progress, queue this request
            return new Promise((resolve, reject) => {
                failedQueue.push({ resolve, reject });
            })
                .then(token => {
                    if (token) {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return axiosInstance(originalRequest);
                    }
                    return Promise.reject(error);
                })
                .catch(err => Promise.reject(err));
        }

        isRefreshing = true;

        try {
            // Get the current session data
            const session = await storageService.getStoredSession();

            if (!session) {
                throw new Error('No session available');
            }

            // Perform token refresh
            const updatedSession = await performTokenRefresh(session);

            if (!updatedSession) {
                throw new Error('Token refresh failed');
            }

            // Update the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${updatedSession.access_token}`;

            // Process any queued requests with the new token
            processQueue(null, updatedSession.access_token);

            // Reset the refreshing flag
            isRefreshing = false;

            // Retry the original request with new token
            return axiosInstance(originalRequest);
        } catch (refreshError) {
            console.error('Error in response interceptor:', refreshError);

            // Process any queued requests with the error
            processQueue(refreshError, null);

            // Clear auth data and notify
            await storageService.clearAuthData();

            eventBus.publish('auth:sessionExpired', {
                message: 'Your session has expired. Please log in again.'
            });

            isRefreshing = false;

            return Promise.reject(refreshError);
        }
    }
);

export default axiosInstance;