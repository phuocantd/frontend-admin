import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Layout from '../components/Layout';
import HomePage from './home';
import ErrorPage from './404';
import AdminsPage from './admins';
import TagsPage from './tags';
import Logout from './logout';
import UsersPage from './users';

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
        <Route exact path={`${path}users`}>
          <UsersPage />
        </Route>
        <Route exact path={`${path}tags`}>
          <TagsPage />
        </Route>

        <Route exact path={`${path}log-out`}>
          <Logout />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Page;
