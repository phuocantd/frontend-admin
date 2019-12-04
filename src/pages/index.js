import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Layout from '../components/Layout';
import HomePage from './home';
import AdminsPage from './admins';
import ErrorPage from './404';

function Page() {
  const { path } = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <HomePage />
        </Route>
        <Route exact path={`${path}admins`}>
          <AdminsPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Page;
