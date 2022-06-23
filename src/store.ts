import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {userLoginReducer} from "./reducers/userReducers";
import {UserInterface} from "./interfaces/UserInterface";
import {emptyUser} from "./constants/userConstants";
import {registerReducer} from "./reducers/registerReducers";
import {listReducer} from "./reducers/listReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    register: registerReducer,
    list:listReducer
});

export type RootStore = ReturnType<typeof reducer>;

const userInfoFromStorage: UserInterface = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo') as string) : emptyUser();

const initialState = {
    userLogin: {loading: false, userInfo: userInfoFromStorage, error: null},
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
