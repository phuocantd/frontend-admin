import { requestTOKEN } from '../config';
import {
  getAllUsersURL,
  getSingleUserURL,
  lockOrUnlockUserURL
} from '../config/user';
import { getAPI, putAPI } from '../axios';

const getAllUsers = token => {
  const url = getAllUsersURL();
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

const getSingleUser = (id, token) => {
  const url = getSingleUserURL(id);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

const lockOrUnlockUserAccount = (id, isActive, token) => {
  const url = lockOrUnlockUserURL(id);
  const req = requestTOKEN(token);
  return putAPI(url, { isActive }, req);
};

export { getAllUsers, getSingleUser, lockOrUnlockUserAccount };
