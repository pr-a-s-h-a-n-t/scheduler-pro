import * as actionTypes from "./actions";

export const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: actionTypes.LOGIN_FAILURE,
  error: error,
});

export const signupRequest = () => ({
  type: actionTypes.SIGNUP_REQUEST,
});

export const signupSuccess = (user) => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: actionTypes.SIGNUP_FAILURE,
  error: error,
});

export const deleteRequest = () => ({
  type: actionTypes.DELETE_REQUEST,
});

export const deleteSuccess = (user) => ({
  type: actionTypes.DELETE_SUCCESS,
  payload: user,
});

export const deleteFailure = (error) => ({
  type: actionTypes.DELETE_FAILURE,
  error: error,
});

export const updateRequest = () => ({
  type: actionTypes.UPDATE_REQUEST,
});

export const updateSuccess = (user) => ({
  type: actionTypes.UPDATE_SUCCESS,
  payload: user,
});

export const updateFailure = (error) => ({
  type: actionTypes.UPDATE_FAILURE,
  error: error,
});