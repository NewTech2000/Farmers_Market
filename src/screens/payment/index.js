import React from 'react';
import {Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import NavButton from '../../components/molecule/NavButton';
import styled, {useTheme} from 'styled-components/native';
import {getByScreenSize, wdp} from '../../utils/responsive';
import Icon from '../../components/atoms/Icon';
import SaveButton from '../../components/atoms/Button';
import String from '../../assets/resources/String';
import Routes from '../../routes/Routes';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme}) => theme.homeBackground};
`;

const Container = styled.View`
  align-self-center;
  flex-direction: column;
  padding:15px;
  padding-top: 30px;
  align-content: center;
  justify-content: center;
`;

const AddButton = styled.TouchableOpacity`
  height: 50px;
  width: ${wdp(88)}px;
  border-radius: 50px;
  border-color: ${({theme}) => theme.darkGray};
  background-color: ${({theme}) => theme.newButton};
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: row;
  align-self: center;
  top: 30px;
`;

const NextText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme}) => theme.homeBackground};
  padding: 15px 25px;
`;

const PaymentContainer = styled.View`
  width: 95%;
  height: 250px;
  background-color: ${({theme}) => theme.homeBackground};
  margin-top: 25px;
  border-radius: 5px;
  shadow-color: #000;
  shadow-opacity: 1;
  shadow-radius: 20px;
  elevation: 8;
  flex-direction: column;
  align-self: center;
`;
const InnerContainer = styled.View`
  padding: 15px;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.dark};
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s8)}px;
  font-weight: 700;
  top: 10px;
`;

const Images = styled.Image`
  width: 70px;
  height: 42px;
  margin: 2px;
  align-self: flex-start;
  top: 20px;
`;

const CardContainer = styled.View`
  padding-top: 10px;
  flex-direction: row;
`;

const CardNumber = styled.Text`
  color: ${({theme}) => theme.dark};
  font-size: ${({theme}) => getByScreenSize(theme.text.s11, theme.text.s10)}px;
  font-weight: 700;
  top: 35px;
  left: 20px;
  letter-spacing: 5px;
`;

const RadioButtonContainer = styled.View`
  padding-top: 20px;
  align-self: flex-end;
  align-content: flex-end;
  justify-content: flex-end;
  padding-left: 50px;
`;

const AddButtonContainer = styled.TouchableOpacity`
  border-width: 3px;
  background-color: ${({theme}) => theme.homeBackground};
  border-radius: 20px;
  width: 50px;
  height:20px;
  border-color: ${({theme}) => theme.newButton};
  align-items: center;
  left: 35px;
  margin-top: 30px;

`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.newButton};
  font-weight: bold;
  font-size: 8px;
  text-align:center;
  top:2px;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 10px;
  width: ${wdp(98)}px;
  align-self: center;
  padding: 20px;
`;


export default function Payment({navigation}) {
  const theme = useTheme();
  const [checked, setChecked] = React.useState('COD');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Payment',
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
      <Container>
        <PaymentContainer>
          <InnerContainer>
            <Title>{'Cash/Card on delivery'}</Title>

            <View style={{alignSelf: 'flex-end', bottom: 13, left: 10}}>
              <RadioButton
                value="COD"
                status={checked === 'COD' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('COD')}
                color={theme.newButton}
              />
            </View>

            <CardContainer>
              <Images source={require('../../assets/images/visa.png')} />
              <CardNumber>{'*** **** *** 2478'}</CardNumber>
              <AddButtonContainer>
                <ButtonText>{'Delete'}</ButtonText>
              </AddButtonContainer>
              <RadioButtonContainer>
                <RadioButton
                  value="VISA"
                  status={checked === 'VISA' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('VISA')}
                  color={theme.newButton}
                />
              </RadioButtonContainer>
            </CardContainer>

            <CardContainer>
              <Images source={require('../../assets/images/master.png')} />
              <CardNumber>{'*** **** *** 2478'}</CardNumber>
              <AddButtonContainer>
                <ButtonText>{'Delete'}</ButtonText>
              </AddButtonContainer>
              <RadioButtonContainer>
                <RadioButton
                  value="MASTER"
                  status={checked === 'MASTER' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('MASTER')}
                  color={theme.newButton}
                />
              </RadioButtonContainer>
            </CardContainer>
          </InnerContainer>
        </PaymentContainer>
      </Container>
      <AddButton>
        <NextText>{'Add Another Credit/Debit Card'}</NextText>
        <Icon
          name={'rightcircleo'}
          type={'AntDesign'}
          size={getByScreenSize(theme.text.s6, theme.text.s6)}
          color={theme.homeBackground}
          style={{top: 1, right: 15}}
        />
      </AddButton>

      <ButtonContainer>
        <SaveButton
          title={String.BUTTON.PROCESSTOPAY}
          mode="contained"
          // loading={loading}
          onPress={() => navigation.navigate(Routes.PAYMENTSUCCESS)} 
        />
      </ButtonContainer>
    </MainContainer>
  );
}
