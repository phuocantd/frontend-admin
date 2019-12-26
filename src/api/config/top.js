import { DOMAIN } from './index';

export const getTopByDMYURL = (type, day, month, year) =>
  `${DOMAIN}/tops/${type}?day=${day}&month=${month}&year=${year}`;

export const getTopByNumberURL = (type, period, number, year) =>
  `${DOMAIN}/tops/${type}?${period}=${number}&year=${year}`;

export const getAllTopURL = type => `${DOMAIN}/tops/${type}?all=true`;
