/* eslint-disable react/jsx-props-no-spreading */
import React, {useCallback, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import routes from './Routes';
import GetStart from '../screens/GetStart';
import MainDrawer from './TabNavigation';
import Payment from '../screens/payment';
import SingleItem from '../screens/SinglePageItem';
import Cart from '../screens/Cart';


const Stack = createStackNavigator();

// This component router will have the tabs
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{gestureEnabled: true}} initialRouteName={routes.MAIN_DRAWER}>
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          name={routes.MAIN_DRAWER}
          component={MainDrawer}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          name={routes.PAYMENT}
          component={Payment}
        />
          <Stack.Screen
          options={{
            gestureEnabled: false,
          }}
          name={routes.SINGLEITEM}
          component={SingleItem}
        />
         <Stack.Screen
          options={{
            gestureEnabled: false,
          }}
          name={routes.CART}
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
