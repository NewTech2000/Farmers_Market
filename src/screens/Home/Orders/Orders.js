import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styled, {withTheme} from 'styled-components/native';
import OrderItemCard from '../../../components/molecule/OrderItemCard';
import SearchBar from '../../../components/molecule/SearchBar';

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
const OrdersScreen = () => {
  return (
    <MainContainer>
      <SearchBar />
      <BodyContainer>
        <OrderItemCard />
        <OrderItemCard status={'Completed'} />
      </BodyContainer>
    </MainContainer>
  );
};

export default OrdersScreen;
