import { combineReducers } from "redux";
import accountReducer from "./account";
import taskListReducer from "./task.js";
const rootReducer = combineReducers({
  account: accountReducer,
  getTaskList: taskListReducer
});

export default rootReducer;
