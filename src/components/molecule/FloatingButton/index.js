import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';
import {Avatar} from 'react-native-paper';

const Container = styled.View`
  position: absolute;
  bottom: 140px;
  right: 20px;
`;

const Button = styled.TouchableOpacity`
  width: 75px;
  height: 70px;
  border-radius: 510px;
  background-color: ${({theme}) => theme.primary};
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;
const ImageContainer = styled.View`
  align-self: center;
`;

const FloatingActionButton = ({label, onPress}) => {
  return (
    <Container>
      <Button onPress={onPress}>
        <ImageContainer>
          <Avatar.Image
            source={require('../../../assets/images/user.png')}
            size={68}></Avatar.Image>
        </ImageContainer>
      </Button>
    </Container>
  );
};

export default FloatingActionButton;
