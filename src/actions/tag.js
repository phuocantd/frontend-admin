import {
  ADD_TAG,
  SET_ALL_TAGS,
  UPDATE_TAG,
  DEL_TAG,
  CHANGE_IS_ACTIVE_TAG
} from '../const/tag';

const addTag = (name, id) => {
  return { type: ADD_TAG, id, name };
};

const setAllTags = arr => {
  return { type: SET_ALL_TAGS, arr };
};

const updateTag = (id, name) => {
  return { type: UPDATE_TAG, id, name };
};

const delTag = id => {
  return { type: DEL_TAG, id };
};

const changIsActiveTag = (id, isActive) => {
  return { type: CHANGE_IS_ACTIVE_TAG, id, isActive };
};

export { addTag, setAllTags, updateTag, delTag, changIsActiveTag };
