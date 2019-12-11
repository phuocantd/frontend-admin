import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Layout from '../components/Layout';
import HomePage from './home';
import ErrorPage from './404';
import AdminsPage from './admins';
import TagsPage from './tags';
import AdminPage from './admin';

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
        <Route exact path={`${path}tags`}>
          <TagsPage />
        </Route>
        <Route exact path={`${path}admin/:id`}>
          <AdminPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Page;
