import {
  requestTOKEN,
  createTagURL,
  getAllTagsURL,
  getSingleTagURL,
  updateTagURL,
  deleteTagURL
} from '../config';
import { getAPI, putAPI, postAPI, delAPI } from '../axios';

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

const updateTag = (id, name, token) => {
  const url = updateTagURL(id);
  const req = requestTOKEN(token);
  return putAPI(url, { name }, req);
};

const deleteTag = (id, token) => {
  const url = deleteTagURL(id);
  const req = requestTOKEN(token);
  return delAPI(url, req);
};

export { createTag, getAllTags, getSingleTag, updateTag, deleteTag };
