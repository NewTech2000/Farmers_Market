import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styled, {withTheme} from 'styled-components/native';
import {hdp, wdp} from '../../../utils/responsive';

import HomeItemCard from '../../../components/molecule/HomeItemCard';
import SearchBar from '../../../components/molecule/SearchBar';
import AddPost from '../../../components/molecule/AddPost';
import {ScrollView} from 'react-native-gesture-handler';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
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
const FeedScreen = () => {
  return (
    <MainContainer>
      <StatusBar backgroundColor="#009933" barStyle="light-content" />
      <View>
        <AddPost />
        <SearchBar />
      </View>
      <ScrollView>
        <BodyContainer>
          <Container></Container>
          <Container></Container>
          <Container></Container>
          <Container></Container>
          <Container></Container>
          <Container></Container>
        </BodyContainer>
      </ScrollView>
    </MainContainer>
  );
};

export default FeedScreen;
