import {
    createTaskFailure,
    createTaskRequest,
    createTaskSuccess,
    getTaskListFailure,
    getTaskListRequest,
    getTaskListSuccess
} from "../store/action/task.js";
import axios from "axios";
import {BASE_URL} from "../constant/Constant.js";

export const getTaskList = (payload) => async (dispatch) => {
    dispatch(getTaskListRequest());
    try {
        const response = await axios.get(`${BASE_URL}/task/get/all`, {
            params: {userId: payload.userId}
        });
        dispatch(getTaskListSuccess(response.data));
    } catch (error) {
        dispatch(getTaskListFailure(error.message));
    }
};

export const createTask = (payload) => async (dispatch) => {
    dispatch(createTaskRequest());
    try {
        const response = await axios.post(`${BASE_URL}/task/create`, payload);
        dispatch(createTaskSuccess(response.data));
    } catch (error) {
        dispatch(createTaskFailure(error.message));
    }
};