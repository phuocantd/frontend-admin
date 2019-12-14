import {
  ADD_ADMIN,
  DEL_ADMIN,
  GET_ALL_ADMIN,
  UPDADTE_ADMIN
} from '../const/admin';

const addAdmin = (id, role, email, name) => {
  return { type: ADD_ADMIN, id, role, email, name };
};

const delAdmin = id => {
  return { type: DEL_ADMIN, id };
};

const setAllAdmin = arr => {
  return { type: GET_ALL_ADMIN, arr };
};

const updateAdmin = (id, name, email) => {
  return { type: UPDADTE_ADMIN, name, id, email };
};

export { addAdmin, delAdmin, setAllAdmin, updateAdmin };
