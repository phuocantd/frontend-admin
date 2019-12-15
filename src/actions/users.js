import { SET_ALL_USERS, LOCK_UNLOCK_USER } from '../const/users';

const setAllUsers = arr => {
  return { type: SET_ALL_USERS, arr };
};

const lockOrUnlockUser = (id, isActive) => {
  return { type: LOCK_UNLOCK_USER, id, isActive };
};

export { setAllUsers, lockOrUnlockUser };
