import axios, { AxiosInstance } from 'axios';
import {BARE_API_URL} from '@/config';
import eventBus from '@/services/event-bus';
import {storageService} from "@/services/storage";


// Create axios instance
const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${BARE_API_URL}`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true,
    withXSRFToken:true
});

export const getCsrfToken = async (): Promise<void> => {
    try {
        await axios.get(`${BARE_API_URL}/sanctum/csrf-cookie`, {
            withCredentials: true,
        });
    } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
    }
};

let isRefreshing = false;

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 && !isRefreshing) {
            isRefreshing = true;

            eventBus.publish('auth:sessionExpired', {
                message: 'Your session has expired. Please log in again.'
            });

           await storageService.clearAuthData();

            setTimeout(() => {
                isRefreshing = false;
            }, 3000);
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;