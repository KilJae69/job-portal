'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/auth-context';
import axiosInstance from '@/services/axios-service';


export default function ProtectedResourcePage() {
    const [data, setData] = useState<null | { message: string; language: string }>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { user, logoutUser, isStorageLoading } = useAuthContext();
    const router = useRouter();



    // Fetch the protected resource
    useEffect(() => {
        const fetchProtectedResource = async () => {
            const interceptor = axiosInstance.interceptors.request.use(config => {
                console.log("Request headers -------------------------->:", config.headers);
                return config;
            });
            try {
                setLoading(true);
                // The language parameter will be filled from the API's default locale setting
                const response = await axiosInstance.get('/protected-resource');
                setData(response.data)
                console.log("Response", response);
            } catch (err: any) {
                console.error('Error fetching protected resource:', err);

                if (err.response?.status === 401) {
                    setError('Your session has expired. Please log in again.');
                    // Handle token expiration - this should be automatic if your axios interceptors are set up correctly
                    await logoutUser();
                    router.push('/login');
                } else {
                    setError(err.response?.data?.message || 'Failed to fetch protected resource');
                }
            } finally {
                setLoading(false);
            }
        };

            fetchProtectedResource();

    }, [user, isStorageLoading, router, logoutUser]);

    // Show loading while checking auth
    if (isStorageLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    // If no user and not loading, we'll redirect (see effect above)
    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6 mt-15">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Protected Resource</h1>
                    <button
                        onClick={async () => {
                            await logoutUser();
                            router.push('/login');
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                ) : error ? (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                ) : data ? (
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h2 className="text-lg font-semibold mb-2">Response from API:</h2>
                        <div className="bg-white p-4 border border-green-200 rounded">
                            <p><strong>Message:</strong> {data.message}</p>
                            <p><strong>Language:</strong> {data.language}</p>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            Successfully accessed protected resource! Your authentication is working properly.
                        </p>
                    </div>
                ) : null}

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">User Information</h2>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-md font-medium mb-2">Request this endpoint:</h3>
                    <code className="block bg-gray-800 text-white p-3 rounded overflow-x-auto">
                        GET /v1/en/protected-resource
                    </code>
                    <p className="mt-2 text-sm text-gray-600">
                        Headers are automatically added by the axios interceptor
                    </p>
                </div>
            </div>
        </div>
    );
}