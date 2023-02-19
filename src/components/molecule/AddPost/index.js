import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Avatar} from 'react-native-paper';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import Icon from '../../atoms/Icon';

const Container = styled.View`
  background-color: ${({theme}) => theme.homeBackground};
  height: 70px;
  width: 100%;
`;

const InnerContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const InputContainer = styled.View`
  width: 70%;
  height:35px
  flex-direction: row;
  align-items: center;
  align-self: center;
  border-radius: 150px;

  margin-top:5px;
  background-color: ${({theme}) => theme.lightGray};
`;

const Text = styled.Text`
  color: ${({theme}) => theme.label.textPrimary};
margin-left:55px
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
  text-align: center;
  align-self:center;

`;
const ImageContainer = styled.View`
  width: 10%;
  height: 10px;
`;

const AddPost = ({onPress}) => {
  const theme = useTheme();

  return (
    <Container>
      <InnerContainer onPress={onPress}>
        <ImageContainer>
          <Avatar.Image
            source={require('../../../assets/images/user.png')}
            size={45}></Avatar.Image>
        </ImageContainer>
        <InputContainer>
          <Text>Write Something ......</Text>

          <Icon
            name={'image-multiple-outline'}
            size={25}
            type={'MaterialCommunityIcons'}
            color={theme.primary}
            style={{left: 20}}
          />
        </InputContainer>
        <Icon
          name={'dots-three-vertical'}
          size={25}
          type={'Entypo'}
          color={theme.drkGray}
          style={{top: 7}}
        />
      </InnerContainer>
    </Container>
  );
};

export default AddPost;
