import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import ItemCard from '../../atoms/ItemCard/index';
import {StatusBar, Text, View} from 'react-native';
import Icon from '../../atoms/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextGeneric from '../../atoms/TextGeneric';
import BorderButton from '../../atoms/BorderButton/BorderButton';

const Container = styled.TouchableOpacity`
  flex: 10;
  height: 100px;
  flex-direction: row;
  padding: 10px;
`;

const InnerContainer = styled.View`
  flex: 10;
  padding-left: 30px;
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

const TitleContainer = styled.View`
  flex-direction: row;
`;

const TitleText = styled(TextGeneric)`
  color: ${({theme}) => theme.title.titleColor};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
`;

const CodeText = styled(TextGeneric)`
  color: ${({theme}) => theme.priceColor};
  font-weight: 700;
  left: 10px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
`;
const StatusText = styled(TextGeneric)`
  color: ${({theme}) => theme.priceColor};
  font-weight: 700;
  text-align: center;
  padding-bottom: 5px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
`;

const OrderItemCard = ({image, status, orderId, onPress}) => {
  const theme = useTheme();
  return (
    <>
      {status == 'Completed' && (
        <ItemCard>
          <Container onPress={onPress}>
            <Images source={require('../../../assets/images/ITM1.jpg')} />
            <Line />
            <InnerContainer>
              <StatusText>{'Completed'}</StatusText>
              <TitleContainer>
                <TitleText>{'Order'}</TitleText>
                <CodeText>{'#1252528'}</CodeText>
              </TitleContainer>
              <BorderButton title={'View Details'} />
            </InnerContainer>
          </Container>
        </ItemCard>
      )}
      {status !== 'Completed' && (
        <ItemCard>
          <Container onPress={onPress}>
            <Images source={require('../../../assets/images/ITM1.jpg')} />
            <Line />
            <InnerContainer>
              <TitleContainer style={{marginTop: 20}}>
                <TitleText>{'Order'}</TitleText>
                <CodeText>{'#1252528'}</CodeText>
              </TitleContainer>
              <BorderButton
                style={{marginTop: 10}}
                title={'Check Order Status'}
              />
            </InnerContainer>
          </Container>
        </ItemCard>
      )}
    </>
  );
};

export default OrderItemCard;
