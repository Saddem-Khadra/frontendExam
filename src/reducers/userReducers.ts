import {UserDepthInterface, UserInterface} from "../interfaces/UserInterface";
import {
    emptyUser,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS, USER_LOGOUT,
    UserLoginDispatchTypes,
} from "../constants/userConstants";

interface UserDefaultStateInterface {
    loading: boolean,
    userInfo: UserInterface ,
    error: any
}

const userLoginDefaultState: UserDefaultStateInterface = {
    loading: false,
    userInfo: emptyUser(),
    error: null,
};

export const userLoginReducer = (state: UserDefaultStateInterface = userLoginDefaultState, action: UserLoginDispatchTypes): UserDefaultStateInterface => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {...state, loading: true, error: null};
        case USER_LOGIN_SUCCESS:
            return {...state, loading: false, userInfo: action.payload, error: null};
        case USER_LOGIN_FAIL:
            return {...state, loading: false, error: action.payload};
        case USER_LOGOUT:
            return userLoginDefaultState;
        default:
            return state;
    }
}
