import { requestTOKEN } from '../config';
import {
  createTagURL,
  getAllTagsURL,
  getSingleTagURL,
  updateTagURL,
  lockOrUnlockTagURL
} from '../config/tag';
import { getAPI, putAPI, postAPI } from '../axios';

const createTag = (name, token) => {
  const url = createTagURL();
  const req = requestTOKEN(token);
  return postAPI(url, { name }, req);
};

const getAllTags = token => {
  const url = getAllTagsURL();
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

const getSingleTag = (id, token) => {
  const url = getSingleTagURL(id);
  const req = requestTOKEN(token);
  return getAPI(url, req);
};

const updateATag = (id, name, token) => {
  const url = updateTagURL(id);
  const req = requestTOKEN(token);
  return putAPI(url, { name }, req);
};

const lockOrUnlockTag = (id, isActive, token) => {
  const url = lockOrUnlockTagURL(id);
  const req = requestTOKEN(token);
  return putAPI(url, { isActive }, req);
};

export { createTag, getAllTags, getSingleTag, updateATag, lockOrUnlockTag };
