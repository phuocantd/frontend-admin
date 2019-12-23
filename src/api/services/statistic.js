import { requestTOKEN } from '../config';
import { getAPI } from '../axios';
import {
  getStatisticByPeriodURL,
  getStatisticByDMYURL
} from '../config/statistic';

export const getStatisticByPeriod = (token, period) => {
  const url = getStatisticByPeriodURL(period);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

export const getStatisticByDMY = (token, period, month, year) => {
  const url = getStatisticByDMYURL(period, month, year);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};
