import React from 'react';
import { connect } from 'react-redux';
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

//Profile image component
const MainProfileImage = (props) => {
  if(props.user.signedIn){
    return (
      <img src={props.user.avartar} className="rounded-circle nav-profile-img" />
    );
  }
  else {
    return null;
  }
}

const mapStateToProfileImageProps = (state) => {
  return {
    user: state.user
  };
}

export const AppProfileImage = connect(mapStateToProfileImageProps)(MainProfileImage);

//Dashboard Menu Item
export const DashboardMenuItem = (props) => {
  return (
    <NavItem active={props.isActive}>
      <NavLink href="/dashboard/"><i className="fa fa-line-chart" aria-hidden="true"></i>Dashboard</NavLink>
    </NavItem>
  );
}

//Account Menu item
export const AccountMenuItem = (props) => {
  return (
    <UncontrolledDropdown nav inNavbar >
      <DropdownToggle nav caret>
        <AppProfileImage />
        Account
      </DropdownToggle>
      <DropdownMenu >
        { function() {
          if(props.user.signedIn){
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
            if(props.user.signedIn){
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
}
