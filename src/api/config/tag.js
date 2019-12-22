import { DOMAIN } from './index';
// Tag
export const createTagURL = () => `${DOMAIN}/tags`;
export const getAllTagsURL = () => `${DOMAIN}/tags`;
export const getSingleTagURL = id => `${DOMAIN}/tags/${id}`;
export const updateTagURL = id => `${DOMAIN}/tags/${id}`;
export const lockOrUnlockTagURL = id => `${DOMAIN}/tags/${id}`;
