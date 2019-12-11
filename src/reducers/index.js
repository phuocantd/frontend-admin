import { combineReducers } from 'redux';
import admin from './admin';
import { isAuthenticate, tokenReducer } from './auth';

const reducers = combineReducers({ admin, isAuthenticate, tokenReducer });

export default reducers;
