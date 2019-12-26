import {
  CHANGE_IS_LOGIN,
  CHANGE_TOKEN,
  CHANGE_NAME,
  CHANGE_ROLE
} from '../const/auth';

const changeIsLogin = value => {
  return { type: CHANGE_IS_LOGIN, value };
};

const changeToken = token => {
  return { type: CHANGE_TOKEN, token };
};

const changeNameAccount = name => {
  return { type: CHANGE_NAME, name };
};

const changeRoleAccount = role => {
  return { type: CHANGE_ROLE, role };
};

export { changeIsLogin, changeToken, changeNameAccount, changeRoleAccount };
