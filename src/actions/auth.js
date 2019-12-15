import { CHANGE_IS_LOGIN, CHANGE_TOKEN, CHANGE_NAME } from '../const/auth';

const changeIsLogin = value => {
  return { type: CHANGE_IS_LOGIN, value };
};

const changeToken = token => {
  return { type: CHANGE_TOKEN, token };
};

const changeNameAccount = name => {
  return { type: CHANGE_NAME, name };
};

export { changeIsLogin, changeToken, changeNameAccount };
