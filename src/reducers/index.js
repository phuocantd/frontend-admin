import { combineReducers } from 'redux';
import admin from './admin';
import { isAuthenticate, tokenReducer } from './auth';
import user from './user';
import tag from './tag';

const reducers = combineReducers({
  admin,
  isAuthenticate,
  tokenReducer,
  user,
  tag
});

export default reducers;
