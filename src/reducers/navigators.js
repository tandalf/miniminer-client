
export const navItems = (state = [], action) => {
  switch (action.filter) {
    case 'SET_NAV_ITEMS':
      return action.items;
    default:
      return state;
  }
}
