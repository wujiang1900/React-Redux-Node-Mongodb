import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import HOCReducer from '../reducers/HOCReducer';
import * as reducers from '../reducers';

const combinedReducers = combineReducers(reducers);
const reducer = HOCReducer(combinedReducers);
const middleware = compose (
            applyMiddleware(thunk), 
            applyMiddleware(promiseMiddleware(), logger)
        );

const store = createStore(reducer, middleware);

export default store;