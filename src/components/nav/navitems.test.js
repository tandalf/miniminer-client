import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { DropdownItem } from 'reactstrap';

import { AccountMenuItem } from './navitems';

const middlewares = []
const mockStore = configureStore(middlewares)

describe('<AccountMenuItem />', () => {
  const signedInUser = {signedIn: true};
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
});
