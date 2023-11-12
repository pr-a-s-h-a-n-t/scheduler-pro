import axios from "axios";

import {
  loginRequest,
  loginSuccess,
  loginFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
} from "../store/action/account";

export const login = (payload) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post(
      `https://taskmanager-production-f206.up.railway.app/user/login`,
      payload
    );
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const signup = (payload) => async (dispatch) => {
  dispatch(signupRequest());

  try {
    const response = await axios.post(
      `https://taskmanager-production-f206.up.railway.app/user/signup`,
      payload
    );
    dispatch(signupSuccess(response.data));
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};
