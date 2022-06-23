import {UserInterface} from "../interfaces/UserInterface";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_RESET = 'REGISTER_RESET';

export interface RegisterRequest {
    type: typeof REGISTER_REQUEST
}

export interface RegisterSuccess {
    type: typeof REGISTER_SUCCESS,
    payload: UserInterface
}

export interface RegisterFail {
    type: typeof REGISTER_FAIL,
    payload: any
}

export interface RegisterReset {
    type: typeof REGISTER_RESET,
    payload: any
}

export type RegisterDispatchTypes = RegisterRequest | RegisterSuccess | RegisterFail | RegisterReset;
