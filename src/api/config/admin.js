import { DOMAIN } from './index';
// Admin
export const createAdminURL = () => `${DOMAIN}/admins`;
export const getAllAdminsURL = () => `${DOMAIN}/admins`;
export const getSingleAdminURL = id => `${DOMAIN}/admins/${id}`;
export const updateAdminURL = id => `${DOMAIN}/admins/${id}`;
export const deleteAdminURL = id => `${DOMAIN}/admins/${id}`;
