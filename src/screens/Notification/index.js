import React from 'react';
import {Text, View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import NotificationCard from '../../components/molecule/NotificationCard';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
`;

const Container = styled.View`
  width: 10px;
`;

const BodyContainer = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 90px;
  height: 100%;
  background-color: ${({theme}) => theme.lightGray};
`;
const NotificationScreen = () => {
  return (
    <MainContainer>
      <BodyContainer>
        <NotificationCard
          details={
            'Your Order deliver Your Order deliverYour Order deliverYour Order deliverYour Order deliverYour Order deliverYour Order deliver'
          }
          title={'Delivery Submission'}
        />
        <NotificationCard
          details={
            'Your Order deliver Your Order deliverYour Order deliverYour Order deliverYour Order deliverYour Order deliverYour Order deliver'
          }
          title={'Item Approved'}
          read
        />
      </BodyContainer>
    </MainContainer>
  );
};

export default NotificationScreen;
