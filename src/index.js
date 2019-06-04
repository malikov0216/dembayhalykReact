import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {Provider} from 'react-redux';
import thunkMiddleWare from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import lastSalaryReducer from './store/reducers/lastSalary';
import sumOfYearSalary from './store/reducers/sumOfYearSalary';
import sendMoney from './store/reducers/sendMoney';
import currentMoney from './store/reducers/currentMoney';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    lastSalary: lastSalaryReducer,
    sumOfYear: sumOfYearSalary,
    sendM: sendMoney,
    currentMoney: currentMoney
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
