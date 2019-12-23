import { DOMAIN } from './index';

export const getAllContractURL = () => `${DOMAIN}/contracts`;

export const getSingleContractURL = id => `${DOMAIN}/contracts/${id}`;

export const updateContractURL = id => `${DOMAIN}/contracts/${id}`;
