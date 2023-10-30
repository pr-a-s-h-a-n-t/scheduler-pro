// src/reducers/index.js
import { combineReducers } from "redux";
import * as authReducer from "./Auth";

const rootReducer = combineReducers({
  login: authReducer.LoginReducer,
  signup: authReducer.signupReducer,
});

export default rootReducer;
