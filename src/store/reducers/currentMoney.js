import {FETCH_CURRENT_MONEY_SUCCESS} from '../actions/actionTypes';

const initialState = {
    money: [],
    fullName: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CURRENT_MONEY_SUCCESS:
            return {...state, money: action.money, fullName: action.fullName};
        default:
            return state;
    }
};

export default reducer;