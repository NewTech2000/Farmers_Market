import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components/native';
import Ripple from 'react-native-material-ripple';

import String from '../../../assets/resources/String';
import Background from '../../../components/BackGround';
import Button from '../../../components/atoms/Button';
import Routes from '../../../routes/Routes';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import Input from '../../../components/atoms/Input';
import FormField from '../../../components/FormField';

const BackgroundContainer = styled.View`
  padding: 15px;
`;

const Logo = styled(Image)`
  width: ${wdp(38)}px;
  height: ${hdp(15)}px;
  align-self: center;
  margin-top: ${hdp(2)}px;
`;

const AppTitle = styled(Text)`
  color: ${({theme}) => theme.AppTitle};
  font-size: ${({theme}) => getByScreenSize(theme.text.s1, theme.text.s1)}px;
  padding-top: ${hdp(2)}px;
  text-align: center;
  font-weight: bold;
`;

const AppSubTitle = styled(Text)`
  color: ${({theme}) => theme.AppTitle};
  font-size: ${({theme}) => getByScreenSize(theme.text.s2, theme.text.s2)}px;
  text-align: center;
`;

const ButtonContainer = styled.View`
  margin-top: ${hdp(5)}px;
  width: ${wdp(90)}px;
  align-self: center;
  padding: 20px;
`;

const MainContainer = styled.View`
  background-color: ${({theme}) => theme.homeBackground};
  border-radius: 10px;
  width: ${wdp(90)}px;
  height: ${hdp(50)}px;
  align-self: center;
  margin-top: ${hdp(10)}px;
`;

const MainContainerText = styled.Text`
  color: ${props => props.color || 'black'};
  font-weight: bold;
  font-size: 50px;
`;

const InnerContainer = styled.View`
  padding: 15px;
`;

const ForgotPasswordText = styled.Text`
  color: ${({theme}) => theme.text.forgotPasswordTextColor};
  padding-top: ${hdp(3)}px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  font-style: italic;
`;

const PrivacyPolicyText = styled.Text`
  color: ${({theme}) => theme.text.light};
  padding-top: ${hdp(2)}px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  text-align: center;
  margin: 10px;
  font-style: italic;
  text-decoration-line: underline;
`;

const InputContainer = styled.View`
  padding-top: 20px;
`;

const Register = () => {
  return (
    <Background>
      <ScrollView>
        <BackgroundContainer>
          <Logo source={require('../../../assets/images/App_Logo.png')} />
          <AppTitle>{String.APP.AppTitle}</AppTitle>
          <AppSubTitle>{String.APP.AppSubTitle}</AppSubTitle>

          <MainContainer>
            <InnerContainer>
              <MainContainerText>{String.AUTH.REGISTER}</MainContainerText>
              <InputContainer>
              {/* <FormField/> */}
                <Ripple>
                  <ForgotPasswordText>
                    Back To Login{' '}
                  </ForgotPasswordText>
                </Ripple>

                <ButtonContainer>
                  <Button
                    title={String.AUTH.LOGIN}
                    onPress={() => navigation.navigate(Routes.SIGNUP)}
                  />
                </ButtonContainer>
              </InputContainer>
            </InnerContainer>
          </MainContainer>

          <Ripple>
            <PrivacyPolicyText>Privacy and Policy</PrivacyPolicyText>
          </Ripple>
        </BackgroundContainer>
      </ScrollView>
    </Background>
  );
};

export default Register;
