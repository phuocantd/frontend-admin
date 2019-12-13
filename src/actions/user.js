import { SET_ALL_USERS } from '../const/user';

const setAllUsers = arr => {
  return { type: SET_ALL_USERS, arr };
};

export { setAllUsers };
