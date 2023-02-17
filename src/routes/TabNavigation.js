import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from '../components/atoms/Icon/index';
import styled, {useTheme} from 'styled-components/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

//Import screens
import FeedScreen from '../screens/Home/Feed/Feed';
import OrdersScreen from '../screens/Home/Orders/Orders';
import ItemScreen from '../screens/Item/index.js';
import NotificationScreen from '../screens/Notification/index';
import ProfileScreen from '../screens/Profile';
import ChatScreen from '../screens/Chat/index';

import Routes from './Routes';
import GetStart from '../screens/GetStart';
import {getByScreenSize} from '../utils/responsive';

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Container = styled.View`
  flex-direction:row
  height: 50px;
  background-color: ${({theme}) => theme.primary};
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s5, theme.text.s5)}px;
  margin-right: 8px;
  text-align: center;
  margin-top: 2.5%;
  position: absolute;
  margin-left: 35%;
`;
const RightContainer = styled.TouchableOpacity`
  height: 50px;
  width: 15%;
  margin-left: 2%;
`;

const LeftContainer = styled.TouchableOpacity`
  flex-direction:row
  height: 50px;
  width: 20%;
  margin-left: 68%;
`;

const CartContainer = styled.TouchableOpacity`
  height: 50px;
  padding-right: 50px;
`;

const CartCountContainer = styled.TouchableOpacity`
  height: 20px;
  width: 50%;
  margin-left: 28px;
  background-color: white;
  position: absolute;
  border-radius: 19px;
  margin-top: 5px;
`;
const Count = styled.Text`
  flex-direction: row;
  flex-wrap: wrap;
  color: ${({theme}) => theme.primary};
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s9)}px;
  text-align: center;
`;

const AppHeader = ({
  scene,
  header,
  showMenu,
  showBack,
  showCart,
  showSearch,
  cartData,
  ...props
}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();

  return (
    <Container>
      <RightContainer>
        {showMenu && (
          <Icons
            name="menu"
            type={'Feather'}
            size={28}
            color={'white'}
            role={'button'}
            onPress={() => navigation.toggleDrawer()}
          />
        )}
        {showBack && (
          <Icons
            name="arrow-left"
            type={'Octicons'}
            size={28}
            color={'white'}
            role={'button'}
            onPress={() => navigation.goBack()}
          />
        )}
      </RightContainer>
      <Title>{header}</Title>
      <LeftContainer>
        <CartContainer>
          {showCart && (
            <>
              <Icons
                name="cart-outline"
                type={'Ionicons'}
                size={30}
                color={'white'}
                role={'button'}
                onPress={() => {}}
              />
              {cartData && (
                <CartCountContainer>
                  <Count>{1225}</Count>
                </CartCountContainer>
              )}
            </>
          )}
        </CartContainer>
      </LeftContainer>
    </Container>
  );
};

//Home Screen Top Tab create
const HomeTabs = () => {
  const theme = useTheme();
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarIndicatorContainerStyle: {width: 450,marginTop:30, top:20,height:1, borderRadius:2,zIndex:1},
        tabBarActiveTintColor: theme.homeBackground,
        headerShown: false,
        tabBarLabelStyle: {fontSize: 16, fontWeight: '600'},

        tabBarIndicatorStyle: {
          backgroundColor: 'white',
          height: 10,
        },
        tabBarContentContainerStyle: {backgroundColor: theme.primary},
      }}>
      <TopTab.Screen
        name="Feed"
        component={FeedScreen}
        screenOptions={{
          tabBarLabel: 'Images',
        }}
      />

      <TopTab.Screen name="Orders" component={OrdersScreen} />
    </TopTab.Navigator>
  );
};

//create Floating Bottom action bar
const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        // headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#464646',

        tabBarInactiveTintColor: '#828282',
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeTabs}
        options={{
          tabBarLabel: 'Home',
          header: props => <AppHeader header={'Home'} showMenu showCart />,
          tabBarIcon: ({color}) => (
            <Icons name="home" type={'Ionicons'} size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Item"
        component={ItemScreen}
        options={{
          header: props => <AppHeader header={'Items'} showMenu />,
          tabBarIcon: ({color}) => (
            <Icons
              name="archive"
              type={'FontAwesome'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          header: props => <AppHeader header={'Notifications'} showMenu />,
          tabBarIcon: ({color}) => (
            <Icons
              name="notifications"
              type={'Ionicons'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          header: props => <AppHeader header={'Chats'} showMenu />,
          tabBarIcon: ({color}) => (
            <Icons
              name="ios-chatbubble-ellipses"
              type={'Ionicons'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: props => <AppHeader header={'Profile'} showMenu />,
          tabBarIcon: ({color}) => (
            <Icons
              name="user-circle-o"
              type={'FontAwesome'}
              size={28}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: '50%',
      }}
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName={Routes.GETSTART}
      drawerContent={props => (
        <View style={styles.drawerContainer}>
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}
            style={styles.drawerItem}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Settings')}
            style={styles.drawerItem}>
            <Text>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={styles.drawerItem}>
            <Text>Profile</Text>
          </TouchableOpacity> */}
        </View>
      )}>
      <Drawer.Screen
        name={Routes.MAIN_HOME}
        component={BottomTabs}
        // options={{header: props => <AppHeader header={'Home'} showMenu />}}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
        name={Routes.GETSTART}
        component={GetStart}
      />
      {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
      {/* <Drawer.Screen name="Profile" component={ProfileScreen} /> */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    padding: 0,
    left: 16,
    right: 16,
    bottom: 32,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#B9B9B9',
    borderTopColor: 'transparent',
    shadowColor: 'black',
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tabIconContainer: {
    position: 'absolute',
    top: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrawerScreen;
