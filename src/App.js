import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page from './pages';
import LoginPage from './pages/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route>
          <Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
