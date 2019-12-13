import {
  requestTOKEN,
  createAdminURL,
  getAllAdminsURL,
  getSingleAdminURL,
  updateAdminURL,
  deleteAdminURL
} from '../config';
import { postAPI, getAPI, putAPI, delAPI } from '../axios';

const createAdministrators = (email, password, name, token) => {
  const url = createAdminURL();
  const req = requestTOKEN(token);
  return postAPI(url, { email, password, name }, req);
};

const getAllAdministrators = token => {
  const url = getAllAdminsURL();
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

const getSingleAdministrators = (id, token) => {
  const url = getSingleAdminURL(id);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

const updateAdministrators = (id, name, token) => {
  const url = updateAdminURL(id);
  const req = requestTOKEN(token);
  return putAPI(url, { name }, req);
};

const deleteAdministrator = (id, token) => {
  const url = deleteAdminURL(id);
  const req = requestTOKEN(token);
  return delAPI(url, req);
};

export {
  createAdministrators,
  getAllAdministrators,
  getSingleAdministrators,
  updateAdministrators,
  deleteAdministrator
};
