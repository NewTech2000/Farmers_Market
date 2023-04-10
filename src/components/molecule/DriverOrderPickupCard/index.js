import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import ItemCard from '../../atoms/ItemCard/index';
import {StatusBar, Text, View} from 'react-native';
import Icon from '../../atoms/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextGeneric from '../../atoms/TextGeneric';

const Container = styled.TouchableOpacity`
  height: 215px;
  flex-direction: row;
  padding: 10px;
  width: 95%;
  background-color: ${({theme}) => theme.homeBackground};
  margin-top: 25px;
  border-radius: 5px;
  shadow-color: #000;
  shadow-opacity: 1;
  shadow-radius: 20px;
  elevation: 8;
  flex-direction: row;
  align-self-center;
  justify-content:center;
  left:10px;
`;

const InnerContainer = styled.View`
  flex: 10;
  padding-left: 30px;
  padding-top: 45px;
  flex-direction: column;
`;

const LeftContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding-vertical: 3%;
  padding-top: 45px;
`;

const Images = styled.Image`
  width: 110px;
  height: 85px;
  border-radius: 15px;
`;

const Line = styled.View`
  left: 12%;
  border-color: ${({theme}) => theme.gray};
  border-width: 0.8px;
  flex-direction: column;
  height: 85px;
`;
const TitleText = styled(TextGeneric)`
  bottom: 8px;
  color: ${({theme}) => theme.title.titleColor};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
  padding-left: 40px;
`;

const PriceText = styled(TextGeneric)`
  color: ${({theme}) => theme.priceColor};
  font-weight: 600;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
`;

const UserText = styled(TextGeneric)`
  color: ${({theme}) => theme.userColor};
  font-weight: 600;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
`;

const AddressText = styled(TextGeneric)`
  color: ${({theme}) => theme.primary};
  font-weight: 600;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
`;

const DetailContainer = styled.View`
  flex-direction: row;
  padding-left: 20px;
`;
const RatingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  padding-left: 110px;
  padding-top: 6px;
`;

const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  border-width: 3px;
  background-color: ${({theme}) => theme.homeBackground};
  border-radius: 20px;
  padding: 8px;
  width: 150px;
  height: 40px;
  border-color: ${({theme}) => theme.newButton};
  margin-top: 145px;
  position: absolute;
  right: 205px;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.newButton};
  font-weight: bold;
  text-align: center;
`;

const BottomButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const ItemCards = styled.View`
padding: 8px;
align-self-center;
justify-content:center;
`;

const AddCardButtonContainer = styled.TouchableOpacity`
  height: 45px;
  width: ${wdp(40)}px;
  border-radius: 50px;
  border-color: ${({theme}) => theme.darkGray};
  background-color: ${({theme}) => theme.notificationLightGray};
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: row;
  align-self: center;
  margin-top: 135px;
  right: 160px;
`;

const AddCardButtonText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme}) => theme.homeBackground};
`;

const AddressContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px;
  padding-left: 130px;
  position: absolute;
`;

const DeliveryAddressText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  padding-left: 20px;
  color: ${({theme}) => theme.darkGray};
`;

const Location = styled.Text`
  font-size: 14px;
  font-weight: 700;
  padding-left: 10px;
  color: ${({theme}) => theme.secondary};
`;

const DriverOrderPickupCard = ({
  image,
  title,
  price,
  user,
  rating,
  favorite,
  onPress,
  ...props
}) => {
  const theme = useTheme();
  return (
    <ItemCards>
      <Container onPress={onPress}>
        <Images source={require('../../../assets/images/ITM1.jpg')} />
        <Line />
        <AddressContainer>
          <DeliveryAddressText>{'From :  '}</DeliveryAddressText>
          <Location>{'Galle'}</Location>
          <Location>{' -----'}</Location>
          <DeliveryAddressText>{'To'}</DeliveryAddressText>
          <Location>{'Mathara'}</Location>
        </AddressContainer>
        <InnerContainer>
          <TitleText>{'Carrot'}</TitleText>
          <DetailContainer>
            <Icon
              name={'bitcoin'}
              size={15}
              type={'FontAwesome'}
              color={theme.priceColor}
              style={{padding: 3, right: 10}}
            />
            <PriceText>{'LKR : 350'}</PriceText>
          </DetailContainer>
          <DetailContainer>
            <Icon
              name={'location'}
              size={15}
              type={'Entypo'}
              color={theme.primary}
              style={{padding: 3, right: 12}}
            />
            <AddressText>{'Galle'}</AddressText>
          </DetailContainer>
          <DetailContainer>
            <Icon
              name={'user-o'}
              size={15}
              type={'FontAwesome'}
              color={theme.userColor}
              style={{padding: 3, right: 11}}
            />

            <UserText>{'Kamal'}</UserText>
            <RatingContainer>
              <Icon
                name={'star-o'}
                size={10}
                type={'FontAwesome'}
                color={theme.darkGray}
                style={{padding: 2}}
              />
              <Icon
                name={'star-o'}
                size={10}
                type={'FontAwesome'}
                color={theme.darkGray}
                style={{padding: 2}}
              />
              <Icon
                name={'star-o'}
                size={10}
                type={'FontAwesome'}
                color={theme.darkGray}
                style={{padding: 2}}
              />
              <Icon
                name={'star-o'}
                size={10}
                type={'FontAwesome'}
                color={theme.darkGray}
                style={{padding: 2}}
              />
              <Icon
                name={'star-o'}
                size={10}
                type={'FontAwesome'}
                color={theme.darkGray}
                style={{padding: 2}}
              />
            </RatingContainer>
          </DetailContainer>
        </InnerContainer>
        <LeftContainer>
          <TouchableOpacity style={{marginBottom: 20}}>
            <Icon
              name={'dots-three-vertical'}
              size={20}
              type={'Entypo'}
              color={theme.darkGray}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name={'star-o'}
              size={20}
              type={'FontAwesome'}
              color={theme.darkGray}
            />
          </TouchableOpacity>
        </LeftContainer>

        <BottomButtonContainer>
          <ButtonContainer>
            <ButtonText>{'Pick This Order'}</ButtonText>
          </ButtonContainer>
          <AddCardButtonContainer onPress={() => {}}>
            <AddCardButtonText>{'Remove'}</AddCardButtonText>
            <Icon
              name={'delete-outline'}
              type={'MaterialIcons'}
              size={getByScreenSize(theme.text.s6, theme.text.s6)}
              color={theme.homeBackground}
              style={{top: 1, left: 15}}
            />
          </AddCardButtonContainer>
        </BottomButtonContainer>
      </Container>
    </ItemCards>
  );
};

export default DriverOrderPickupCard;
