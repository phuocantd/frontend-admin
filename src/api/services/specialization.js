import { requestTOKEN } from '../config';
import {
  createSpecializationURL,
  getAllSpecializationsURL,
  getSingleSpecializationURL,
  updateSpecializationURL,
  lockOrUnlockSpecializationURL
} from '../config/specialization';
import { getAPI, putAPI, postAPI } from '../axios';

export const createSpecialization = (name, token) => {
  const url = createSpecializationURL();
  const req = requestTOKEN(token);
  return postAPI(url, { name }, req);
};

export const getAllSpecializations = token => {
  const url = getAllSpecializationsURL();
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

export const getSingleSpecialization = (id, token) => {
  const url = getSingleSpecializationURL(id);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

export const updateASpecialization = (id, name, token) => {
  const url = updateSpecializationURL(id);
  const req = requestTOKEN(token);
  return putAPI(url, { name }, req);
};

export const lockOrUnlockSpecialization = (id, isActive, token) => {
  const url = lockOrUnlockSpecializationURL(id);
  const req = requestTOKEN(token);
  return putAPI(url, { isActive }, req);
};
