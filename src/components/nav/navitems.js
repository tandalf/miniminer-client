import React from 'react';
import { connect } from 'react-redux';

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
