import { SET_ALL_CONTRACTS, UPDATE_STATUS_CONTRACT } from '../const/contracts';

const contractsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_CONTRACTS:
      return action.arr;
    case UPDATE_STATUS_CONTRACT:
      return state.map(i =>
        i.key === action.id ? { ...i, status: action.status } : i
      );
    default:
      return state;
  }
};

export default contractsReducer;
