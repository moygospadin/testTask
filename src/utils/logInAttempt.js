import clietnsLoginData from '../dummyData/clients.json';
function logInAttempt(values) {
  const userData =
    clietnsLoginData.find((el) => el.login === values.login) || null;

  return {userData, isLogin: userData?.password === values.password};
}
export default logInAttempt;
