import {UserDepthInterface, UserInterface} from "../interfaces/UserInterface";

export const emptyUser = (): UserInterface => {
    return {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        alias: "",
        dateOfBirth: "",
        friends: []
    };
};

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export interface UserLoginRequest {
    type: typeof USER_LOGIN_REQUEST
}

export interface UserLoginSuccess {
    type: typeof USER_LOGIN_SUCCESS,
    payload: UserInterface
}

export interface UserLoginFail {
    type: typeof USER_LOGIN_FAIL,
    payload: any
}

export interface UserLogout {
    type: typeof USER_LOGOUT
}

export type UserLoginDispatchTypes = UserLoginRequest | UserLoginSuccess | UserLoginFail | UserLogout;
