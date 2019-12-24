import {
  SET_ALL_CONTRACTS,
  UPDATE_STATUS_CONSTRACT
} from '../const/constracts';

export const setAllConstracts = arr => {
  return { type: SET_ALL_CONTRACTS, arr };
};

export const updateStatusConstracts = (id, status) => {
  return { type: UPDATE_STATUS_CONSTRACT, id, status };
};
