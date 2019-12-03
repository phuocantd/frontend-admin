import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages';
import LoginPage from './pages/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
