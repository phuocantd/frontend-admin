import {
  SET_ALL_COMPLAINTS,
  UPDATE_STATUS_COMPLAINTS
} from '../const/complaints';

const ComplaintsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_COMPLAINTS:
      return action.arr;
    case UPDATE_STATUS_COMPLAINTS:
      return state.map(i =>
        i.key === action.id ? { ...i, status: action.status } : i
      );

    default:
      return state;
  }
};

export default ComplaintsReducer;
