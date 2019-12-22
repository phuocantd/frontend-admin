export const DOMAIN = `https://zapi-admin.herokuapp.com/api`;

export const requestTOKEN = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

// Auth
export const loginURL = () => `${DOMAIN}/auth/login`;
export const authTokenURL = () => `${DOMAIN}/auth/me`;

// Admin
export const createAdminURL = () => `${DOMAIN}/admins`;
export const getAllAdminsURL = () => `${DOMAIN}/admins`;
export const getSingleAdminURL = id => `${DOMAIN}/admins/${id}`;
export const updateAdminURL = id => `${DOMAIN}/admins/${id}`;
export const deleteAdminURL = id => `${DOMAIN}/admins/${id}`;

// User
export const getAllUsersURL = () => `${DOMAIN}/users`;
export const getSingleUserURL = id => `${DOMAIN}/users/${id}`;
export const lockOrUnlockUserURL = id => `${DOMAIN}/users/${id}`;

// Tag
export const createTagURL = () => `${DOMAIN}/tags`;
export const getAllTagsURL = () => `${DOMAIN}/tags`;
export const getSingleTagURL = id => `${DOMAIN}/tags/${id}`;
export const updateTagURL = id => `${DOMAIN}/tags/${id}`;
export const lockOrUnlockTagURL = id => `${DOMAIN}/tags/${id}`;

// Specialization
export const createSpecializationURL = () => `${DOMAIN}/specializations`;
export const getAllSpecializationsURL = () => `${DOMAIN}/specializations`;
export const getSingleSpecializationURL = id =>
  `${DOMAIN}/specializations/${id}`;
export const updateSpecializationURL = id => `${DOMAIN}/specializations${id}`;
export const lockOrUnlockSpecializationURL = id =>
  `${DOMAIN}/specializations${id}`;
