import {
  CREATE_SPECIALIZATION,
  SET_ALL_SPECIALIZATION,
  UPDATE_SPECIALIZATION,
  CHANGE_ACTIVE_SPECIALIZATION
} from '../const/specializations';

export const addSpecialization = (name, id) => {
  return { type: CREATE_SPECIALIZATION, id, name };
};

export const setAllSpecialization = arr => {
  return { type: SET_ALL_SPECIALIZATION, arr };
};

export const updateSpecialization = (id, name) => {
  return { type: UPDATE_SPECIALIZATION, id, name };
};

export const changIsActiveSpecialization = (id, isActive) => {
  return { type: CHANGE_ACTIVE_SPECIALIZATION, id, isActive };
};
