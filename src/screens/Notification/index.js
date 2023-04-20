import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import NotificationCard from '../../components/molecule/NotificationCard';
import {hdp} from '../../utils/responsive';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
`;

const BodyContainer = styled.View`
  flex: 10;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 90px;

  background-color: ${({theme}) => theme.lightGray};
`;

const NotificationScreen = () => {
  return (
    <MainContainer>
      <ScrollView>
        {/* <BodyContainer> */}

        <NotificationCard
          details={
            'Your Order Picked Order Details \n Seller : Kamal \n Seller Address  : Galle Poddala \n Seller TP : 0766028355  \n  Buyer: Nimal   \n Buyer Address: Mathara  \n Buyer TP:0765289219'
          }
          title={'Item Picked'}
          DriverNotification
        />
        <NotificationCard
          details={'Your Order Delivered to Buyer Nimal'}
          title={'Delivery Submission'}
        />
        {/* <NotificationCard
          details={
            'Your Order deliver Your Order deliverYour Order deliverYour Order deliverYour Order deliverYour Order deliverYour Order deliver'
          }
          title={'Item Approved'}
          read
        /> */}

        {/* </BodyContainer> */}
      </ScrollView>
    </MainContainer>
  );
};

export default NotificationScreen;
