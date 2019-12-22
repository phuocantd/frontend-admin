export const DOMAIN = `https://zapi-admin.herokuapp.com/api`;

export const requestTOKEN = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};
