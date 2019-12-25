import {
  SET_ALL_COMPLAINTS,
  UPDATE_STATUS_COMPLAINTS
} from '../const/complaints';

export const setAllComplaints = arr => {
  return { type: SET_ALL_COMPLAINTS, arr };
};

export const updateStatusComplaints = (id, status) => {
  return { type: UPDATE_STATUS_COMPLAINTS, id, status };
};
