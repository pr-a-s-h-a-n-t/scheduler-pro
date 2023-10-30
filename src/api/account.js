import axios from "axios";
import { BASE_URL } from "../config/config";
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
    const response = await axios.post(`${BASE_URL}/api/login`, payload);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const signup = (payload) => async (dispatch) => {
  dispatch(signupRequest());

  try {
    const response = await axios.post(`${BASE_URL}/api/signup`, payload);
    dispatch(signupSuccess(response.data));
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};
