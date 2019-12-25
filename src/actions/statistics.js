import { SET_ALL_STATISTIC } from '../const/statistics';

export const setAllStatistics = arr => {
  return { type: SET_ALL_STATISTIC, arr };
};
