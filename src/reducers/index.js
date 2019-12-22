import { combineReducers } from 'redux';
import { isAuthenticate, tokenReducer, nameAccountReducer } from './auth';
import admins from './admins';
import users from './users';
import tag from './tag';
import specialization from './specializations';

const reducers = combineReducers({
  admins,
  isAuthenticate,
  nameAccountReducer,
  tokenReducer,
  users,
  tag,
  specialization
});

export default reducers;
