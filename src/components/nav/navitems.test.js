import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { DropdownItem } from 'reactstrap';

import { AccountMenuItem } from './navitems';

let middlewares = []
let mockStore = configureStore(middlewares)

describe('<AccountMenuItem />', () => {
  const signedInUser = {signedIn: true};
  const signedOutUser = {signedIn: false};
  it('should contain sign out submenu item if user is signed in', () => {
    const initialState = {
      user: signedInUser
    };
    const store = mockStore(initialState);
    const accountMenuItem = mount((<Provider store={store}><AccountMenuItem user={signedInUser} /></Provider>));
    const signOutSubMenuItem = <DropdownItem>Sign Out</DropdownItem>;

    expect(accountMenuItem.containsMatchingElement(signOutSubMenuItem)).toEqual(true);
  });

  it("should contain an 'Edit Account' submenu item if the user is signedIn", () => {
    const initialState = {
      user: signedInUser
    };
    const store = mockStore(initialState);
    const accountMenuItem = mount((<Provider store={store}><AccountMenuItem user={signedInUser} /></Provider>));
    const editAccountSubMenuItem = <DropdownItem>Edit Account</DropdownItem>;

    expect(accountMenuItem.containsMatchingElement(editAccountSubMenuItem)).toEqual(true);
  });

  it("should contain a 'Sign In' submenu item if the user is signed out", () => {
    const initialState = {
      user: signedOutUser
    };
    const store = mockStore(initialState);
    const accountMenuItem = mount((<Provider store={store}><AccountMenuItem user={signedOutUser} /></Provider>));
    const signInSubMenuItem = <DropdownItem>Sign In</DropdownItem>;

    expect(accountMenuItem.containsMatchingElement(signInSubMenuItem)).toEqual(true);
  });

  it("should contain a 'Register Account' submenu item if the user is signed out", () => {
    const initialState = {
      user: signedOutUser
    };
    const store = mockStore(initialState);
    const accountMenuItem = mount((<Provider store={store}><AccountMenuItem user={signedOutUser} /></Provider>));
    const registerAccountSubMenuItem = <DropdownItem>Register Account</DropdownItem>;

    expect(accountMenuItem.containsMatchingElement(registerAccountSubMenuItem)).toEqual(true);
  });
});
