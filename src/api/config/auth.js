import { DOMAIN } from './index';

// Auth
export const loginURL = () => `${DOMAIN}/auth/login`;
export const authTokenURL = () => `${DOMAIN}/auth/me`;
