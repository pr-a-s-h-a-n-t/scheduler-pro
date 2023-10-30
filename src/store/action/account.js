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
