import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import {Formik} from 'formik';
import * as Yup from 'yup';

import String from '../../../assets/resources/String';
import Background from '../../../components/BackGround';
import Button from '../../../components/atoms/Button';
import Routes from '../../../routes/Routes';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import Input from '../../../components/atoms/Input';
import ErrorText from '../../../components/atoms/errorText/errorText';
import Icon from '../../../components/Icon';

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
  height: ${hdp(55)}px;
  align-self: center;
  margin-top: ${hdp(5)}px;
`;

const MainContainerText = styled.Text`
  color: ${props => props.color || 'black'};
  font-weight: bold;
  font-size: 50px;
`;

const InnerContainer = styled.View`
  padding: 15px;
`;
const LabelText = styled(Text)`
  color: ${({theme}) => theme.disableTextInput.label};
  font-weight: 600;
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s10)}px;
  margin-left: 30px;
  padding-top: 50px;
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

const LabelView = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const Container = styled.View`
  padding-top: 40px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.genericInput.colorPrimary};
  border-radius: 7px;

  padding-horizontal: 30px;
  min-height: ${getByScreenSize(44, 40)}px;
`;
const OtpInput = styled.TextInput`
  width: 50px;
  height: 50px;
  border-color: ${({theme}) => theme.genericInput.borderPrimary};
  border-radius: 4px;
  text-align: center;
  shadow-color: #000;
  shadow-opacity: 0.8;
  elevation: 2;
`;
const OTPScreen = ({navigation}) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().required().email().label('Email'),
    password: Yup.string().trim().required().label('Password'),
  });

  const handleVerify = () => {
    setLoading(true);
    navigation.navigate(Routes.CHANGE_PASSWORD);
    setLoading(false);
  };

  return (
    <Background>
      <ScrollView>
        <BackgroundContainer>
          <Logo source={require('../../../assets/images/App_Logo.png')} />

          <AppTitle>{String.APP.AppTitle}</AppTitle>

          <AppSubTitle>{String.APP.AppSubTitle}</AppSubTitle>

          <MainContainer>
            <InnerContainer>
              <MainContainerText>
                {String.AUTH.OTP_VERIFICATION}
              </MainContainerText>
              <Formik
                initialValues={{
                  otp1: '',
                  otp2: '',
                  otp3: '',
                  otp4: '',
                }}
                validate={values => {
                  const errors = {};
                  if (
                    !values.otp1 ||
                    !values.otp2 ||
                    !values.otp3 ||
                    !values.otp4
                  ) {
                    errors.otp = 'All OTP fields are required';
                  }
                  return errors;
                }}
                onSubmit={handleVerify}>
                {({handleChange, handleBlur, handleSubmit, errors, values}) => (
                  <>
                    <LabelView>
                      <LabelText>Enter Your OTP Code Here</LabelText>
                      <Ripple
                        style={{paddingLeft: 8}}
                        onPress={() => {
                          if (onInfoPress) {
                            // onInfoPress();
                          } else {
                            // props.showInfoPopUp({
                            //   title: name,
                            //   description: info,
                            // });
                          }
                        }}>
                        <Icon
                          name={'info-with-circle'}
                          type={'Entypo'}
                          size={getByScreenSize(theme.text.s9, theme.text.s9)}
                          color={'black'}
                        />
                      </Ripple>
                    </LabelView>

                    <Container>
                      <OtpInput
                        onChangeText={handleChange('otp1')}
                        onBlur={handleBlur('otp1')}
                        value={values.otp1}
                        maxLength={1}
                        autoCapitalize="none"
                        keyboardType="numeric"
                        autoCorrect={false}
                      />
                      <OtpInput
                        onChangeText={handleChange('otp2')}
                        onBlur={handleBlur('otp2')}
                        value={values.otp2}
                        maxLength={1}
                        autoCapitalize="none"
                        keyboardType="numeric"
                        autoCorrect={false}
                      />
                      <OtpInput
                        onChangeText={handleChange('otp3')}
                        onBlur={handleBlur('otp3')}
                        value={values.otp3}
                        maxLength={1}
                        autoCapitalize="none"
                        keyboardType="numeric"
                        autoCorrect={false}
                      />
                      <OtpInput
                        onChangeText={handleChange('otp4')}
                        onBlur={handleBlur('otp4')}
                        value={values.otp4}
                        maxLength={1}
                        autoCapitalize="none"
                        keyboardType="numeric"
                        autoCorrect={false}
                      />
                    </Container>
                    {errors.otp && (
                      <ErrorText style={{marginLeft: 30, top: 15}}>
                        {errors.otp}
                      </ErrorText>
                    )}

                    <ButtonContainer>
                      <Button
                        title={String.BUTTON.VERIFY}
                        mode="contained"
                        loading={loading}
                        onPress={handleSubmit}
                      />
                    </ButtonContainer>
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

export default OTPScreen;
