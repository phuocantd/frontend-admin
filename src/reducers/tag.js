import { ADD_TAG, SET_ALL_TAGS, UPDATE_TAG, DEL_TAG } from '../const/tag';

const TagReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TAG:
      return [
        ...state,
        {
          name: action.name,
          _id: action.id,
          key: action.id,
          isActive: 'true'
        }
      ];
    case SET_ALL_TAGS:
      return action.arr;
    case UPDATE_TAG:
      return state.map(i =>
        i._id === action.id ? { ...i, name: action.name } : i
      );
    case DEL_TAG:
      return state.filter(i => i._id !== action.id);
    default:
      return state;
  }
};

export default TagReducer;
