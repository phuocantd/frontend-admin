import { DOMAIN } from './index';

export const getAllComplaintURL = () => `${DOMAIN}/complaints`;

export const getSingleComplaintURL = id => `${DOMAIN}/complaints/${id}`;

export const updateComplaintURL = id => `${DOMAIN}/complaints/${id}`;
