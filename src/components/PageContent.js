import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Home';
import DashboardPage from './Dashboard';

class PageMainContent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/dashboard" component={DashboardPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default PageMainContent;
