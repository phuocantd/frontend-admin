import { requestTOKEN } from '../config';
import { getAPI } from '../axios';
import { getTopByPeriodURL } from '../config/top';

export const getTopByPeriod = (token, period) => {
  const url = getTopByPeriodURL(period);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};
