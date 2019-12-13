import { SET_ALL_USERS } from '../const/user';

const UserReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return action.arr;
    default:
      return state;
  }
};

export default UserReducer;
