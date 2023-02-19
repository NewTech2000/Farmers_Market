import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
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
import PickerList from '../../../components/atoms/PickerList';
import Data, {
  District,
  genders,
  Province,
  SubRoles,
  UserRoleData,
} from '../../../utils/Data';

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
  margin-top: ${hdp(3)}px;
  width: ${wdp(90)}px;
  align-self: center;
  padding: 20px;
`;

const MainContainer = styled.View`
  background-color: ${({theme}) => theme.homeBackground};
  border-radius: 10px;
  width: ${wdp(90)}px;
  height: ${hdp(180)}px;
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

const AlreadyLoginText = styled.Text`
  color: ${({theme}) => theme.darkGray};
  padding-top: ${hdp(3)}px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  font-style: italic;
  text-align: center;
`;
const LoginText = styled.Text`
  color: ${({theme}) => theme.text.forgotPasswordTextColor};
  padding-top: ${hdp(3)}px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  font-style: italic;
  text-align: center;
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

const Separator = styled.View`
  padding-top: 20px;
`;

const SignIn = ({navigation}) => {
  const theme = useTheme();
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    nic: '',
    telephoneNumber: '',
    gender: '',
    address: '',
    province: '',
    district: '',
    userRole: '',
    subRole: '',
    email: '',
    postalCode: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [showSub, setShowSub] = useState(true);

  /**
   * Formic and yup Validations
   */
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required().label('First Name'),
    lastName: Yup.string().trim().required().label('Last Name'),
    nic: Yup.string().trim().required().label('National Identity Card Number'),
    telephoneNumber: Yup.number().required().label('Telephone Number'),
    gender: Yup.string().required().label('Gender'),
    address: Yup.string().trim().required().label('Address'),
    province: Yup.string().trim().required().label('Province'),
    district: Yup.string().trim().required().label('District'),
    userRole: Yup.string().trim().required().label('User Role'),
    subRole: Yup.string().trim().required().label('User '),
    email: Yup.string().trim().required().email().label('Email'),
    postalCode: Yup.string().trim().required().label('Postal Code'),
    password: Yup.string().trim().required().label('Password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleSigning = () => {
    setLoading(true);
    navigation.navigate(Routes.SIGNUP);
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
              <MainContainerText>{String.AUTH.SIGNING}</MainContainerText>
              <InputContainer>
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSigning}
                  validationSchema={validationSchema}>
                  {({handleChange, handleSubmit, errors, touched, values}) => (
                    <>
                      <InputContainer>
                        <Input
                          label={'First Name'}
                          labelStyle={{fontWeight: '100'}}
                          onChangeText={handleChange('firstName')}
                          placeholder="Enter your First Name"
                          autoCapitalize="none"
                          autoCorrect={false}
                          required={true}
                        />
                        {touched.firstName ? (
                          <ErrorText>{errors.firstName}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <Input
                          label={'Last Name'}
                          labelStyle={{fontWeight: '100'}}
                          onChangeText={handleChange('lastName')}
                          placeholder="Enter your Last Name"
                          autoCapitalize="none"
                          autoCorrect={false}
                          required={true}
                        />
                        {touched.lastName ? (
                          <ErrorText>{errors.lastName}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <Input
                          label={'National Identity Card Number (NIC)'}
                          labelStyle={{fontWeight: '100'}}
                          onChangeText={handleChange('nic')}
                          placeholder="Enter your NIC Number"
                          autoCapitalize="none"
                          autoCorrect={false}
                          required={true}
                        />
                        {touched.nic ? (
                          <ErrorText>{errors.nic}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <Input
                          label={'Telephone Number'}
                          labelStyle={{fontWeight: '100'}}
                          onChangeText={handleChange('telephoneNumber')}
                          placeholder="Enter your Telephone Number"
                          autoCapitalize="none"
                          keyboardType="numeric"
                          autoCorrect={false}
                          required={true}
                        />
                        {touched.telephoneNumber ? (
                          <ErrorText>{errors.telephoneNumber}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <PickerList
                          label={'Gender'}
                          onValueChange={handleChange('gender')}
                          items={genders}
                          required={true}
                          placeholder={'Select Your Gender'}
                        />
                        {touched.gender ? (
                          <ErrorText>{errors.gender}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <Input
                          label={'Address'}
                          labelStyle={{fontWeight: '100'}}
                          onChangeText={handleChange('address')}
                          placeholder="Enter your Address"
                          autoCapitalize="none"
                          autoCorrect={false}
                          required={true}
                        />
                        {touched.address ? (
                          <ErrorText>{errors.address}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <Input
                          label={'Postal Code'}
                          labelStyle={{fontWeight: '100'}}
                          onChangeText={handleChange('postal')}
                          placeholder="Enter your Postal code"
                          autoCapitalize="none"
                          keyboardType="numeric"
                          autoCorrect={false}
                          required={true}
                        />
                        {touched.postalCode ? (
                          <ErrorText>{errors.postalCode}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <PickerList
                          label={'Province'}
                          onValueChange={handleChange('province')}
                          items={Province}
                          required={true}
                          placeholder={'Select Your Province'}
                        />
                        {touched.province ? (
                          <ErrorText>{errors.province}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <PickerList
                          label={'District'}
                          onValueChange={handleChange('district')}
                          items={District}
                          required={true}
                          placeholder={'Select Your District'}
                        />
                        {touched.district ? (
                          <ErrorText>{errors.district}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <PickerList
                          label={'I am'}
                          onValueChange={handleChange('userRole')}
                          items={UserRoleData}
                          required={true}
                          placeholder={'Select Your Role'}
                        />
                        {touched.userRole ? (
                          <ErrorText>{errors.userRole}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        {values.userRole == 'Driver' ? (
                          <>
                            <PickerList
                              label={'I am Driving '}
                              onValueChange={handleChange('subRole')}
                              items={SubRoles}
                              required={true}
                              placeholder={'Select Your Role'}
                            />

                            <Text
                              style={{marginBottom: 5, fontSize: 13}}></Text>
                          </>
                        ) : null}

                        <Input
                          label={'E-Mail'}
                          labelStyle={{fontWeight: '100'}}
                          onChangeText={handleChange('email')}
                          placeholder="Enter your email"
                          textContentType="emailAddress"
                          autoCapitalize="none"
                          autoCorrect={false}
                          required={true}
                        />
                        {touched.email ? (
                          <ErrorText>{errors.email}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <Input
                          label={'Password'}
                          secureTextEntry={true}
                          labelStyle={{fontWeight: '100'}}
                          onChangeText={handleChange('password')}
                          placeholder="Enter your password"
                          textContentType="password"
                          required={true}
                        />
                        {touched.password ? (
                          <ErrorText>{errors.password}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <Input
                          label={'Confirm Password'}
                          secureTextEntry={true}
                          labelStyle={{fontWeight: '100'}}
                          onChangeText={handleChange('confirmPassword')}
                          placeholder="Confirm your password"
                          textContentType="password"
                          required={true}
                        />
                        {touched.confirmPassword ? (
                          <ErrorText>{errors.confirmPassword}</ErrorText>
                        ) : (
                          <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                        )}
                        <ButtonContainer>
                          <Button
                            title={String.AUTH.SIGNING}
                            mode="contained"
                            loading={loading}
                            onPress={handleSubmit}
                          />
                        </ButtonContainer>
                      </InputContainer>
                    </>
                  )}
                </Formik>
                <Ripple onPress={() => navigation.navigate(Routes.LOGIN)}>
                  <AlreadyLoginText>
                    Already have An Account? <LoginText>Login</LoginText>{' '}
                  </AlreadyLoginText>
                </Ripple>
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

export default SignIn;
