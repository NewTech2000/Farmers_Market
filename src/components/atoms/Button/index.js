import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled, {useTheme} from 'styled-components/native';
import {hdp, wdp} from '../../../utils/responsive';

const StyledButton = styled(TouchableOpacity)`
  padding: 15px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  justify-content:center;
`;

const Container = styled.View`
  padding: 1px;
  border-radius: 5px;
  shadow-color: #000;
  shadow-opacity: 1;
  shadow-radius: 20px;
  elevation: 8;
`;

const Button = ({children, onPress, title}) => {
  const theme = useTheme();
  return (
    <Container>
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
    </Container>
  );
};

export default Button;
