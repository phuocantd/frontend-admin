import { combineReducers } from 'redux';
import { isAuthenticate, tokenReducer } from './auth';
import admins from './admins';
import users from './users';
import tag from './tag';

const reducers = combineReducers({
  admins,
  isAuthenticate,
  tokenReducer,
  users,
  tag
});

export default reducers;
