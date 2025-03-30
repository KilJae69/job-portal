import React, {
    useReducer,
    useContext,
    useEffect,
    createContext,
    ReactNode,
} from 'react';

import authReducer from './auth-reducer';

import {
    ActionTypes,
    AuthState,
    User,
    Permissions,
    AuthContextProps,
} from '@/types/auth-types';
import { authService } from '@/services/auth-service';
import {storageService} from "@/services/storage";

const initialState: AuthState = {
    showAlert: false,
    alertText: '',
    alertType: '',
    isStorageLoading: true,
    user: null,
    permissions: null,
};

const AuthContext = createContext<AuthContextProps>({
    ...initialState,
    logoutUser: async () => {},
    setLoginUserSuccess: () => {},
    displayAlert: () => {},
    clearAlert: () => {},
    updateUserBasicInfo: () => {},
});

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load initial state from storage
    useEffect(() => {
        const loadStorageData = async () => {
            try {
                const user = await storageService.getStoredUser();
                const permissions = await storageService.getStoredPermissions();

                dispatch({
                    type: ActionTypes.SET_INITIAL_STATE,
                    payload: { user, permissions },
                });
            } catch (error) {
                console.error('Error loading data from storage:', error);
                dispatch({
                    type: ActionTypes.SET_INITIAL_STATE,
                    payload: { user: null, permissions: null },
                });
            }
        };

        loadStorageData();
    }, []);

    const displayAlert = (alertType: string, alertText: string) => {
        dispatch({
            type: ActionTypes.DISPLAY_ALERT,
            payload: { alertType, alertText },
        });
    };

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: ActionTypes.CLEAR_ALERT });
        }, 3000);
    };

    const updateUserBasicInfo = async (value: Partial<User>) => {
        if (!state.user) return;

        try {
            // Update user through auth service
            const updatedUser = await authService.updateUserInfo(value);

            if (updatedUser) {
                // Update user in state
                dispatch({
                    type: ActionTypes.UPDATE_USER_BASIC_INFO,
                    payload: { value }
                });
            }
        } catch (error) {
            console.error('Error updating user info:', error);
            displayAlert('error', 'Failed to update user information');
        }
    };

    const setLoginUserSuccess = async (
        user: User,
        permissions: Permissions | null,
    ) => {
        try {
            // Store auth data in storage
            await Promise.all([
                storageService.storeUser(user),
                storageService.storePermissions(permissions),
            ]);

            // Update state
            dispatch({
                type: ActionTypes.LOGIN_USER_SUCCESS,
                payload: { user, permissions },
            });
        } catch (error) {
            console.error('Error storing auth data:', error);
            displayAlert('error', 'Failed to store authentication data');
        }
    };

    const logoutUser = async () => {
        try {
            await authService.logout();
            dispatch({ type: ActionTypes.LOGOUT_USER });
        } catch (error) {
            console.error('Error during logout:', error);
            dispatch({ type: ActionTypes.LOGOUT_USER });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                logoutUser,
                setLoginUserSuccess,
                displayAlert,
                clearAlert,
                updateUserBasicInfo,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => {
    return useContext(AuthContext);
};

export {AuthProvider, initialState, useAuthContext};
