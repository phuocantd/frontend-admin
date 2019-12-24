import { combineReducers } from 'redux';
import { isAuthenticate, tokenReducer, nameAccountReducer } from './auth';
import admins from './admins';
import users from './users';
import tag from './tag';
import specialization from './specializations';
import constracts from './constracts';

const reducers = combineReducers({
  admins,
  isAuthenticate,
  nameAccountReducer,
  tokenReducer,
  users,
  tag,
  specialization,
  constracts
});

export default reducers;
