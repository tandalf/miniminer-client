
export const navItems = (state = [], action) => {
  switch (action.type) {
    case 'SET_NAV_ITEMS':
      return action.items;
    default:
      return state;
  }
}
