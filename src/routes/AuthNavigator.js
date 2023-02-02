import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../auth/login/index";
import SignupScreen from "../auth/register/index";
import ForgotPasswordScreen from "../auth/forgot_password/index";
import Routes from "./routes";

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
        options={{ title: "Sign up" }}
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
