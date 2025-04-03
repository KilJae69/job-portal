// hooks/useResetPassword.ts
import { useState } from 'react';
import { useAuthContext } from '@/context/auth-context';
import axiosInstance, { getCsrfToken } from '@/services/axios-service';

export const useResetPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const { displayAlert, clearAlert } = useAuthContext();

    const resetPassword = async (data: { token: string; email: string; password: string; password_confirmation: string }) => {
        setIsLoading(true);
        setError(null);
        setStatus(null);

        try {
            await getCsrfToken();
            const response = await axiosInstance.post('/reset-password', data);

            if (response && response.data) {
                setStatus(response.data.status || 'Password has been reset successfully.');
                displayAlert('success', 'Password has been reset successfully.');
                clearAlert();
                return { success: true, status: response.data.status };
            }
            return { success: false };
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Password reset failed. Please try again.';
            setError(errorMessage);
            displayAlert('error', errorMessage);
            clearAlert();
            return { success: false, error: errorMessage };
        } finally {
            setIsLoading(false);
        }
    };

    return {
        resetPassword,
        isLoading,
        error,
        status
    };
};