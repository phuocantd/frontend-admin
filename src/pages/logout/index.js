import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeIsLogin, changeToken } from '../../actions/auth';

function Logout({ dispatch }) {
  useEffect(() => {
    localStorage.removeItem('access-token');
    dispatch(changeIsLogin(false));
    dispatch(changeToken(null));
  });
  return (
    <>
      <Redirect to="/login" />
    </>
  );
}

export default connect()(Logout);
