export const signIn = (signInDetails) => {
  return {
    type: 'SIGN_IN',
    signInDetails,
  };
}
