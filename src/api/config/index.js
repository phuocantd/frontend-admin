const DOMAIN = `https://zapi-admin.herokuapp.com/api`;

const requestTOKEN = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

// Auth
const loginURL = () => `${DOMAIN}/auth/login`;
const authTokenURL = () => `${DOMAIN}/auth/me`;

// Admin
const createAdminURL = () => `${DOMAIN}/admins`;
const getAllAdminsURL = () => `${DOMAIN}/admins`;
const getSingleAdminURL = id => `${DOMAIN}/admins/${id}`;
const updateAdminURL = id => `${DOMAIN}/admins/${id}`;
const deleteAdminURL = id => `${DOMAIN}/admins/${id}`;

// User
const getAllUsersURL = () => `${DOMAIN}/users`;
const getSingleUserURL = id => `${DOMAIN}/users/${id}`;
const lockOrUnlockUserURL = id => `${DOMAIN}/users/${id}`;

// Tag
const createTagURL = () => `${DOMAIN}/tags`;
const getAllTagsURL = () => `${DOMAIN}/tags`;
const getSingleTagURL = id => `${DOMAIN}/tags/${id}`;
const updateTagURL = id => `${DOMAIN}/tags/${id}`;
const lockOrUnlockTagURL = id => `${DOMAIN}/tags/${id}`;

export {
  requestTOKEN,
  loginURL,
  createAdminURL,
  getAllAdminsURL,
  getSingleAdminURL,
  updateAdminURL,
  deleteAdminURL,
  authTokenURL,
  getAllUsersURL,
  getSingleUserURL,
  lockOrUnlockUserURL,
  createTagURL,
  getAllTagsURL,
  getSingleTagURL,
  updateTagURL,
  lockOrUnlockTagURL
};
