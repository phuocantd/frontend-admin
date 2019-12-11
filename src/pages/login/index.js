import React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';

import { login } from '../../api/services/auth';
import Form from '../../components/Form';
import { changeIsLogin } from '../../actions/auth';

function LoginPage({ dispatch }) {
  const handleSubmit = values => {
    const { username, password, remember } = values;
    login(username, password)
      .then(res => {
        dispatch(changeIsLogin(true));
        if (remember) {
          const { token } = res;
          localStorage.setItem('access-token', token);
        } else {
          localStorage.removeItem('access-token');
        }
      })
      .catch(err => {
        dispatch(changeIsLogin(false));
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
      });
  };
  return <Form handleSubmitForm={handleSubmit} />;
}

export default connect()(LoginPage);
