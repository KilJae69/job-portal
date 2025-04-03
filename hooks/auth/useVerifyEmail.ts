// hooks/useVerifyEmail.ts
import { useState } from 'react';
import { useAuthContext } from '@/context/auth-context';
import axiosInstance from '@/services/axios-service';

export const useVerifyEmail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const { displayAlert, clearAlert } = useAuthContext();

    const resendVerification = async () => {
        setIsLoading(true);
        setError(null);
        setStatus(null);

        try {
            const response = await axiosInstance.post('/email/verification-notification');

            if (response && response.data) {
                setStatus(response.data.status || 'Verification link sent to your email.');
                displayAlert('success', 'Verification link sent to your email.');
                clearAlert();
                return { success: true, status: response.data.status };
            }
            return { success: false };
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Failed to send verification email. Please try again.';
            setError(errorMessage);
            displayAlert('error', errorMessage);
            clearAlert();
            return { success: false, error: errorMessage };
        } finally {
            setIsLoading(false);
        }
    };

    return {
        resendVerification,
        isLoading,
        error,
        status
    };
};