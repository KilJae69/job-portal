import { useEffect } from 'react';
import eventBus from "@/services/event-bus";
import { useRouter } from "@/i18n/routing";
import toast, { Toaster } from 'react-hot-toast';

const AuthEventComponent = () => {
    const router = useRouter();

    useEffect(() => {
        // Subscribe to auth events
        const sessionExpiredUnsub = eventBus.subscribe('auth:sessionExpired', (data) => {
            // Show session expired toast notification
            toast.error(data.message || 'Your session has expired. Please log in again.', {
                duration: 5000,
                icon: '⚠️',
            });

            // Redirect to login page
            router.push('/login');
        });

        const authErrorUnsub = eventBus.subscribe('auth:error', (data) => {
            // Show auth error toast notification
            toast.error(data.message || 'An authentication error occurred.', {
                duration: 5000,
                icon: '❌',
            });
        });

        // Add handler for token refresh events
        const tokensRefreshedUnsub = eventBus.subscribe('auth:tokensRefreshed', (data) => {
            // Log the successful token refresh
            console.log('Auth tokens refreshed successfully');

            // Optionally show a toast for debugging purposes
            // In production, you might want to remove this to avoid interrupting users
            if (process.env.NODE_ENV === 'development') {
                toast.success(data.message || 'Your session was refreshed.', {
                    duration: 3000,
                    icon: '🔄',
                });
            }
        });

        // Cleanup subscriptions
        return () => {
            sessionExpiredUnsub();
            authErrorUnsub();
            tokensRefreshedUnsub();
        };
    }, [router]);

    // Return the Toaster component in the render
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                // Default options for all toasts
                style: {
                    background: '#363636',
                    color: '#fff',
                },
                // Custom success styles
                success: {
                    style: {
                        background: '#1E3A8A', // Darker blue background for success
                    },
                },
                // Custom error styles
                error: {
                    style: {
                        background: '#991B1B', // Darker red background for errors
                    },
                },
            }}
        />
    );
};

export default AuthEventComponent;