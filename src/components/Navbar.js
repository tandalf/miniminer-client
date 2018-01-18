import React from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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

  getProfileImage(){
    if(this.props.user.signedIn){
      return (
        <img src={this.props.user.avartar} className="rounded-circle nav-profile-img" />
      );
    }
  }

  getMenuItems() {
    return this.props.navItems.map( (navDescription, index) => {
      const props = this.props;
      switch(navDescription.name){
        case 'DASHBOARD':
          return (
            <NavItem key={index}>
              <NavLink href="/dashboard/"><i class="fa fa-line-chart" aria-hidden="true"></i>Dashboard</NavLink>
            </NavItem>
          );
        case 'ACCOUNT':
          return (
            <UncontrolledDropdown nav inNavbar key={index}>
              <DropdownToggle nav caret>
                { this.getProfileImage() }
                Account
              </DropdownToggle>
              <DropdownMenu >
                { function() {
                  if(props.signedIn){
                    return (
                      <DropdownItem>
                        Sign Out
                      </DropdownItem>
                    );
                  }
                  else {
                    return (
                      <DropdownItem>
                        Sign In
                      </DropdownItem>
                    );
                  }
                }()}
                <DropdownItem divider />
                  { function() {
                    if(props.signedIn){
                      return (
                        <DropdownItem>
                          Edit Account
                        </DropdownItem>
                      );
                    }
                    else{
                      return (
                        <DropdownItem>
                          Register Account
                        </DropdownItem>
                      );
                    }
                  }()}
              </DropdownMenu>
            </UncontrolledDropdown>
          );
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
