import React from 'react';
import {Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import NavButton from '../../components/molecule/NavButton';
import styled, {useTheme} from 'styled-components/native';
import {getByScreenSize, wdp} from '../../utils/responsive';
import Icon from '../../components/atoms/Icon';
import SaveButton from '../../components/atoms/Button';
import Routes from '../../routes/Routes';
import String from '../../assets/resources/String';

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

const HeaderText = styled.Text`
  color: ${({theme}) => theme.dark};
  font-size: ${({theme}) => getByScreenSize(theme.text.s3, theme.text.s3)}px;
  font-weight: bold;
  top: 50px;
  text-align: center;
`;

const SuccessText = styled.Text`
  color: ${({theme}) => theme.star};
  font-size: ${({theme}) => getByScreenSize(theme.text.s1, theme.text.s1)}px;
  font-weight: bold;
  top: 100px;
  text-align: center;
`;

const FooterText = styled.Text`
  color: ${({theme}) => theme.dark};
  font-size: ${({theme}) => getByScreenSize(theme.text.s6, theme.text.s6)}px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  padding-top: 80px;
`;

const IconContainer = styled.View`
  align-self: center;
  justify-content: center;
  padding-top: 180px;
  padding-left: 100px;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 10px;
  width: ${wdp(98)}px;
  align-self: center;
  padding: 20px;
`;

const PaymentSuccess = ({navigation}) => {
  const theme = useTheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Success',
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
        <HeaderText>{'Your Payment'}</HeaderText>
        <SuccessText>{'SUCCESSFUL'}</SuccessText>

        <IconContainer>
          <Icon
            type="AntDesign"
            name="checkcircle"
            color={theme.darkGreen}
            size={120}
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              alignItem: 'Center',
            }}
          />
        </IconContainer>

        <FooterText>{'Thank You .... !'}</FooterText>
      </Container>
      <ButtonContainer>
        <SaveButton
          title={String.BUTTON.VIEWMYORDER}
          mode="contained"
          // loading={loading}
          onPress={() => navigation.navigate(Routes.ORDERDETAILS)}
        />
      </ButtonContainer>
    </MainContainer>
  );
};
export default PaymentSuccess;
