import { getAllUsersURL, getSingleUserURL, requestTOKEN } from '../config';
import { getAPI } from '../axios';

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

export { getAllUsers, getSingleUser };
