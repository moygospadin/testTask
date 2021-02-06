import {CONFIRM_LOGIN} from './login-types';
import {Alert} from 'react-native';
import {logInAttempt} from '../../utils';
import {setOrders} from '../orderStore/order-actions';
const confirmLogin = (values) => {
  return (dispatch) => {
    const {isLogin, userData} = logInAttempt(values);
    console.log('userData', userData);
    if (!isLogin) {
      Alert.alert('Неверный логин или пароль');
    } else {
      dispatch({type: CONFIRM_LOGIN, data: isLogin});
      dispatch(setOrders(userData));
    }
  };
};
export {confirmLogin};
