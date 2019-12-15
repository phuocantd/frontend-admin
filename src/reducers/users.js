import { SET_ALL_USERS, LOCK_UNLOCK_USER } from '../const/users';

const UserReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return action.arr;
    case LOCK_UNLOCK_USER:
      return state.map(i =>
        i._id === action.id ? { ...i, isActive: action.isActive.toString() } : i
      );
    default:
      return state;
  }
};

export default UserReducer;
