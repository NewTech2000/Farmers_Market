import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {Avatar} from 'react-native-paper';
import Icon from '../../components/atoms/Icon';
import {getByScreenSize, hdp, wdp} from '../../utils/responsive';
import Button from '../../components/atoms/Button';
import TextGeneric from '../../components/atoms/TextGeneric';
import Input from '../../components/atoms/Input';
import PickerList from '../../components/atoms/PickerList/index';
import {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Data, {
  District,
  genders,
  Province,
  SubRoles,
  UserRoleData,
} from '../../utils/Data';
import String from '../../assets/resources/String';
import {ScrollView} from 'react-native-gesture-handler';
import ErrorText from '../../components/atoms/errorText/errorText';
import Routes from '../../routes/Routes';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme}) => theme.lightGray};
`;

const Container = styled.View`
  align-self: center;
`;

const BodyContainer = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 90px;
`;

const ImageContainer = styled.View`
  align-self: center;
`;
const IconContainer = styled.View`
align-self:flex-end;
flex-direction:row
height:50px;
`;

const IconRow = styled.View`
align-self:flex-end;
flex-direction:row
height:50px;
align-self: center;
padding-left:20px;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom:20px
  width: ${wdp(95)}px;
  align-self: center;
  padding: 10px;
`;

const UserName = styled(TextGeneric)`
  text-align: center;
  color: ${({theme}) => theme.text.textPrimary};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  top: 10px;
`;

const InputContainer = styled.View`
  flex-direction: column;
  align-content: center;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 90px;
`;

export default function ProfileScreen({navigation}) {
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

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required().label('First Name'),
    lastName: Yup.string().trim().required().label('Last Name'),
    nic: Yup.string().trim().required().label('National Identity Card Number'),
    telephoneNumber: Yup.number().required().label('Telephone Number'),
    address: Yup.string().trim().required().label('Address'),
    province: Yup.string().trim().required().label('Province'),
    district: Yup.string().trim().required().label('District'),
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
    <MainContainer>
      <IconContainer>
        <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
          <Icon
            name={'chatbubble-ellipses-outline'}
            size={30}
            type={'Ionicons'}
            color={theme.darkGray}
            style={{paddingRight: 20, paddingTop: 15}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name={'dots-three-vertical'}
            size={20}
            type={'Entypo'}
            color={theme.darkGray}
            style={{paddingRight: 25, paddingTop: 20}}
          />
        </TouchableOpacity>
      </IconContainer>
      <ScrollView>
        <Container>
          <ImageContainer>
            <Avatar.Image
              source={require('../../assets/images/user.png')}
              size={115}></Avatar.Image>
            <TouchableOpacity
              style={{
                position: 'absolute',
                width: 100,
                height: 30,
                marginTop: 85,
                alignSelf: 'center',
                backgroundColor: 'white',
                opacity: 0.5,
                alignItems: 'center',
                borderBottomEndRadius: 50,
                borderBottomLeftRadius: 50,
              }}
              onPress={() => {}}>
              <Icon
                name="camera-outline"
                size={30}
                color="black"
                type={'Ionicons'}
              />
            </TouchableOpacity>
          </ImageContainer>
        </Container>
        <IconRow>
          <Icon
            name={'star'}
            size={25}
            type={'FontAwesome'}
            color={theme.star}
            style={{paddingRight: 20, paddingTop: 20}}
          />
          <Icon
            name={'star'}
            size={25}
            type={'FontAwesome'}
            color={theme.star}
            style={{paddingRight: 20, paddingTop: 20}}
          />
          <Icon
            name={'star'}
            size={25}
            type={'FontAwesome'}
            color={theme.star}
            style={{paddingRight: 20, paddingTop: 20}}
          />
          <Icon
            name={'star'}
            size={25}
            type={'FontAwesome'}
            color={theme.star}
            style={{paddingRight: 20, paddingTop: 20}}
          />
          <Icon
            name={'star'}
            size={25}
            type={'FontAwesome'}
            color={theme.star}
            style={{paddingRight: 20, paddingTop: 20}}
          />
        </IconRow>
        <UserName>{'Nipuna Sachith'}</UserName>
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
                    defaultValue={'Nipuna'}
                    required={true}
                    inputStyle={{backgroundColor: theme.gray}}
                    // disabled={true}
                    // editable={true}
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
                    defaultValue={'Sachith'}
                    required={true}
                    inputStyle={{backgroundColor: theme.gray}}
                  />
                  {touched.lastName ? (
                    <ErrorText>{errors.lastName}</ErrorText>
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
                    defaultValue={'0766028355'}
                    required={true}
                    inputStyle={{backgroundColor: theme.gray}}
                  />
                  {touched.telephoneNumber ? (
                    <ErrorText>{errors.telephoneNumber}</ErrorText>
                  ) : (
                    <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                  )}

                  <Input
                    label={'Address'}
                    labelStyle={{fontWeight: '100'}}
                    onChangeText={handleChange('address')}
                    placeholder="Enter your Address"
                    autoCapitalize="none"
                    defaultValue={'"Galle'}
                    required={true}
                    autoCorrect={false}
                    inputStyle={{backgroundColor: theme.gray}}
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
                    autoCorrect={false}
                    required={true}
                    keyboardType="numeric"
                    defaultValue={'80000'}
                    inputStyle={{backgroundColor: theme.gray}}
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
                    inputStyle={{backgroundColor: theme.gray}}
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
                    inputStyle={{backgroundColor: theme.gray}}
                  />
                  {touched.district ? (
                    <ErrorText>{errors.district}</ErrorText>
                  ) : (
                    <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                  )}

                  <Input
                    label={'E-Mail'}
                    labelStyle={{fontWeight: '100'}}
                    onChangeText={handleChange('email')}
                    placeholder="Enter your email"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required={true}
                    defaultValue={'nipunaschith@gnail.com'}
                    inputStyle={{backgroundColor: theme.gray}}
                  />
                  {touched.email ? (
                    <ErrorText>{errors.email}</ErrorText>
                  ) : (
                    <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                  )}

                  <ButtonContainer>
                    <Button
                      title={String.BUTTON.UPDATE}
                      mode="contained"
                      loading={loading}
                      onPress={handleSubmit}
                    />
                  </ButtonContainer>
                </InputContainer>
              </>
            )}
          </Formik>
        </InputContainer>
      </ScrollView>
    </MainContainer>
  );
}
