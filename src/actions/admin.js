import { ADD_ADMIN, DEL_ADMIN } from '../const/admin';

const addAdmin = (id, role, email, name) => {
  return { type: ADD_ADMIN, id, role, email, name };
};

const delAdmin = id => {
  return { type: DEL_ADMIN, id };
};

export { addAdmin, delAdmin };
