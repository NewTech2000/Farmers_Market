import React from 'react';
import {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Ripple from 'react-native-material-ripple';
import styled, {useTheme} from 'styled-components/native';
import Icon from '../../components/atoms/Icon';
import Input from '../../components/atoms/Input';
import NavButton from '../../components/molecule/NavButton';
import {getByScreenSize, wdp} from '../../utils/responsive';
import SaveButton from '../../components/atoms/Button';
import String from '../../assets/resources/String';
import Routes from '../../routes/Routes';
import {RadioButton} from 'react-native-paper';

import {Formik} from 'formik';
import * as Yup from 'yup';
import CameraButton from '../../components/molecule/CameraButton';
import Button from '../../components/atoms/Button';
import ErrorText from '../../components/atoms/errorText/errorText';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;

  background-color: ${({theme}) => theme.homeBackground};
`;
const BodyContainer = styled.View`
  flex-direction: column;
  align-content: center;
  padding: 30px;
  padding-top: 50px;
  padding-bottom: 90px;
`;

const LabelView = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding-top: 20px;
`;

const LabelText = styled(Text)`
  color: ${({theme}) => theme.disableTextInput.label};
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s10)}px;
  margin-right: 8px;
`;

const LeftContainer = styled.TouchableOpacity`
  flex-direction:row
  height: 50px;
  margin-left: 18%;
`;

const InputContainer = styled.View`
  flex-direction: column;
  align-content: center;
  padding: 10px;
  padding-top: 1px;
  padding-bottom: 90px;
`;

const ButtonContainer = styled.View`
  margin-top: 20px;
  width: ${wdp(95)}px;
  align-self: center;
  padding: 10px;
`;

const AddNewItem = ({navigation}) => {
  const [images, setImages] = useState([]);
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    itemName: '',
    itemPrice: '',
    itemQuantity: '',
    itemDescription: '',
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Add New Item',
      headerStyle: {
        backgroundColor: theme.primary,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '700',
        textAlign: 'center',
      },
      headerLeft: () => (
        <NavButton
          style={{marginRight: 8}}
          iconName={Platform.OS === 'android' ? 'arrow-back' : 'chevron-back'}
          label={Platform.OS === 'ios' ? 'Back' : ''}
          iconStyle={{
            color:
              Platform.OS === 'android'
                ? theme.homeBackground
                : theme.newButton,
          }}
          // disabled={!formComplete}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  const validationSchema = Yup.object().shape({
    itemName: Yup.string().trim().required().label('Item Name'),
    itemPrice: Yup.string().trim().required().label('Item Price'),
    itemQuantity: Yup.string().trim().required().label('Item Quantity'),
    itemDescription: Yup.string().trim().required().label('Item Description'),
    // photo: Yup
    //   .mixed()
    //   .required('A photo is required')
    //   .test('fileType', 'Only JPG or PNG format allowed', value => {
    //     if (!value) return true;
    //     return ['image/jpeg', 'image/png'].includes(value.type);
    //   }),
  });

  const handleAddItem = () => {
    navigation.navigate(Routes.HOME);
  };
  return (
    <MainContainer>
      <ScrollView>
        <BodyContainer>
          <LabelView>
            <LabelText style={{}}>{'Item Photos'}</LabelText>

            <Ripple
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
          <View style={{paddingTop: 20}}>
            <CameraButton
              fileNameCode={'item?.Name'}
              addMultiplePhotos
              title={'Add new Images'}
              onChange={images => setImages(images)}
            />
          </View>
        </BodyContainer>

        <InputContainer>
          <Formik
            initialValues={initialValues}
            onSubmit={handleAddItem}
            validationSchema={validationSchema}>
            {({handleChange, handleSubmit, errors, touched, values}) => (
              <>
                <InputContainer>
                  <Input
                    label={'Item Name'}
                    labelStyle={{fontWeight: '100'}}
                    onChangeText={handleChange('itemName')}
                    placeholder="Enter your Item Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required={true}
                    inputStyle={{backgroundColor: theme.gray}}
                    // disabled={true}
                    // editable={true}
                  />
                  {touched.itemName ? (
                    <ErrorText>{errors.itemName}</ErrorText>
                  ) : (
                    <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                  )}
                  <Input
                    label={'Item Price'}
                    labelStyle={{fontWeight: '100'}}
                    onChangeText={handleChange('itemPrice')}
                    placeholder="Enter your Item Price"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required={true}
                    inputStyle={{backgroundColor: theme.gray}}
                  />
                  {touched.itemPrice ? (
                    <ErrorText>{errors.itemPrice}</ErrorText>
                  ) : (
                    <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                  )}

                  <Input
                    label={'Item Quantity'}
                    labelStyle={{fontWeight: '100'}}
                    onChangeText={handleChange('itemQuantity')}
                    placeholder="Enter your Item Quantity"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required={true}
                    inputStyle={{backgroundColor: theme.gray}}
                  />
                  {touched.itemQuantity ? (
                    <ErrorText>{errors.itemQuantity}</ErrorText>
                  ) : (
                    <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                  )}

                  <Input
                    label={'Item Description'}
                    labelStyle={{fontWeight: '100'}}
                    onChangeText={handleChange('itemDescription')}
                    placeholder="Enter your Item Description"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required={true}
                    inputStyle={{backgroundColor: theme.gray}}
                  />
                  {touched.itemDescription ? (
                    <ErrorText>{errors.itemDescription}</ErrorText>
                  ) : (
                    <Text style={{marginBottom: 5, fontSize: 13}}></Text>
                  )}

                  <ButtonContainer>
                    <Button
                      title={String.BUTTON.SAVE}
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
};

export default AddNewItem;
