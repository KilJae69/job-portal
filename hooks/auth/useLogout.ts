// hooks/useLogout.ts
import { useState } from 'react';
import { useAuthContext } from '@/context/auth-context';
import axiosInstance from '@/services/axios-service';
import { storageService } from '@/services/storage';

export const useLogout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { displayAlert, clearAlert } = useAuthContext();
    const { logoutUser } = useAuthContext();

    const logout = async () => {
        setIsLoading(true);

        try {
            // First try to call the logout endpoint
            await axiosInstance.post('/logout', {});
            // Then clear auth data
            await storageService.clearAuthData();
            // Then update the auth context
            await logoutUser();
            return { success: true };
        } catch (error) {
            console.error('Logout error:', error);
            // Still clear storage and context on error
            await storageService.clearAuthData();
            await logoutUser();
            displayAlert('error', 'There was an issue during logout, but you have been logged out successfully.');
            clearAlert();
            return { success: true, warning: 'Logged out locally, but server logout may have failed.' };
        } finally {
            setIsLoading(false);
        }
    };

    return {
        logout,
        isLoading
    };
};