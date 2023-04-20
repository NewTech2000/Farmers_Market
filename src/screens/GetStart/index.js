import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import String from '../../assets/resources/String';
import Background from '../../components/molecule/BackGround/index';
import Button from '../../components/atoms/Button';
import Routes from '../../routes/Routes';
import {getByScreenSize, hdp, wdp} from '../../utils/responsive';

const BackgroundContainer = styled.View`
  padding-horizontal: 15px;
`;
const Logo = styled(Image)`
  width: ${wdp(18.6)}%;
  height: ${hdp(3.6)}%;
  align-self: center;
  margin-top: ${hdp(2)}%;
`;

const AppTitle = styled(Text)`
  color: ${({theme}) => theme.AppTitle};
  margin-top: ${hdp(5)}px;
  padding-top: ${hdp(2)}px;
  ${hdp(2)}px;
  text-align: center;
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s1, theme.text.s1)}px;
`;

const AppSubTitle = styled(Text)`
  color: ${({theme}) => theme.AppTitle};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s7)}px;
  text-align: center;
  font-size: 40px;
`;

const ButtonContainer = styled.View`
  margin-top: ${hdp(9)}%;
  width: ${wdp(23)}%;
  align-self: center;
`;
const GetStart = ({navigation}) => {
  const theme = useTheme();

  return (
    <Background>
      <StatusBar backgroundColor="#FFFF" barStyle="dark-content" />
      <BackgroundContainer>
        <Logo source={require('../../assets/images/App_Logo.png')} />
        <AppTitle>{String.APP.AppTitle}</AppTitle>
        <AppSubTitle>{String.APP.AppSubTitle}</AppSubTitle>
        <ButtonContainer>
          <Button
            title={String.BUTTON.Start}
            onPress={() => navigation.navigate(Routes.LOGIN)}
          />
        </ButtonContainer>
      </BackgroundContainer>
    </Background>
  );
};

export default GetStart;
