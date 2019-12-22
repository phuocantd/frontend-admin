export const DOMAIN = `https://zapi-admin.herokuapp.com/api`;

// User
export const getAllUsersURL = () => `${DOMAIN}/users`;
export const getSingleUserURL = id => `${DOMAIN}/users/${id}`;
export const lockOrUnlockUserURL = id => `${DOMAIN}/users/${id}`;
