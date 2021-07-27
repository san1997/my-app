import { combineReducers } from "redux";
import userReducer from "./users";

const reducers = combineReducers({
    user: userReducer,
});

export default reducers;