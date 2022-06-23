////////////////////////////////////////////////////////////////////////////////////////////////////

import {Dispatch} from "redux";

import axios from "axios";
import {LIST_FAIL, LIST_REQUEST, LIST_SUCCESS, ListDispatchTypes} from "../constants/list";
import {UserDepthInterface} from "../interfaces/UserInterface";

export const notFriendsList = () => async (dispatch: Dispatch<ListDispatchTypes>) => {
    try {
        dispatch({type: LIST_REQUEST});
        const config = {
            headers: {'Content-Type': 'application/json'}
        };
        const {data}: { data: UserDepthInterface[] } = await axios.get("http://localhost:8000" + '/notfriends', config);
        dispatch({type: LIST_SUCCESS, payload: data});
        localStorage.removeItem("notFriendsList");
        localStorage.setItem('notFriendsList', JSON.stringify(data));

    } catch (error: any) {
        dispatch({
            type: LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        });
    }

};
