import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import AdminPage from './pages/admins';
import ErrorPage from './pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Layout>
          <Route exact path="/admins">
            <AdminPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Layout>
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
