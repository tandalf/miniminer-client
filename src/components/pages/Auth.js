import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegistrationForm from '../forms/Registration';
import LoginForm from '../forms/Login';

const AuthPage = (props) => {
  return (
    <Switch>
      <Route path="/auth/login" component={LoginForm}></Route>
      <Route path="/auth/register" component={RegistrationForm}></Route>
    </Switch>

  );
}

export default AuthPage;
