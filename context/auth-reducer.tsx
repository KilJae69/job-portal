import {ActionTypes, AuthAction, AuthState} from "@/types/auth-types";

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case ActionTypes.DISPLAY_ALERT:
            return {
                ...state,
                showAlert: true,
                alertType: action.payload.alertType,
                alertText: action.payload.alertText,
            };
        case ActionTypes.CLEAR_ALERT:
            return {
                ...state,
                showAlert: false,
                alertType: '',
                alertText: '',
            };
        case ActionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                permissions: action.payload.permissions,
            };
        case ActionTypes.LOGOUT_USER:
            return {
                ...state,
                user: null,
                permissions: null,
            };
        case ActionTypes.SET_STORAGE_LOADING:
            return {
                ...state,
                isStorageLoading: action.payload,
            };
        case ActionTypes.UPDATE_USER_BASIC_INFO:
            return {
                ...state,
                user: {
                    ...state.user!,
                    ...action.payload.value,
                },
            };
        case ActionTypes.SET_INITIAL_STATE:
            return {
                ...state,
                user: action.payload.user,
                permissions: action.payload.permissions,
                isStorageLoading: false,
            };
        default:
            return state;
    }
};

export default authReducer;
