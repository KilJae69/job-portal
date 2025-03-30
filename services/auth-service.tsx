// services/authService.ts
import {storageService} from '@/services/storage';
import axiosInstance from './axios-service';
import {Permissions, Session, User} from '@/types/auth-types';
import {v4 as uuidv4} from 'uuid';

// Determine environment (mobile or web)
const isMobileApp = false;

// Generate or retrieve a unique device ID
const getDeviceId = async (): Promise<string> => {
    const session = await storageService.getStoredSession();
    if (session?.device_id) {
        return session.device_id;
    }
    return uuidv4();
};

// Auth operations
export const authService = {
    // Login function
    async login(credentials: any): Promise<boolean> {
        try {
            const deviceId = await getDeviceId();

            const loginPayload = {
                ...credentials,
                device_id: deviceId,
                is_mobile: isMobileApp
            };

            // Make login request
            const response = await axiosInstance.post(
                '/auth/login',
                loginPayload,
                { withCredentials: !isMobileApp }
            );

            const { user, session, permissions } = response.data;

            // Ensure device_id is stored with session
            const sessionWithDevice = {
                ...session,
                device_id: deviceId
            };

            // Store auth data
            await Promise.all([
                storageService.storeUser(user),
                storageService.storeSession(sessionWithDevice),
                storageService.storePermissions(permissions),
            ]);

            return true;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    },

    // Logout function
    async logout(allDevices = false): Promise<void> {
        try {
            // Optionally call logout API
            await axiosInstance.post('/auth/logout', { all_devices: allDevices });

            // Clear storage
            await storageService.clearAuthData();
        } catch (error) {
            console.error('Logout error:', error);
            // Ensure storage is cleared even if API call fails
            await storageService.clearAuthData();
        }
    },

    // Get current user
    async getCurrentUser(): Promise<User | null> {
        return storageService.getStoredUser();
    },

    // Update user info
    async updateUserInfo(userData: Partial<User>): Promise<User | null> {
        try {
            const currentUser = await storageService.getStoredUser();
            if (!currentUser) return null;

            // Update user in storage
            return storageService.updateUser(userData);
        } catch (error) {
            console.error('Error updating user info:', error);
            return null;
        }
    },

    // Check if user is authenticated
    async isAuthenticated(): Promise<boolean> {
        const session = await storageService.getStoredSession();
        return !!session?.access_token;
    },

    // Check if token is expired
    async isTokenExpired(): Promise<boolean> {
        const session = await storageService.getStoredSession();
        if (!session?.expire) return true;

        const expireDate = new Date(session.expire);
        return new Date() > expireDate;
    },

    // Get stored session
    async getSession(): Promise<Session | null> {
        return storageService.getStoredSession();
    },

    // Get user permissions
    async getPermissions(): Promise<Permissions | null> {
        return storageService.getStoredPermissions();
    },

    // Fetch updated user data
    async refreshUserData(): Promise<boolean> {
        try {
            const response = await axiosInstance.get('/auth/user');
            const { user, permissions } = response.data;

            await Promise.all([
                storageService.storeUser(user),
                storageService.storePermissions(permissions),
            ]);

            return true;
        } catch (error) {
            console.error('Error refreshing user data:', error);
            return false;
        }
    }
};