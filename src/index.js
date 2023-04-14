import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import Loading from '../src/components/atoms/Loading/Loading';

import AuthNavigator from './routes/AuthNavigator';
import AppNavigator from './routes/AppNavigator';
import env from './config/config';
import defaultTheme from './assets/resources/theme';
import styled, {useTheme} from 'styled-components/native';

import {ThemeProvider} from 'styled-components/native';
import {StatusBar} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Root = ({
  store,
  persistor,
  authenticated,
  getDefaultUserToken,
  setGeoLocation,
  //isConnected,
  //stockoutSync,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //   getDefaultUser();

    console.log('Authenticated', authenticated, loading);
    NetInfo.addEventListener(state => {
      const {isConnected} = state;
      if (isConnected) {
      }
      //console.log("Connection type", state.type);
      //console.log("Is connected?", state.isConnected);
    });
  }, []);

  //   const getDefaultUser = async () => {
  //     await getDefaultUserToken({
  //       email: env.API_USERNAME,
  //       password: env.API_PASSWORD,
  //     });
  //   };

  if (loading) return <Loading />;

  return (
    <StoreProvider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          {/* <StatusBar backgroundColor="#FFFF" barStyle="dark-content" />  */}
          {/* <StatusBar backgroundColor='#009933' barStyle="light-content" />  */}
          {/* <AppNavigator /> */}
          <AuthNavigator/>
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getDefaultUserToken: dispatch.auth.getDefaultUserToken,
});

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
