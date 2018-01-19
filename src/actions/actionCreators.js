export const setNavItems = (navItems) => {
  return {
    type: 'SET_NAV_ITEMS',
    items: navItems
  };
};

export const setUser = (user)=> {
  return {
    type: 'CACHE_USER',
    user,
  }
}
