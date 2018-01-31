import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import { AccountMenuItem } from './navitems';

const middlewares = []
const mockStore = configureStore(middlewares)

describe('<AccountMenuItem />', () => {
  it('should contain sign out submenu item if user is signed in', () => {
    const user = {
      signedIn: true
    };
    const initialState = {
      user
    }
    const store = mockStore(initialState);
    const accountMenuItem = mount((<Provider store={store}><AccountMenuItem user={user} /></Provider>));
    const signOutSubMenuItem = <button>Sign Out</button>;

    expect(accountMenuItem.containsMatchingElement(signOutSubMenuItem)).toEqual(true);
  });
});
