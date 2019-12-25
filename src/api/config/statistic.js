import { DOMAIN } from './index';

export const getStatisticByPeriodURL = period =>
  `${DOMAIN}/statistics?period=${period}`;

export const getStatisticByDMYURL = (period, month, year) =>
  `${DOMAIN}/statistics?period=${period}&month=${month}&year=${year}`;
