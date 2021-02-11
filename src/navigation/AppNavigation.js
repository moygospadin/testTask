import React from 'react';
import {MainScreen, LoginMainScreen, OneOrderScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {TransitionScreenOptions} from './TransitionScreenOptions';
const Stack = createStackNavigator();
function AppNavigation({isLogin}) {
  console.log('isLogin', isLogin);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginMainScreen"
        screenOptions={TransitionScreenOptions}
        headerMode="none">
        {isLogin ? (
          <>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="OneOrderScreen" component={OneOrderScreen} />
          </>
        ) : (
          <Stack.Screen name="LoginMainScreen" component={LoginMainScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function mapStateToProps(state) {
  return {
    isLogin: state.loginReducer.isLogin,
  };
}

const mapDispatch = {};

export default connect(mapStateToProps, mapDispatch)(AppNavigation);
