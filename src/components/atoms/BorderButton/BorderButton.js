import React from 'react';
import styled, {withTheme} from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  border-width: 3px;
  background-color: ${({theme}) => theme.homeBackground};
  border-radius: 20px;
  padding: 8px;
  width: 150px;
  border-color: ${({theme}) => theme.newButton};
  align-items: center;
  left: 80px;
  margin-top: 5px;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.newButton};
  font-weight: bold;
`;

const BorderButton = ({onPress, title, style, color}) => {
  return (
    <ButtonContainer onPress={onPress} color={color} style={style}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default BorderButton;
