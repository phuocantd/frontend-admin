import { SET_ALL_CONTRACTS, UPDATE_STATUS_CONTRACT } from '../const/contracts';

export const setAllConstracts = arr => {
  return { type: SET_ALL_CONTRACTS, arr };
};

export const updateStatusConstracts = (id, status) => {
  return { type: UPDATE_STATUS_CONTRACT, id, status };
};
