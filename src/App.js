import React, { Component } from 'react';

import AppNavbar from './components/Navbar';
import PageMainContent from './components/pages/PageContent';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header>
          <AppNavbar />
        </header>
        <main className="container-fluid">
          <PageMainContent />
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
