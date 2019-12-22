import { DOMAIN } from './index';

// Specialization
export const createSpecializationURL = () => `${DOMAIN}/specializations`;
export const getAllSpecializationsURL = () => `${DOMAIN}/specializations`;
export const getSingleSpecializationURL = id =>
  `${DOMAIN}/specializations/${id}`;
export const updateSpecializationURL = id => `${DOMAIN}/specializations/${id}`;
export const lockOrUnlockSpecializationURL = id =>
  `${DOMAIN}/specializations/${id}`;
