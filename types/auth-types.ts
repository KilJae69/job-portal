export enum ActionTypes {
    DISPLAY_ALERT = 'DISPLAY_ALERT',
    CLEAR_ALERT = 'CLEAR_ALERT',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    REGENERATE_ACCESS_TOKEN = 'REGENERATE_ACCESS_TOKEN',
    LOGOUT_USER = 'LOGOUT_USER',
    UPDATE_USER_BASIC_INFO = 'UPDATE_USER_BASIC_INFO',
    SET_STORAGE_LOADING = 'SET_STORAGE_LOADING',
    SET_INITIAL_STATE = 'SET_INITIAL_STATE',
}

export interface User {
    id: number;
    name: string;
    email: string | null;
}

export interface Session {
    access_token: string;
    access_token_expiration: string | number;
    refresh_token: string;
    refresh_token_expiration: string | number;
    device_id:string;
}

export interface Permissions {
    // Define permissions properties
}

// Define the state interface

export interface AuthState {
    showAlert: boolean;
    alertText: string;
    alertType: string;
    isStorageLoading: boolean;
    user: User | null;
    permissions: Permissions | null;
}

export interface DisplayAlertAction {
    type: ActionTypes.DISPLAY_ALERT;
    payload: {
        alertType: string;
        alertText: string;
    };
}

export interface ClearAlertAction {
    type: ActionTypes.CLEAR_ALERT;
}

export interface LoginUserSuccessAction {
    type: ActionTypes.LOGIN_USER_SUCCESS;
    payload: {
        user: User;
        permissions: Permissions | null;
    };
}

export interface LogoutUserAction {
    type: ActionTypes.LOGOUT_USER;
}

export interface UpdateUserBasicInfoAction {
    type: ActionTypes.UPDATE_USER_BASIC_INFO;
    payload: {
        value: Partial<User>;
    };
}

export interface SetStorageLoadingAction {
    type: ActionTypes.SET_STORAGE_LOADING;
    payload: boolean;
}

export interface SetInitialStateAction {
    type: ActionTypes.SET_INITIAL_STATE;
    payload: {
        user: User | null;
        permissions: Permissions | null;
    };
}

export type AuthAction =
    | DisplayAlertAction
    | ClearAlertAction
    | LoginUserSuccessAction
    | LogoutUserAction
    | UpdateUserBasicInfoAction
    | SetStorageLoadingAction
    | SetInitialStateAction;

export interface AuthContextProps extends AuthState {
    logoutUser: () => Promise<void>;
    setLoginUserSuccess: (
        user: User,
        permissions: Permissions | null,
    ) => void;
    displayAlert: (alertType: string, alertText: string) => void;
    clearAlert: () => void;
    updateUserBasicInfo: (value: Partial<User>) => void;
}
