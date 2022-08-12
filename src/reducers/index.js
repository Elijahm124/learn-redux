import {combineReducers} from "redux";
import counterReducer from "./counter";
import LoggedReducer from "./isLogged";

const rootReducer = combineReducers({
    counter: counterReducer,
    loggedIn: LoggedReducer
});

export default rootReducer;