import {UserInterface} from "../interfaces/UserInterface";
import {emptyUser} from "../constants/userConstants";
import {
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_RESET,
    REGISTER_SUCCESS,
    RegisterDispatchTypes
} from "../constants/registerConstants";

interface RegisterDefaultStateInterface {
    loading: boolean,
    register: UserInterface,
    error: any
}

const registerDefaultState: RegisterDefaultStateInterface = {
    loading: false,
    register: emptyUser(),
    error: null,
};

export const registerReducer = (state: RegisterDefaultStateInterface = registerDefaultState, action: RegisterDispatchTypes): RegisterDefaultStateInterface => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {...state, loading: true, error: null};
        case REGISTER_SUCCESS:
            return {...state, loading: false, register: action.payload, error: null};
        case REGISTER_FAIL:
            return {...state, loading: false, error: action.payload};
        case REGISTER_RESET:
            return registerDefaultState;
        default:
            return state;
    }
}
