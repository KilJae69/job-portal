// hooks/useRegister.ts
import { useState } from 'react';
import { useAuthContext } from '@/context/auth-context';
import axiosInstance, { getCsrfToken } from '@/services/axios-service';

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { setLoginUserSuccess, displayAlert, clearAlert } = useAuthContext();

    const register = async (userData: any) => {
        setIsLoading(true);
        setError(null);

        try {
            await getCsrfToken();
            const response = await axiosInstance.post('/register', userData);

            if (response && response.data) {
                const { user, permissions } = response.data;
                await setLoginUserSuccess(user, permissions || null);
                displayAlert('success', 'Registration successful!');
                clearAlert();
                return { success: true, user };
            }
            return { success: false };
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Registration failed. Please try again.';
            setError(errorMessage);
            displayAlert('error', errorMessage);
            clearAlert();
            return { success: false, error: errorMessage };
        } finally {
            setIsLoading(false);
        }
    };

    return {
        register,
        isLoading,
        error
    };
};