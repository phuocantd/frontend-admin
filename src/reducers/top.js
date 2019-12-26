import { SET_ALL_TOP } from '../const/top';

const topReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_TOP:
      return action.arr;

    default:
      return state;
  }
};

export default topReducer;
