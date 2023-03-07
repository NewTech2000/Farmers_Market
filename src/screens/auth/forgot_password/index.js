import React, {useState} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import {Formik} from 'formik';
import * as Yup from 'yup';

import String from '../../../assets/resources/String';
import Background from '../../../components/molecule/BackGround';
import Button from '../../../components/atoms/Button';
import Routes from '../../../routes/Routes';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import Input from '../../../components/atoms/Input';
import ErrorText from '../../../components/atoms/errorText/errorText';

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
  margin-top: ${hdp(2)}px;
  width: ${wdp(90)}px;
  align-self: center;
  padding: 20px;
`;

const MainContainer = styled.View`
  background-color: ${({theme}) => theme.homeBackground};
  border-radius: 10px;
  width: ${wdp(90)}px;
  height: ${hdp(45)}px;
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
const ForgotPassword = ({navigation}) => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().required().email().label('Email'),
  });

  const handleForgotPassword = () => {
    setLoading(true);
    navigation.navigate(Routes.OTP_VERIFICATION);
    setLoading(false);
  };

  return (
    <Background>
      <StatusBar backgroundColor="#FFFF" barStyle="dark-content" />
      <ScrollView>
        <BackgroundContainer>
          <Logo source={require('../../../assets/images/App_Logo.png')} />
          <AppTitle>{String.APP.AppTitle}</AppTitle>
          <AppSubTitle>{String.APP.AppSubTitle}</AppSubTitle>

          <MainContainer>
            <InnerContainer>
              <MainContainerText>
                {String.AUTH.FORGOT_PASSWORD}
              </MainContainerText>
              <Formik
                initialValues={{
                  email: '',
                }}
                onSubmit={handleForgotPassword}
                validationSchema={validationSchema}>
                {({handleChange, handleSubmit, errors, touched}) => (
                  <>
                    <InputContainer>
                      <Input
                        label={'E-Mail'}
                        labelStyle={{fontWeight: '100'}}
                        onChangeText={handleChange('email')}
                        placeholder="Enter your email"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        showInfo
                        autoCorrect={false}
                      />
                      {touched.email ? (
                        <ErrorText>{errors.email}</ErrorText>
                      ) : (
                        <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                      )}

                      <Ripple onPress={() => navigation.navigate(Routes.LOGIN)}>
                        <ForgotPasswordText>Back To Login </ForgotPasswordText>
                      </Ripple>

                      <ButtonContainer>
                        <Button
                          title={String.BUTTON.RESET}
                          mode="contained"
                          loading={loading}
                          onPress={handleSubmit}
                        />
                      </ButtonContainer>
                    </InputContainer>
                  </>
                )}
              </Formik>
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

export default ForgotPassword;
