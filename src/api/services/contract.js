import { requestTOKEN } from '../config';
import {
  getAllContractURL,
  getSingleContractURL,
  updateContractURL
} from '../config/contract';
import { getAPI, putAPI } from '../axios';

export const getAllContract = token => {
  const url = getAllContractURL();
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

export const getSingleContract = (token, id) => {
  const url = getSingleContractURL(id);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

export const updateStatusContract = (token, id, status) => {
  const url = updateContractURL(id);
  const req = requestTOKEN(token);
  return putAPI(url, { status }, req);
};
