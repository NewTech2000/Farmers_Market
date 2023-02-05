/* eslint-disable react/jsx-props-no-spreading */
import React, {useCallback, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home/index';
import routes from './Routes';
import GetStart from '../screens/GetStart';

const Stack = createStackNavigator();

// This component router will have the tabs
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{gestureEnabled: true}} initialRouteName={routes.GETSTART}>
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          name={routes.HOME}
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          name={routes.GETSTART}
          component={GetStart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
