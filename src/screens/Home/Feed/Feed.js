import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

import HomeItemCard from '../../../components/molecule/HomeItemCard';
import SearchBar from '../../../components/molecule/SearchBar';
import AddPost from '../../../components/molecule/AddPost';
import {ScrollView} from 'react-native-gesture-handler';
import Routes from '../../../routes/Routes';
import {useState} from 'react';
import {ModelAlerts} from '../../../components/molecule/ModelAlerts/inedx';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme}) => theme.lightGray};
`;
const Container = styled(HomeItemCard)`
  height: 100px;
`;

const BodyContainer = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 90px;
  height: 100%;
  background-color: ${({theme}) => theme.lightGray};
`;
const FeedScreen = ({navigation}) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, SetAlertType] = useState('');

  const toggleAlert = x => {
    if (x === 'delete') {
      // setAlertVisible(!alertVisible);
      SetAlertType('delete');
    } else if (x === 'update') {
      SetAlertType('update');
    } else if (x === 'offline') {
      setAlertVisible(!alertVisible);
      SetAlertType('offline');
    } else {
      setAlertVisible(!alertVisible);
      SetAlertType('mainAlert');
    }
  };



  return (
    <MainContainer>
      <StatusBar backgroundColor="#009933" barStyle="light-content" />
      <View>
        <AddPost />
        <SearchBar />
      </View>
      <ScrollView>
        <BodyContainer>
          <Container
            onPress={() => navigation.navigate(Routes.SINGLEITEM)}></Container>
          <Container
            actionOnPress={() => toggleAlert()}
            onFavoritePress={() => toggleAlert('offline')}></Container>
          <Container></Container>
          <Container></Container>
          <Container></Container>
          <Container></Container>

          <ModelAlerts
            alert={alertType}
            toggleModal={() => toggleAlert(!alertVisible)}
            isModalVisible={alertVisible}
            closeOnPress={() => toggleAlert(false)}
            onBackdropPress={() => setAlertVisible(false)}
            onDeletePress={() => toggleAlert('delete')}
            OnEditPress={() => toggleAlert('update')}
          />

      
        </BodyContainer>
      </ScrollView>
    </MainContainer>
  );
};

export default FeedScreen;
