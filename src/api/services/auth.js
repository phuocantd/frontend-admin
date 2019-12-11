import { requestTOKEN, loginURL, authTokenURL } from '../config';
import { postAPI } from '../axios';

const login = (email, password) => {
  const url = loginURL();
  return postAPI(url, { email, password });
};

const auth = token => {
  const url = authTokenURL();
  const req = requestTOKEN(token);
  return postAPI(url, {}, req);
};

export { login, auth };
