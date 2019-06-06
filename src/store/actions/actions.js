import {FETCH_LAST_SALARY_SUCCESS, FETCH_CURRENT_MONEY_SUCCESS, FETCH_SUM_OF_YEAR_SALARY_SUCCESS, FETCH_SEND_MONEY_SUCCESS} from "./actionTypes";
import axios from '../../axios-api';

export const fetchLastSalarySuccess = (salary) => {
    return {type: FETCH_LAST_SALARY_SUCCESS, salary}
};

export const fetchCurrentMoneySuccess = (money, fullName) => {
    return {type: FETCH_CURRENT_MONEY_SUCCESS, money, fullName}
};

export const fetchSumOfYearSalarySuccess = (salaries) => {
    return {type: FETCH_SUM_OF_YEAR_SALARY_SUCCESS, salaries}
};

export const fetchSendMoneySuccess = (amount) => {
    return {type: FETCH_SEND_MONEY_SUCCESS, amount}
};

export const fetchCurrentMoney = (username, password) => {
    return dispatch => {
        axios.get(`/current-money/${username}/${password}`).then(response => {
            dispatch(fetchCurrentMoneySuccess(response.data.money, response.data.fullName))
        })
    }
};

export const fetchLastSalary = (username, password) => {
    return dispatch => {
        axios.get(`/main/${username}/${password}`).then(response => {
            dispatch(fetchLastSalarySuccess(response.data))
        })
    }
};

export const fetchSumOfYearSalary = (username, password) => {
    return dispatch => {
        axios.get(`/sum-of-years/${username}/${password}`).then(response => {
            dispatch(fetchSumOfYearSalarySuccess(response.data))
        })
    }
};

export const fetchSendMoney = (username, password, id, amount) => {
    return dispatch => {
        axios.get(`/send-money/username=${username}&password=${password}&id=${id}&amount=${amount}`).then(response => {
            dispatch(fetchSendMoneySuccess(response.data))
        })
    }
};