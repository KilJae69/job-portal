import { StorageAdapter } from './storage-interface';

export const webAdapter: StorageAdapter = {
    getItem: async (key: string): Promise<string | null> => {
        return localStorage.getItem(key);
    },

    setItem: async (key: string, value: string): Promise<void> => {
        localStorage.setItem(key, value);
        return Promise.resolve();
    },

    removeItem: async (key: string): Promise<void> => {
        localStorage.removeItem(key);
        return Promise.resolve();
    },

    multiRemove: async (keys: string[]): Promise<void> => {
        keys.forEach(key => localStorage.removeItem(key));
        return Promise.resolve();
    },
};