import React, { Component } from 'react';

import AppNavbar from './components/Navbar';
import PageMainContent from './components/pages/PageContent';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <PageMainContent />
      </div>
    );
  }
}

export default App;
