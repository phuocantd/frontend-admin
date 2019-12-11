import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeIsLogin } from '../../actions/auth';

function Logout({ dispatch }) {
  useEffect(() => {
    localStorage.removeItem('access-token');
    dispatch(changeIsLogin(false));
  });
  return (
    <>
      <Redirect to="/login" />
    </>
  );
}

export default connect()(Logout);
