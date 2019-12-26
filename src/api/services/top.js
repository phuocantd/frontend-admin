import { requestTOKEN } from '../config';
import { getAPI } from '../axios';
import { getTopByDMYURL, getTopByNumberURL, getAllTopURL } from '../config/top';

export const getTopByDMY = (token, type, day, month, year) => {
  const url = getTopByDMYURL(type, day, month, year);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

export const getTopByNumber = (token, type, period, number, year) => {
  const url = getTopByNumberURL(type, period, number, year);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

export const getAllTop = (token, type) => {
  const url = getAllTopURL(type);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};
