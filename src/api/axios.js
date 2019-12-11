import axios from 'axios';

const getAPI = (url, req = {}) =>
  axios
    .get(url, req)
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err));

const postAPI = (url, data = {}, req = {}) =>
  axios
    .post(url, data, req)
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err));

const putAPI = (url, data = {}, req = {}) =>
  axios
    .put(url, data, req)
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err));

export { getAPI, postAPI, putAPI };
