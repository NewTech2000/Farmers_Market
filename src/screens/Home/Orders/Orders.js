import React from 'react';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import AppModal from '../../../components/molecule/Model';
import OrderItemCard from '../../../components/molecule/OrderItemCard';
import SearchBar from '../../../components/molecule/SearchBar';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme}) => theme.lightGray};
`;

const Container = styled.View`
  width: 10px;
`;

const BodyContainer = styled.View`
flex: 1;
padding-top: 10px;
padding-bottom: 90px;
`;

const OrdersScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [correctModel, setCorrectModel] = useState('');

  const toggleModal = modelName => {
    if (modelName == 'CompleteOrder') {
      setCorrectModel('CompleteOrder');
      setModalVisible(true);
    } else if (modelName === 'StatusCheck') {
      setModalVisible(!isModalVisible);
      setCorrectModel('StatusCheck');
    } else {
      setModalVisible(!isModalVisible);
      setCorrectModel('UpdateStatus');
    }
  };

  return (
    <MainContainer>
      <SearchBar />
      <ScrollView>
        <BodyContainer>
          <OrderItemCard onPress={() => toggleModal('StatusCheck')} />
          <OrderItemCard
            status={'Completed'}
            onPress={() => toggleModal('CompleteOrder')}
          />
          <OrderItemCard
            status={'Pending'}
            onPress={() => toggleModal('StatusCheck')}
          />

          <OrderItemCard
            status={'Pending'}
            UserRole={'Driver'}
            onPress={() => toggleModal('UpdateStatus')}
          />
          <AppModal
            modelName={correctModel}
            toggleModal={() => setModalVisible(!isModalVisible)}
            isModalVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            closeOnPress={() => setModalVisible(false)}
          />
        </BodyContainer>
      </ScrollView>
    </MainContainer>
  );
};

export default OrdersScreen;
