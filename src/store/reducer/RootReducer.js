import { combineReducers } from "redux";
import accountReducer from "./account";
import taskListReducer from "./taskListReducer.js";
import createTaskReducer from "./createTaskReducer.js";
const rootReducer = combineReducers({
  account: accountReducer,
  getTaskList: taskListReducer,
  createTask: createTaskReducer
});

export default rootReducer;
