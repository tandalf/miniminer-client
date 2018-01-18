export const user = (state = {}, action) =>{
  switch (action.filter) {
    case 'CACHE_USER':
      return action.user;
    default:
      return state;
  }
}
