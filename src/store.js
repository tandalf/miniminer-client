import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import AppReducer from './reducers/index';

const defaultState = {
  navItems: [
    {name: 'DASHBOARD'},
    {name: 'ACCOUNT'}
  ],
  user: {
    first_name: 'User',
    signedIn: true,
    avartar: "//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120"
  },
  auth: {

  }
};

const store = createStore(AppReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(createBrowserHistory(), store);
export default store;
