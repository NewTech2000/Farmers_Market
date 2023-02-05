import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from "../screens/auth/login/index";
import SignupScreen from "../screens/auth/register/index";
import ForgotPasswordScreen from "../screens/auth/forgot_password/index";
import Routes from "./Routes";

const Stack = createStackNavigator();

export default function AuthNavigator() { 
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={() => ({
        headerTitleStyle: { color: "black" },
      })}>
      <Stack.Screen
        name={Routes.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SIGNUP}
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
        options={{ title: "Forgot Password" }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
