import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import AppReducer from './reducers/index';

const defaultState = {
  navItems: [
    {name: 'DASHBOARD'},
    {name: 'ACCOUNT'}
  ],
  user: {
    signedIn: true,
    avartar: "//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120"
  }
};

const store = createStore(AppReducer, defaultState);

export const history = syncHistoryWithStore(createBrowserHistory(), store);
export default store;
