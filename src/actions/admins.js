import {
  ADD_ADMIN,
  DEL_ADMIN,
  GET_ALL_ADMIN,
  UPDATE_ADMIN
} from '../const/admins';

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
  return { type: UPDATE_ADMIN, name, id, email };
};

export { addAdmin, delAdmin, setAllAdmin, updateAdmin };
