import {
  CREATE_SPECIALIZATION,
  SET_ALL_SPECIALIZATION,
  UPDATE_SPECIALIZATION,
  CHANGE_ACTIVE_SPECIALIZATION
} from '../const/specializations';

const specializationReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_SPECIALIZATION:
      return [
        ...state,
        {
          name: action.name,
          _id: action.id,
          key: action.id,
          isActive: 'true'
        }
      ];
    case SET_ALL_SPECIALIZATION:
      return action.arr;
    case UPDATE_SPECIALIZATION:
      return state.map(i =>
        i._id === action.id ? { ...i, name: action.name } : i
      );
    case CHANGE_ACTIVE_SPECIALIZATION:
      return state.map(i =>
        i._id === action.id ? { ...i, isActive: action.isActive.toString() } : i
      );
    default:
      return state;
  }
};

export default specializationReducer;
