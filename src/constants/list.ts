import {UserDepthInterface} from "../interfaces/UserInterface";

export const LIST_REQUEST = 'LIST_REQUEST';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_FAIL = 'LIST_FAIL';

export interface ListRequest {
    type: typeof LIST_REQUEST
}

export interface ListSuccess {
    type: typeof LIST_SUCCESS,
    payload: UserDepthInterface[]
}

export interface ListFail {
    type: typeof LIST_FAIL,
    payload: any
}


export type ListDispatchTypes = ListRequest | ListSuccess | ListFail;
