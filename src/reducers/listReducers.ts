import {UserDepthInterface} from "../interfaces/UserInterface";
import {LIST_FAIL, LIST_REQUEST, LIST_SUCCESS, ListDispatchTypes} from "../constants/list";


interface ListDefaultStateInterface {
    loading: boolean,
    listInfo: UserDepthInterface[] ,
    error: any
}

const userLoginDefaultState: ListDefaultStateInterface = {
    loading: false,
    listInfo: [],
    error: null,
};

export const listReducer = (state: ListDefaultStateInterface = userLoginDefaultState, action: ListDispatchTypes): ListDefaultStateInterface => {
    switch (action.type) {
        case LIST_REQUEST:
            return {...state, loading: true, error: null};
        case LIST_SUCCESS:
            return {...state, loading: false, listInfo: action.payload, error: null};
        case LIST_FAIL:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}
