import * as actionTypes from './actions.js';

export const getTaskListRequest = () => ({
    type: actionTypes.GET_TASK_LIST_REQUEST,
})

export const getTaskListSuccess = (payload) => ({
    type: actionTypes.GET_TASK_LIST_SUCCESS,
    payload: payload,
});

export const getTaskListFailure = (error) => ({
    type: actionTypes.GET_TASK_LIST_FAILURE,
    error: error,
});

export const createTaskRequest = () => ({
    type: actionTypes.CREATE_TASK_REQUEST,
})

export const createTaskSuccess = (payload) => ({
    type: actionTypes.CREATE_TASK_SUCCESS,
    payload: payload,
});

export const createTaskFailure = (error) => ({
    type: actionTypes.CREATE_TASK_FAILURE,
    error: error,
});