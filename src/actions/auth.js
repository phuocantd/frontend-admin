import { CHANGE_IS_LOGIN, CHANGE_TOKEN } from '../const/auth';

const changeIsLogin = value => {
  return { type: CHANGE_IS_LOGIN, value };
};

const changeToken = token => {
  return { type: CHANGE_TOKEN, token };
};

export { changeIsLogin, changeToken };
