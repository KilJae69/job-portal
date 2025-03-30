'use client';

import React, { useState, useEffect } from 'react';
import { useAuthContext } from '@/context/auth-context';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import axiosInstance from '@/services/axios-service';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const {setLoginUserSuccess, user} = useAuthContext();
    const router = useRouter();
    const searchParams = useSearchParams();
    console.log("Date.now()--------------->", new Date())
    // Get the device ID - in a real app, you should generate this uniquely per device
    // and store it persistently
    const [deviceId] = useState(() => {
        // For testing purposes, generate a random device ID if not already stored
        const storedDeviceId = localStorage.getItem('device_id');
        if (storedDeviceId) return storedDeviceId;

        const newDeviceId = `device_${Math.random().toString(36).substring(2, 15)}`;
        localStorage.setItem('device_id', newDeviceId);
        return newDeviceId;
    });

    // Initialize auth service on mount
    useEffect(() => {

        // Check if user just registered
        const justRegistered = searchParams.get('registered');
        if (justRegistered === 'true') {
            setSuccessMessage('Registration successful! Please login with your new account.');
        }
    }, [searchParams]);

    // Redirect if already logged in
    useEffect(() => {
        if (user) {
            console.log("USER LOGGED IN")
        }
    }, [user, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            // Call the Laravel login endpoint
            const response = await axiosInstance.post('/auth/login', {
                email,
                password,
                device_id: deviceId,
                is_mobile: true
            });

            if (response.status === 200) {
                const {user, session, permissions} = response.data;

                // Format the session data to match what your context expects
                const formattedSession = {
                    access_token: session.access_token,
                    refresh_token: session.refresh_token,
                    access_token_expiration: session.access_token_expiration,
                    refresh_token_expiration: session.refresh_token_expiration,
                    device_id: deviceId
                };

                // Save to auth context
                await setLoginUserSuccess(user, formattedSession, permissions);
                // router.push('/dashboard');
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (err: any) {
            console.error('Login error:', err);

            if (err.response?.status === 422) {
                // Laravel validation error
                const errorMessages = err.response?.data?.errors || {};
                const firstError = Object.values(errorMessages)[0] as string[];
                setError(firstError?.[0] || 'Invalid credentials');
            } else if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError('An error occurred during login');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            create a new account
                        </Link>
                    </p>
                </div>

                {successMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                         role="alert">
                        <span className="block sm:inline">{successMessage}</span>
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                         role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">Email
                                address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="text-xs text-gray-500">
                            <p>Using device ID: {deviceId}</p>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                                loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            {loading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}