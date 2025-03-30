import { User, Session, Permissions } from '@/types/auth-types';
import {STORAGE_KEY} from "@/config";

// Define the storage interface that adapters must implement
export interface StorageAdapter {
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
    multiRemove(keys: string[]): Promise<void>;
}

// Storage keys - centralized for consistency
export const STORAGE_KEYS = {
    USER: STORAGE_KEY + 'user',
    SESSION: STORAGE_KEY +'session',
    PERMISSIONS: STORAGE_KEY +'permissions',
    SETTINGS: STORAGE_KEY +'settings',
};

// The storage service factory creates a service based on a provided adapter
export interface StorageService {
    getStoredUser(): Promise<User | null>;
    getStoredSession(): Promise<Session | null>;
    getStoredPermissions(): Promise<Permissions | null>;
    storeUser(user: User): Promise<void>;
    storeSession(session: Session): Promise<void>;
    storePermissions(permissions: Permissions | null): Promise<void>;
    updateUser(userData: Partial<User>): Promise<User>;
    clearAuthData(): Promise<void>;
}

export const createStorageService = (adapter: StorageAdapter): StorageService => {
    return {
        getStoredUser: async (): Promise<User | null> => {
            try {
                const data = await adapter.getItem(STORAGE_KEYS.USER);
                return data ? JSON.parse(data) : null;
            } catch (error) {
                console.error('Error retrieving user from storage:', error);
                return null;
            }
        },

        getStoredSession: async (): Promise<Session | null> => {
            try {
                const data = await adapter.getItem(STORAGE_KEYS.SESSION);
                return data ? JSON.parse(data) : null;
            } catch (error) {
                console.error('Error retrieving session from storage:', error);
                return null;
            }
        },

        getStoredPermissions: async (): Promise<Permissions | null> => {
            try {
                const data = await adapter.getItem(STORAGE_KEYS.PERMISSIONS);
                return data ? JSON.parse(data) : null;
            } catch (error) {
                console.error('Error retrieving permissions from storage:', error);
                return null;
            }
        },

        storeUser: async (user: User): Promise<void> => {
            try {
                await adapter.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
            } catch (error) {
                console.error('Error storing user:', error);
                throw error;
            }
        },

        storeSession: async (session: Session): Promise<void> => {
            try {
                await adapter.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
            } catch (error) {
                console.error('Error storing session:', error);
                throw error;
            }
        },

        storePermissions: async (permissions: Permissions | null): Promise<void> => {
            try {
                await adapter.setItem(STORAGE_KEYS.PERMISSIONS, JSON.stringify(permissions));
            } catch (error) {
                console.error('Error storing permissions:', error);
                throw error;
            }
        },

        updateUser: async (userData: Partial<User>): Promise<User> => {
            try {
                const currentUserDataString = await adapter.getItem(STORAGE_KEYS.USER);
                const currentUserData = currentUserDataString ? JSON.parse(currentUserDataString) : {};
                const updatedUserData = {
                    ...currentUserData,
                    ...userData,
                };
                await adapter.setItem(STORAGE_KEYS.USER, JSON.stringify(updatedUserData));
                return updatedUserData;
            } catch (error) {
                console.error('Error updating user:', error);
                throw error;
            }
        },

        clearAuthData: async (): Promise<void> => {
            try {
                await adapter.multiRemove([
                    STORAGE_KEYS.USER,
                    STORAGE_KEYS.SESSION,
                    STORAGE_KEYS.PERMISSIONS,
                    STORAGE_KEYS.SETTINGS,
                ]);
            } catch (error) {
                console.error('Error clearing auth data:', error);
                throw error;
            }
        },
    };
};

