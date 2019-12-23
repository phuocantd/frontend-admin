import { DOMAIN } from './index';

export const getTopByUser = period => `${DOMAIN}/tops/users?period=${period}`;

export const getTopByTag = period => `${DOMAIN}/tops/tags?period=${period}`;
