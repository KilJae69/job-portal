
// hooks/useLogin.ts
import { useState } from 'react';
import { useAuthContext } from '@/context/auth-context';
import axiosInstance, { getCsrfToken } from '@/services/axios-service';

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { setLoginUserSuccess, displayAlert, clearAlert } = useAuthContext();

    const login = async (credentials: any) => {
        setIsLoading(true);
        setError(null);

        try {
            await getCsrfToken();
            await axiosInstance.post('/login', credentials);

            const userResponse = await axiosInstance.get('/api/user');

            if (userResponse && userResponse.data) {
                await setLoginUserSuccess(userResponse.data, userResponse.data.permissions || null);
                displayAlert('success', 'Login successful!');
                clearAlert();
                return { success: true, user: userResponse.data };
            }
            return { success: false };
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
            setError(errorMessage);
            displayAlert('error', errorMessage);
            clearAlert();
            return { success: false, error: errorMessage };
        } finally {
            setIsLoading(false);
        }
    };

    return {
        login,
        isLoading,
        error
    };
};