import { SET_ALL_STATISTIC } from '../const/statistics';

const statisticsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_STATISTIC:
      return action.arr;

    default:
      return state;
  }
};

export default statisticsReducer;
