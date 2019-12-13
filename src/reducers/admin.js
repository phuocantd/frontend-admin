import {
  ADD_ADMIN,
  DEL_ADMIN,
  GET_ALL_ADMIN,
  UPDADTE_ADMIN
} from '../const/admin';

const adminsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ADMIN:
      return [
        ...state,
        {
          _id: action.id,
          role: action.role,
          email: action.email,
          name: action.name,
          key: action.id
        }
      ];
    case DEL_ADMIN:
      return state.filter(item => item._id !== action.id);
    case GET_ALL_ADMIN:
      return action.arr;
    case UPDADTE_ADMIN:
      return state.map(i =>
        i._id === action.id ? { ...i, name: action.name } : i
      );
    default:
      return state;
  }
};

export default adminsReducer;
