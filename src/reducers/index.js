import { combineReducers } from 'redux';
import { isAuthenticate, tokenReducer, nameAccountReducer } from './auth';
import admins from './admins';
import users from './users';
import tag from './tag';
import specialization from './specializations';
import contracts from './contracts';
import complaints from './complaints';
import statistics from './statistics';
import tops from './top';

const reducers = combineReducers({
  admins,
  isAuthenticate,
  nameAccountReducer,
  tokenReducer,
  users,
  tag,
  specialization,
  contracts,
  complaints,
  statistics,
  tops
});

export default reducers;
