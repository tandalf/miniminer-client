export const user = (state = {}, action) =>{
  switch (action.type) {
    case 'CACHE_USER':
      return action.user;
    default:
      return state;
  }
}
