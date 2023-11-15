import * as actionTypes from "../action/actions.js"

const initialState = {
    createResponse: null,
    loading: false,
}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TASK_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.CREATE_TASK_SUCCESS:
            return {
                ...state,
                createResponse: action.payload,
                loading: false
            };
        case actionTypes.CREATE_TASK_FAILURE:
            return {
                ...state,
                createResponse: null,
                loading: false
            };
        default:
            return state;
    }
};

export default taskListReducer;