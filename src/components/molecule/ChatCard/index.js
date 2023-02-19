import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Avatar} from 'react-native-paper';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import Icon from '../../atoms/Icon';
import TextGeneric from '../../atoms/TextGeneric';
import {TouchableOpacity} from 'react-native';

const Container = styled.View`

  flex-direction:column
  width: ${wdp(90)}px;
  height: ${hdp(10)}px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.homeBackground};
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 15;
  margin: 3px;
  justify-content: center;
  align-self: center;
`;

const InnerContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
`;

const ImageContainer = styled.View`
flex:1
flex-direction:column;
  width: 10%;
  height: 10px;
  padding: 15px;
`;

const UserName = styled(TextGeneric)`
  text-align: center;
  color: ${({theme}) => theme.text.textPrimary};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
`;

const DetailsText = styled(TextGeneric)`
  text-align: center;
  color: ${({theme}) => theme.text.textPrimary};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  width: 200px;
`;

const LeftContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-item: flex-end;
`;
const TextContent = styled.View`
  flex: 1;
  flex-direction: column;
  padding-vertical: 3%;
  align-item: flex-end;
`;

const ChatCard = () => {
  const theme = useTheme();
  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          <Avatar.Image
            source={require('../../../assets/images/user.png')}
            size={60}></Avatar.Image>
          <Icon
            name={'alert-circle-sharp'}
            size={20}
            type={'Ionicons'}
            color={theme.primary}
            style={{position: 'absolute', left: 55, width: 100, top: 55}}
          />
        </ImageContainer>
        <TextContent>
          <UserName>{'Nipuna Sachith'}</UserName>
          <DetailsText>
            {'I picked your Oder soon I will Deliver It'}
          </DetailsText>
        </TextContent>
        <LeftContainer>
          <TouchableOpacity>
            <Icon
              name={'dots-three-vertical'}
              size={20}
              type={'Entypo'}
              color={theme.darkGray}
              style={{position: 'absolute', left: 85, width: 100, top: 30}}
            />
          </TouchableOpacity>
        </LeftContainer>
      </InnerContainer>
    </Container>
  );
};

export default ChatCard;
