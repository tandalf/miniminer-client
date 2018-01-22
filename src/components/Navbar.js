import React from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav } from 'reactstrap';

import { DashboardMenuItem,
  AccountMenuItem } from './nav/navitems';

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getMenuItems() {
    return this.props.navItems.map( (navDescription, index) => {
      const props = this.props;
      switch(navDescription.name){
        case 'DASHBOARD':
          return <DashboardMenuItem key={index} {...navDescription} />
        case 'ACCOUNT':
          return <AccountMenuItem key={index} user={props.user} {...navDescription} />
        default:
          console.log('Unknown nav item name ' + navDescription.name);
          return <span style={{margin: 0, padding: 0}} key={index}></span>
      }
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Miniminer</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              { this.getMenuItems() }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navItems: state.navItems,
    user: state.user
  };
};

const AppNavbar = connect(mapStateToProps)(MainNavbar);
export default AppNavbar;
