import { ADD_ADMIN, DEL_ADMIN } from '../const/admin';

const init = [
  {
    key: '0',
    _id: '0',
    role: 'Edward King 0',
    email: '32',
    name: 'London, Park Lane no. 0'
  },
  {
    key: '1',
    _id: '1',
    role: 'Edward King 1',
    email: '32',
    name: 'London, Park Lane no. 1'
  }
];

const adminsReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_ADMIN:
      return [
        ...state,
        {
          _id: action.id,
          role: action.role,
          email: action.email,
          name: action.name
        }
      ];
    case DEL_ADMIN:
      return state.filter(item => item._id !== action.id);
    default:
      return state;
  }
};

export default adminsReducer;
