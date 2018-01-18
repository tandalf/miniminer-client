export const setNavItems = (navItems) => {
  return {
    filter: 'SET_NAV_ITEMS',
    items: navItems
  };
};

export const setUser = (user)=> {
  return {
    filter: 'CACHE_USER',
    user,
  }
}
