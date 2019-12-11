const DOMAIN = `https://zapi-admin.herokuapp.com/api`;

const requestTOKEN = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

const loginURL = () => `${DOMAIN}/auth/login`;
const createAdminURL = () => `${DOMAIN}/admins`;
const allAdminsURL = () => `${DOMAIN}/admins`;
const singleAdminURL = id => `${DOMAIN}/admins/${id}`;
const updateAdminURL = id => `${DOMAIN}/admins/${id}`;
const authTokenURL = () => `${DOMAIN}/auth/me`;

export {
  requestTOKEN,
  loginURL,
  createAdminURL,
  allAdminsURL,
  singleAdminURL,
  updateAdminURL,
  authTokenURL
};
