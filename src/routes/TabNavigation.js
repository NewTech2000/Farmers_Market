import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
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
import Icon from '../components/atoms/Icon/index';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import About from '../screens/About';

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
  align-self: center;
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

const MainDrawerContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;
const DrawerTopContainer = styled.View`
  height: 160px;
  width: 100%;
  flex-direction: column;
  background-color: ${({theme}) => theme.primary};
`;
const DrawerItemContainer = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  flex-direction: row;
  top: 20px;
`;
const DrawerItemsContainer = styled.TouchableOpacity`
  width: 100%;
  flex-direction: column;
  top: 30px;
  right: 15px;
`;
const ItemText = styled.Text`
  color: ${({theme}) => theme.darkGray};
  font-weight: 600;
  font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s7)}px;
  margin-left: 5px;
  top: 12px;
`;
const Images = styled.Image`
  width: 100px;
  height: 78px;
  align-self: center;
`;

const Line = styled.View`
margin-top:50px
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.gray};
  flex-direction: row;
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
        tabBarIndicatorContainerStyle: {
          width: 450,
          marginTop: 30,
          top: 20,
          height: 1,
          borderRadius: 2,
          zIndex: 1,
        },
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

const DrawerScreen = ({navigation}) => {
  const theme = useTheme();

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
        <MainDrawerContainer>
          <DrawerTopContainer>
            <Images source={require('../assets/images/App_Logo.png')} />
            <Title style={{paddingTop: 70}}>{'Farmers` Market'}</Title>
            <Title style={{paddingTop: 95}}>{'Protect Farmer & Crops'}</Title>
          </DrawerTopContainer>
          <DrawerItemsContainer>
            <DrawerItemContainer onPress={() => navigation.navigate('Feed')}>
              <Icon
                name={'home'}
                size={20}
                type={'AntDesign'}
                color={theme.darkGray}
                style={{left: 40, width: 100, top: 15}}
              />
              <ItemText>{'Home'}</ItemText>
            </DrawerItemContainer>

            <DrawerItemContainer>
              <Icon
                name={'dots-horizontal-circle-outline'}
                size={20}
                type={'MaterialCommunityIcons'}
                color={theme.darkGray}
                style={{left: 40, width: 100, top: 15}}
              />
              <ItemText>{'Pending Orders (0)'}</ItemText>
            </DrawerItemContainer>

            <DrawerItemContainer>
              <Icon
                name={'timeline'}
                size={20}
                type={'MaterialIcons'}
                color={theme.darkGray}
                style={{left: 40, width: 100, top: 15}}
              />
              <ItemText>{'Pending Payments(0)'}</ItemText>
            </DrawerItemContainer>

            <DrawerItemContainer>
              <Icon
                name={'target'}
                size={20}
                type={'Foundation'}
                color={theme.darkGray}
                style={{left: 40, width: 100, top: 15}}
              />
              <ItemText>{'My Future Goals'}</ItemText>
            </DrawerItemContainer>

            <DrawerItemContainer>
              <Icon
                name={'storefront-outline'}
                size={20}
                type={'MaterialCommunityIcons'}
                color={theme.darkGray}
                style={{left: 40, width: 100, top: 15}}
              />
              <ItemText>{'Favorite'}</ItemText>
            </DrawerItemContainer>
            <Line />
            <DrawerItemContainer>
              <Icon
                name={'star-outlined'}
                size={20}
                type={'Entypo'}
                color={theme.darkGray}
                style={{left: 40, width: 100, top: 15}}
              />
              <ItemText>{'Rate Us'}</ItemText>
            </DrawerItemContainer>

            <DrawerItemContainer
              onPress={() => navigation.navigate(Routes.ABOUT)}>
              <Icon
                name={'ios-information-circle-outline'}
                size={20}
                type={'Ionicons'}
                color={theme.darkGray}
                style={{left: 40, width: 100, top: 15}}
              />
              <ItemText>{'About This App'}</ItemText>
            </DrawerItemContainer>

            <DrawerItemContainer
              onPress={() => navigation.navigate(Routes.PRIVACYPOLICY)}>
              <Icon
                name={'lock-outline'}
                size={20}
                type={'MaterialIcons'}
                color={theme.darkGray}
                style={{left: 40, width: 100, top: 15}}
              />
              <ItemText>{'Privacy Ans Policy'}</ItemText>
            </DrawerItemContainer>

            <DrawerItemContainer>
              <Icon
                name={'logout'}
                size={20}
                type={'AntDesign'}
                color={theme.errorText}
                style={{left: 40, width: 100, top: 15}}
              />
              <ItemText style={{color: theme.errorText}}>{'Log Out'}</ItemText>
            </DrawerItemContainer>
          </DrawerItemsContainer>
        </MainDrawerContainer>
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
      <Drawer.Screen
        options={{
          header: props => <AppHeader header={'Privacy and Policy'} showMenu />,
        }}
        name={Routes.PRIVACYPOLICY}
        component={PrivacyPolicy}
      />
      <Drawer.Screen
        options={{
          header: props => <AppHeader header={'About'} showMenu />,
        }}
        name={Routes.ABOUT}
        component={About}
      />
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
