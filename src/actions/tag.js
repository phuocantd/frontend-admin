import { ADD_TAG, SET_ALL_TAGS, UPDATE_TAG, DEL_TAG } from '../const/tag';

const addTag = (name, id) => {
  return { type: ADD_TAG, id, name };
};

const setAllTags = arr => {
  return { type: SET_ALL_TAGS, arr };
};

const updateTags = (id, name) => {
  return { type: UPDATE_TAG, id, name };
};

const delTag = id => {
  return { type: DEL_TAG, id };
};

export { addTag, setAllTags, updateTags, delTag };
