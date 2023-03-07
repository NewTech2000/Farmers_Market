import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import ItemCard from '../../atoms/ItemCard/index';
import {StatusBar, Text, View} from 'react-native';
import Icon from '../../atoms/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextGeneric from '../../atoms/TextGeneric';

const Container = styled.TouchableOpacity`
  flex: 10;
  height: 100px;
  flex-direction: row;
  padding: 10px;
`;

const InnerContainer = styled.View`
  flex: 10;
  padding-left: 30px;
  padding-top: 5px;
  flex-direction: column;
`;

const LeftContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding-vertical: 3%;
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

const HomeItemCard = ({
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
    <ItemCard>
      <Container onPress={onPress}>
        <Images source={require('../../../assets/images/ITM1.jpg')} />
        <Line />
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
      </Container>
    </ItemCard>
  );
};

export default HomeItemCard;
