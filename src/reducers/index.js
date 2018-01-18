import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { navItems } from './navigators';
import { user } from './auth';

const AppReducer = combineReducers({
  navItems,
  user,
  routing
});

export default AppReducer;
