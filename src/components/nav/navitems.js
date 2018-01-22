import React from 'react';
import { connect } from 'react-redux';
import {
  NavItem,
  NavLink } from 'reactstrap';

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


export const DashboardMenuItem = (props) => {
  return (
    <NavItem active={props.isActive}>
      <NavLink href="/dashboard/"><i className="fa fa-line-chart" aria-hidden="true"></i>Dashboard</NavLink>
    </NavItem>
  );
}
