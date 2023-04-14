import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//import auth screens
import LoginScreen from '../screens/auth/login/index';
import SignupScreen from '../screens/auth/signing/index';
import ForgotPasswordScreen from '../screens/auth/forgot_password/index';
import ChangePasswordScreen from '../screens/auth/password_change';
import OTPScreen from '../screens/auth/OTP_Screen/index'
import Routes from './Routes';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import AppNavigator from './AppNavigator';


const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.GETSTART}
        screenOptions={() => ({
          headerTitleStyle: {color: 'black',alignSelf:'center'},
        })}>
             <Stack.Screen
          name={Routes.APP}
          component={AppNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.SIGNING}
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.FORGOT_PASSWORD}
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
         
        />
         <Stack.Screen
          name={Routes.CHANGE_PASSWORD}
          component={ChangePasswordScreen}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name={Routes.OTP_VERIFICATION}
          component={OTPScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.PRIVACYPOLICY}
          component={PrivacyPolicy}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
