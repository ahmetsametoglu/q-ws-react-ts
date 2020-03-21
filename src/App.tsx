import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/error" component={ErrorPage} />

        <Redirect to="/home" exact path="/" />
        <Redirect to="/error"></Redirect>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
