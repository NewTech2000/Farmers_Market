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
import ExpandableView from '../../components/molecule/ExpandableView';
import AppModal from '../../components/molecule/Model';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme}) => theme.homeBackground};
`;

const BodyContainer = styled.View`
  height: 100%;
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

const ButtonContainer = styled.View`
  position: absolute;
  bottom:2px
  width: ${wdp(95)}px;
  align-self: center;
  padding: 10px;
`;

const OrderDetails = ({navigation}) => {
  const theme = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);
  const [correctModel, setCorrectModel] = useState('');

  const toggleModal = modelName => {

    if (modelName =="ratingModel") {
     
      setCorrectModel('ratingModel');
      setModalVisible(true);
      // navigation.navigate(Routes.HOME)
    }
   
  };


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Order Details',
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
  return (
    <MainContainer>
      <ScrollView>
        <BodyContainer>
          <ScrollView>
            <ExpandableView />

            <ExpandableView />

            <ExpandableView />
          </ScrollView>
        </BodyContainer>
      </ScrollView>
      <ButtonContainer>
        <Button
          title={String.BUTTON.HOME}
          mode="contained"
          // loading={loading}
          onPress={() => toggleModal("ratingModel")}
        />

        <AppModal
          modelName={correctModel}
          toggleModal={() => setModalVisible(!isModalVisible)}
          isModalVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          closeOnPress={() => setModalVisible(false)}
          ViewMoreOnPress={() => navigation.navigate(Routes.ORDERDETAILS)}
          doneOnPress={()=>navigation.navigate(Routes.MAIN_HOME)}
        />
      </ButtonContainer>
    </MainContainer>
  );
};
export default OrderDetails;          