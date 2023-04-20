import React from 'react';
import Icon from '../../atoms/Icon';

import styled, {useTheme} from 'styled-components/native';
import TextGeneric from '../../atoms/TextGeneric';
import {getByScreenSize} from '../../../utils/responsive';
import {View} from 'react-native';

const TitleText = styled(TextGeneric)`
  color: ${({theme}) => theme.title.titleColor};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
`;

const StatusText = styled(TextGeneric)`
  color: ${({theme}) => theme.darkGray};
  padding-bottom: 5px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
  left: 15px;
  top: 1px;
`;

const MainContainer = styled.View`
  flex: 2;
  flex-direction: column;
  background-color: white;
  padding: 15px;
  border-radius: 15px;
  background-color: ${({theme}) => theme.notificationLightGray};
`;
const IconContainer = styled.TouchableOpacity`
  align-self: flex-end;
  top: 10px;
`;
const StatusContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 350px;
  top: 5px;
`;

const InnerContainer = styled.View`
  flex-direction: row;
`;

const ItemCard = styled.View`
  border-radius: 15px;
  background-color: ${({theme}) => theme.homeBackground};
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 15;
  height: 110px;
  margin: 8px;
  left:5px
  width: 395px;
`;

const NotificationCard = ({title, details, onPress, read,DriverNotification}) => {
  const theme = useTheme();
  return (
    <View>
      {!read && (
        <Icon
          name={'alert-circle-sharp'}
          size={15}
          type={'Ionicons'}
          color={theme.priceColor}
          style={{position: 'absolute', zIndex: 1, top: 15}}
        />
      )}
      <ItemCard style={DriverNotification?{height:170}:{}}>
        <MainContainer>
          <TitleText>{title}</TitleText>
          <InnerContainer>
            <StatusContainer>
              <StatusText>{details}</StatusText>
            </StatusContainer>
            <IconContainer onPress={onPress}>
              <Icon
                name={'delete'}
                size={35}
                type={'MaterialCommunityIcons'}
                color={theme.darkGray}
                style={{padding: 3, right: 12}}
              />
            </IconContainer>
          </InnerContainer>
        </MainContainer>
      </ItemCard>
    </View>
  );
};

export default NotificationCard;
