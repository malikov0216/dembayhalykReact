import {FETCH_LAST_SALARY_SUCCESS} from "../actions/actionTypes";

const initialState = {
    salary: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LAST_SALARY_SUCCESS:
            return {...state, salary: action.salary, loading: false};
        default:
            return state
    }
};

export default reducer;