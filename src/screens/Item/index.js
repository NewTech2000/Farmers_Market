import React from 'react';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components/native';
import BorderButton from '../../components/atoms/BorderButton/BorderButton';
import HomeItemCard from '../../components/molecule/HomeItemCard';
import Routes from '../../routes/Routes';
import {getByScreenSize} from '../../utils/responsive';
import DriverOrderPickupCard from '../../components/molecule/DriverOrderPickupCard';
import {driverItems, foodItems} from '../../utils/Data';
import {View} from 'react-native';

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
const AddItemContainer = styled.View`
  height: 8%;
  background-color: ${({theme}) => theme.lightGray};
`;
const Title = styled.Text`
  color: ${({theme}) => theme.newButton};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s6, theme.text.s4)}px;
  margin-right: 8px;
  margin-top: 4.5%;
  margin-left: 15%;
`;

export default function ItemScreen({navigation}) {
  const [user, setUser] = useState('farmer');
  return (
    <MainContainer>
      <AddItemContainer>
        <Title>{'Your Listed Items'}</Title>
        <BorderButton
          style={{
            marginTop: 15,
            marginLeft: 180,
            position: 'absolute',
          }}
          title={'Add New Item'}
          onPress={() => navigation.navigate(Routes.ADDNEWITEM)}
        />
      </AddItemContainer>
      <ScrollView>
        <BodyContainer>
          {foodItems.map((item, index) => (
            <View key={index}>
              <Container
                title={item.name}
                address={item.location}
                image={item.image}
                user={item.seller}
                price={item.price}
                // actionOnPress={() => toggleAlert()}
                // onFavoritePress={() => toggleAlert('offline')}
                onPress={() => navigation.navigate(Routes.SINGLEITEM)}
              />
            </View>
          ))}

          {driverItems.map((item, index) => (
            <View key={index}>
              <DriverOrderPickupCard
                title={item.name}
                address={item.location}
                image={item.image}
                user={item.seller}
                price={item.price}
                locationFrom={item.locationFrom}
                locationTo={item.locationTo}
                //  actionOnPress={() => toggleAlert()}
                //  onFavoritePress={() => toggleAlert('offline')}
                onPress={() => navigation.navigate(Routes.SINGLEITEM)}
              />
            </View>
          ))}
        </BodyContainer>
      </ScrollView>
    </MainContainer>
  );
}
