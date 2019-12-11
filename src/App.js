/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Page from './pages';
import LoginPage from './pages/login';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { auth } from './api/services/auth';
import { changeIsLogin } from './actions/auth';

function App({ dispatch }) {
  useEffect(() => {
    const token = localStorage.getItem('access-token');
    if (token) {
      // dispatch(changeIsLogin(true));
      auth(token)
        .then(() => {
          dispatch(changeIsLogin(true));
        })
        .catch(() => {
          dispatch(changeIsLogin(false));
        });
    }
  });
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login">
          <LoginPage />
        </PublicRoute>
        <PrivateRoute>
          <Page />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default connect()(App);
