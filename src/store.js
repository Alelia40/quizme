import { createStore, applyMiddleware, combineReducers } from "redux";
import Logger from 'redux-logger';
import questionReducer from './reducers/questionReducers';

const store = createStore(combineReducers({questionReducer}), {}, applyMiddleware(Logger));

export default store;