import {FETCH_SUM_OF_YEAR_SALARY_SUCCESS} from "../actions/actionTypes";

const initialState = {
    sumOfYearSalary: [],
    loadingSum: true
};

const reducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUM_OF_YEAR_SALARY_SUCCESS:
            return {...state, sumOfYearSalary: action.salaries, loadingSum: false};
        default:
            return state
    }
};

export default reducer;