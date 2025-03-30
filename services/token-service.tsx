// auth/services/tokenService.ts
import { Session, User, Permissions } from '@/types/auth-types';
import { API_LANG, API_URL, API_VERSION } from '@/config';
import axios from 'axios';

interface TokenResponse {
    user: User;
    session: {
        access_token: string;
        access_token_expiration: number;  // Unix timestamp
        refresh_token?: string;
        refresh_token_expiration?: number;  // Unix timestamp
    };
    permissions?: Permissions;
}

interface TokenServiceConfig {
    serverUrl?: string;
    lang?: string;
    version?: string;
}

export interface TokenService {
    isTokenExpired(expireTimestamp: number): boolean;
    isRefreshTokenExpired(refreshExpireTimestamp: number): boolean;
    refreshToken(
        currentSession: Session,
        userId: string | number,
        deviceId: string
    ): Promise<Session | null>;
}

export const createTokenService = (config: TokenServiceConfig = {}): TokenService => {
    const { serverUrl = API_URL, lang = API_LANG, version = API_VERSION } = config;

    return {
        isTokenExpired(expireTimestamp: number): boolean {
            if (!expireTimestamp) return true;

            const currentTimeSec = Math.floor(Date.now() / 1000);  // Current time in seconds

            // Add a 10 second buffer to prevent edge cases
            return currentTimeSec > (expireTimestamp - 10);
        },

        isRefreshTokenExpired(refreshExpireTimestamp: number): boolean {
            if (!refreshExpireTimestamp) return true;

            const currentTimeSec = Math.floor(Date.now() / 1000);  // Current time in seconds
            return currentTimeSec > refreshExpireTimestamp;
        },

        async refreshToken(
            currentSession: Session,
            userId: string | number,
            deviceId: string
        ): Promise<Session | null> {
            try {
                // Using axios directly to avoid circular dependency with our axiosInstance
                const response = await axios.post(
                    `${serverUrl}/${version}/${lang}/auth/refresh`,
                    {
                        refresh_token: currentSession.refresh_token,
                        device_id: deviceId || currentSession.device_id,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Userid': `${userId}`,
                        }
                    }
                );

                const data: TokenResponse = response.data;

                if (response.status === 200) {
                    // Return a Session object that matches your type definition
                    return {
                        access_token: data.session.access_token,
                        access_token_expiration: data.session.access_token_expiration,
                        refresh_token: data.session.refresh_token || currentSession.refresh_token,
                        refresh_token_expiration: data.session.refresh_token_expiration || currentSession.refresh_token_expiration,
                        device_id: currentSession.device_id
                    };
                }

                console.error('Failed to refresh token:', data);
                return null;
            } catch (error) {
                console.error('Error refreshing token:', error);
                return null;
            }
        },
    };
};