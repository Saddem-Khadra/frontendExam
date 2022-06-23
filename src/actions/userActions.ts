import {Dispatch} from "redux";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS, USER_LOGOUT,
    UserLoginDispatchTypes
} from "../constants/userConstants";
import {UserDepthInterface, UserInterface} from "../interfaces/UserInterface";
import axios from "axios";

axios.defaults.withCredentials = true;

export const login = (email: string, password: string) => async (dispatch: Dispatch<UserLoginDispatchTypes>) => {
    try {
        dispatch({type: USER_LOGIN_REQUEST});
        const config = {
            headers: {'Content-Type': 'application/json'}
        };
        const {data}: { data: UserInterface } = await axios.post("http://localhost:8000" + '/login', {
            'email': email,
            'password': password
        }, config);
        dispatch({type: USER_LOGIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error: any) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        });
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////

export const logout = () => async (dispatch: Dispatch<UserLoginDispatchTypes>) => {
    try {
        const config = {
            headers: {'Content-Type': 'application/json'}
        };
        await axios.post("http://localhost:8000" + '/logout', config);
        localStorage.removeItem("userInfo");
        dispatch({type: USER_LOGOUT});
    } catch (error: any) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        });
    }

};

////////////////////////////////////////////////////////////////////////////////////////////////////

export const friendsList = (add?: boolean, friend_id?: number) => async (dispatch: Dispatch<UserLoginDispatchTypes>) => {
    try {
        dispatch({type: USER_LOGIN_REQUEST});
        const config = {
            headers: {'Content-Type': 'application/json'}
        };
        if (friend_id) {
            const {data}: { data: UserInterface } = await axios.put("http://localhost:8000" + '/register', {
                'friend_id': friend_id,
                'add': add
            }, config);
            dispatch({type: USER_LOGIN_SUCCESS, payload: data});
            localStorage.removeItem("userInfo");
            localStorage.setItem('userInfo', JSON.stringify(data));
        } else {
            const {data}: { data: UserInterface } = await axios.get("http://localhost:8000" + '/user', config);
            dispatch({type: USER_LOGIN_SUCCESS, payload: data});
            localStorage.removeItem("userInfo");
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
    } catch (error: any) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        });
    }

};


