// hooks/useForgotPassword.ts
import { useState } from 'react';
import { useAuthContext } from '@/context/auth-context';
import axiosInstance, { getCsrfToken } from '@/services/axios-service';

export const useForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const { displayAlert, clearAlert } = useAuthContext();

    const forgotPassword = async (email: string) => {
        setIsLoading(true);
        setError(null);
        setStatus(null);

        try {
            await getCsrfToken();
            const response = await axiosInstance.post('/forgot-password', { email });

            if (response && response.data) {
                setStatus(response.data.status || 'Reset link sent to your email.');
                displayAlert('success', 'Reset link sent to your email.');
                clearAlert();
                return { success: true, status: response.data.status };
            }
            return { success: false };
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Password reset request failed. Please try again.';
            setError(errorMessage);
            displayAlert('error', errorMessage);
            clearAlert();
            return { success: false, error: errorMessage };
        } finally {
            setIsLoading(false);
        }
    };

    return {
        forgotPassword,
        isLoading,
        error,
        status
    };
};