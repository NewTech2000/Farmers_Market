import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled, {useTheme} from 'styled-components/native';

const StyledButton = styled(TouchableOpacity)`
  padding: 15px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const Button = ({children, onPress, title}) => {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={[
        theme.button.PrimaryBackground,
        theme.button.secondaryBackground,
      ]}
      style={{borderRadius: 10}}>
      <StyledButton onPress={onPress}>
        <ButtonText>{title}</ButtonText>
      </StyledButton>
    </LinearGradient>
  );
};

export default Button;
