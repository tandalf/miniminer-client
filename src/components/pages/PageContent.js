import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Home';
import DashboardPage from './Dashboard';
import AuthPage from './Auth';

class PageMainContent extends React.Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/dashboard" component={DashboardPage}></Route>
          <Route path="/auth" component={AuthPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default PageMainContent;
