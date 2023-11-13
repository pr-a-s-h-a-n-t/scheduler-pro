import * as actionTypes from "../action/actions";

const initialState = {
  userResponse: null,
  loading: false,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
    case actionTypes.SIGNUP_REQUEST:
    case actionTypes.DELETE_REQUEST:
    case actionTypes.UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.SIGNUP_SUCCESS:
    case actionTypes.DELETE_SUCCESS:
    case actionTypes.UPDATE_SUCCESS:
      return {
        ...state,
        userResponse: action.payload,
        loading: false,
      };
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.SIGNUP_FAILURE:
    case actionTypes.DELETE_FAILURE:
    case actionTypes.UPDATE_FAILURE:
      return {
        ...state,
        userResponse: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default accountReducer;
