import {Dispatch} from "redux";
import axios from "axios";
import {REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, RegisterDispatchTypes} from "../constants/registerConstants";

export const sendRegister = (first_name: string, last_name: string, email: string, password: string, alias: string, dateOfBirth: string) => async (dispatch: Dispatch<RegisterDispatchTypes>) => {
    try {
        dispatch({type: REGISTER_REQUEST});
        const config = {headers: {'Content-type': 'application/json'}};
        const {data} = await axios.post("http://localhost:8000" + '/register', {
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'password': password,
            'alias': alias,
            'dateOfBirth': dateOfBirth,
        }, config);
        dispatch({type: REGISTER_SUCCESS, payload: data});
    } catch (error: any) {
        console.log(error.response.data.email)
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        });
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////
