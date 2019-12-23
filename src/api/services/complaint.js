import { requestTOKEN } from '../config';
import { getAPI, putAPI } from '../axios';
import {
  getAllComplaintURL,
  getSingleComplaintURL,
  updateComplaintURL
} from '../config/complaint';

export const getAllComplaint = token => {
  const url = getAllComplaintURL();
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

export const getSingleComplaint = (token, id) => {
  const url = getSingleComplaintURL(id);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

export const updateStatusComplaint = (token, id, status) => {
  const url = updateComplaintURL(id);
  const req = requestTOKEN(token);
  return putAPI(url, { status }, req);
};
