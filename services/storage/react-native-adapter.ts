// ********************************************
// auth/storage/reactNativeAdapter.ts
// Adapter for React Native's AsyncStorage
// ********************************************

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { StorageAdapter } from './storageInterface';
//
// export const reactNativeAdapter: StorageAdapter = {
//     getItem: async (key: string): Promise<string | null> => {
//         return AsyncStorage.getItem(key);
//     },
//
//     setItem: async (key: string, value: string): Promise<void> => {
//         return AsyncStorage.setItem(key, value);
//     },
//
//     removeItem: async (key: string): Promise<void> => {
//         return AsyncStorage.removeItem(key);
//     },
//
//     multiRemove: async (keys: string[]): Promise<void> => {
//         return AsyncStorage.multiRemove(keys);
//     },
// };