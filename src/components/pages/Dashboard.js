import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/actionCreators';

class MainDashboardPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const navItems = [
      {name: 'DASHBOARD', isActive: true},
      {name: 'ACCOUNT'}
    ];
    this.props.setNavItems(navItems);
  }

  render(){
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const DashboardPage = connect(mapStateToProps, mapDispatchToProps)(MainDashboardPage);
export default DashboardPage;
