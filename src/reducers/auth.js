import {
  CHANGE_IS_LOGIN,
  CHANGE_TOKEN,
  CHANGE_NAME,
  CHANGE_ROLE
} from '../const/auth';

const isAuthenticate = (state = false, action) => {
  switch (action.type) {
    case CHANGE_IS_LOGIN:
      return action.value;
    default:
      return state;
  }
};

const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case CHANGE_TOKEN:
      return action.token;
    default:
      return state;
  }
};

const nameAccountReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return action.name;
    default:
      return state;
  }
};

const roleAccountReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_ROLE:
      return action.role;
    default:
      return state;
  }
};

export { isAuthenticate, tokenReducer, nameAccountReducer, roleAccountReducer };
