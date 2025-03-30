// ********************************************
// auth/storage/index.ts
// Storage factory that selects the appropriate adapter
// ********************************************

import { StorageService, createStorageService } from './storage-interface';
// import { reactNativeAdapter } from './react-native-adapter';
import { webAdapter } from './web-adapter';

// Determine if we're in a React Native environment
const isReactNative = false;

// Create the appropriate storage service based on platform
export const createAppropriateStorageService = (): StorageService => {
    if (isReactNative) {
        try {
            // return createStorageService(reactNativeAdapter);
        } catch (e:any) {
            console.warn('AsyncStorage not available');
        }
    }
     return createStorageService(webAdapter);

};

// Export a default storage service instance
export const storageService = createAppropriateStorageService();

// Also export everything for custom configuration
export * from './storage-interface';
// export * from './react-native-adapter';
export * from './web-adapter';
