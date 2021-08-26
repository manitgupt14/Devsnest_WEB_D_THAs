import LoginReducer from "./Login";
import MailReducer from "./mail";


import { combineReducers } from "redux";

const rootReducer =combineReducers({
    Login : LoginReducer,
    Mail : MailReducer ,
});

export default rootReducer;