/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

function PublicRoute({ isAuthenticate, children, ...rest }) {
  const locations = useLocation();
  const { from } = locations.state || { from: { pathname: '/' } };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticate ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: from.pathname,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default connect(state => {
  return {
    isAuthenticate: state.isAuthenticate
  };
})(PublicRoute);
