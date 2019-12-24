import {
  SET_ALL_CONTRACTS,
  UPDATE_STATUS_CONSTRACT
} from '../const/constracts';

const constractsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_CONTRACTS:
      return action.arr;
    case UPDATE_STATUS_CONSTRACT:
      return state.map(i =>
        i._id === action.id ? { ...i, status: action.status } : i
      );
    default:
      return state;
  }
};

export default constractsReducer;
