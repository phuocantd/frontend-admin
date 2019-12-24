import { SET_ALL_CONTRACTS, UPDATE_STATUS_CONTRACT } from '../const/contracts';

export const setAllContracts = arr => {
  return { type: SET_ALL_CONTRACTS, arr };
};

export const updateStatusContracts = (id, status) => {
  return { type: UPDATE_STATUS_CONTRACT, id, status };
};
