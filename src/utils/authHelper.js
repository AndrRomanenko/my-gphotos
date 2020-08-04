export const auth = async () => {
  const gAuthInstance = await window.gapi.auth2.getAuthInstance();
  const signIn = await gAuthInstance.signIn();
  return signIn;
};
