import { DOMAIN } from './index';

export const getTopByPeriodURL = period =>
  `${DOMAIN}/tops/users?period=${period}`;
