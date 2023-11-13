import axios from "axios";
import {BASE_URL} from "../constant/Constant";
import {
    loginRequest,
    loginSuccess,
    loginFailure,
    signupRequest,
    signupSuccess,
    signupFailure, deleteRequest, deleteSuccess, deleteFailure, updateRequest, updateSuccess, updateFailure,
} from "../store/action/account";

export const login = (payload) => async (dispatch) => {
    dispatch(loginRequest());

    try {
        const response = await axios.get(`${BASE_URL}/login`, {
            params: payload
        });
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const signup = (payload) => async (dispatch) => {
    dispatch(signupRequest());

    try {
        const response = await axios.post(`${BASE_URL}/signup`, payload);
        dispatch(signupSuccess(response.data));
    } catch (error) {
        dispatch(signupFailure(error.message));
    }
};

export const deleteUser = (payload) => async (dispatch) => {
    dispatch(deleteRequest());

    try {
        const response = await axios.post(`${BASE_URL}/delete`, payload);
        dispatch(deleteSuccess(response.data));
    } catch (error) {
        dispatch(deleteFailure(error.message));
    }
};

export const updateUser = (payload) => async (dispatch) => {
    dispatch(updateRequest());

    try {
        const response = await axios.post(`${BASE_URL}/update`, payload);
        dispatch(updateSuccess(response.data));
    } catch (error) {
        dispatch(updateFailure(error.message));
    }
};