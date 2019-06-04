import {FETCH_SEND_MONEY_SUCCESS} from "../actions/actionTypes";

const initialState = {
    data: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEND_MONEY_SUCCESS:
            return {...state, data: action.amount}
        default:
            return state
    }
};

export default reducer;