import axios from 'axios';

function loginAPI(email, password) {
  return {
    type: 'FETCH_DATA',
    payload: axios.post(`${process.env.REACT_APP_API}/api/auth/login`, {
      email,
      password
    })
  };
}

export { loginAPI };
