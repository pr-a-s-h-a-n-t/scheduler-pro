import * as actionTypes from "../action/actions.js"

const initialState = {
    listResponse: null,
    loading: false,
}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TASK_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.GET_TASK_LIST_SUCCESS:
            return {
                ...state,
                listResponse: action.payload,
                loading: false
            };
        case actionTypes.GET_TASK_LIST_FAILURE:
            return {
                ...state,
                listResponse: null,
                loading: false
            };
        default:
            return state;
    }
};

export default taskListReducer;