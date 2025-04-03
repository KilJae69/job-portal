// hooks/useUpdateUser.ts
import { useState } from 'react';
import { useAuthContext } from '@/context/auth-context';
import axiosInstance from '@/services/axios-service';

export const useUpdateUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { displayAlert, clearAlert } = useAuthContext();

    const updateUser = async (userData: any) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axiosInstance.put('/api/user', userData);

            if (response && response.data) {
                displayAlert('success', 'User information updated successfully.');
                clearAlert();
                return { success: true, user: response.data };
            }
            return { success: false };
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Failed to update user information. Please try again.';
            setError(errorMessage);
            displayAlert('error', errorMessage);
            clearAlert();
            return { success: false, error: errorMessage };
        } finally {
            setIsLoading(false);
        }
    };

    return {
        updateUser,
        isLoading,
        error
    };
};