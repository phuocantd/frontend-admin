import {
  requestTOKEN,
  createAdminURL,
  allAdminsURL,
  singleAdminURL,
  updateAdminURL
} from '../config';
import { postAPI, getAPI, putAPI } from '../axios';

const createAdmin = (email, password, name, token) => {
  const url = createAdminURL();
  const req = requestTOKEN(token);
  return postAPI(url, { email, password, name }, req);
};

const allAdmins = token => {
  const url = allAdminsURL();
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

const singleAdmin = (id, token) => {
  const url = singleAdminURL(id);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

const updateAdmin = (id, name, token) => {
  const url = updateAdminURL(id);
  const req = requestTOKEN(token);
  return putAPI(url, { name }, req);
};

export { createAdmin, allAdmins, singleAdmin, updateAdmin };
