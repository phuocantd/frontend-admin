import { DOMAIN } from './index';

export const getStatisticByPeriod = period =>
  `${DOMAIN}/statistics?period=${period}`;

export const getStatisticByDMY = (period, month, year) =>
  `${DOMAIN}/period=${period}&month=${month}&year=${year}`;
