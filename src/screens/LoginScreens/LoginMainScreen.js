import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {LoginScreenStyles as styles} from './styles';
import {confirmLogin} from '../../store/loginStore/login-actions';
import {useState} from 'react';
function LoginMainScreen({confirmLogin}) {
  const [loginValues, setLoginValues] = useState({login: '', password: ''});
  const onChangeTextHandler = (field, value) => {
    setLoginValues((prev) => {
      return {...prev, [field]: value};
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={[styles.textBold, {marginBottom: 45}]}>
          Добро пожаловать!
        </Text>
        <TextInput
          style={styles.textInput}
          value={loginValues.mail}
          placeholder={'Логин'}
          placeholderTextColor={'#000'}
          onChangeText={(text) => onChangeTextHandler('login', text)}
        />
        <TextInput
          style={styles.textInput}
          value={loginValues.password}
          placeholderTextColor={'#000'}
          placeholder={'Пароль'}
          onChangeText={(text) => onChangeTextHandler('password', text)}
        />
        <TouchableOpacity
          onPress={() => {
            confirmLogin(loginValues);
          }}
          style={styles.btn}>
          <Text style={[styles.textBold, {fontSize: 18, color: '#fff'}]}>
            ВОЙТИ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  confirmLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginMainScreen);
