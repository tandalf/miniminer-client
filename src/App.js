import React, { Component } from 'react';

import AppNavbar from './components/Navbar';

class App extends Component {
  render() {
    const includedNavs = [
      {name: 'DASHBOARD'},
      {name: 'ACCOUNT'}
    ];
    return (
      <div>
        <AppNavbar includedNavs={includedNavs} signedIn={true}/>
      </div>
    );
  }
}

export default App;
