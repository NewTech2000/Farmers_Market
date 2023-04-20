import React from 'react';
import {useState} from 'react';
import {StatusBar, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Ripple from 'react-native-material-ripple';
import styled, {useTheme} from 'styled-components/native';
import SaveButton from '../../components/atoms/Button';
import String from '../../assets/resources/String';
import NavButton from '../../components/molecule/NavButton';
import {getByScreenSize, hdp, wdp} from '../../utils/responsive';
import Icon from '../../components/atoms/Icon';
import CartCard from '../../components/molecule/CartCard';
import Routes from '../../routes/Routes';
import { ModelAlerts } from '../../components/molecule/ModelAlerts/inedx';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme}) => theme.homeBackground};
`;

const Container = styled.View`
align-self-center;
  flex-direction: row;
  padding-top: 30px;
  align-content: center;
  justify-content: center;
`;

const BodyContainer = styled.View`
  flex-direction: column;
  align-content: center;
  padding: 30px;
  padding-top: 10px;
  padding-bottom: 90px;
`;

const CartContainer = styled.TouchableOpacity`
  height: 50px;
  padding-right: 10px;
`;

const CartCountContainer = styled.TouchableOpacity`
  height: 20px;
  width: 50%;
  margin-left: 28px;
  background-color: white;
  position: absolute;
  border-radius: 19px;
  margin-top: 5px;
`;

const Count = styled.Text`
  flex-direction: row;
  flex-wrap: wrap;
  color: ${({theme}) => theme.primary};
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s9)}px;
  text-align: center;
`;

const LeftContainer = styled.TouchableOpacity`
  flex-direction:row
  height: 50px;
  margin-left: 18%;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 10px;
  width: ${wdp(98)}px;
  align-self: center;
  padding: 20px;
`;

const PriceContainer = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${({theme}) => theme.homeBackground};
  margin-top: 25px;
  border-radius: 5px;
  shadow-color: #000;
  shadow-opacity: 1;
  shadow-radius: 20px;
  elevation: 8;
  flex-direction: row;
`;
const PriceText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme}) => theme.newButton};
  padding: 15px 25px;
`;

const Cart = ({navigation}) => {
  const theme = useTheme();
  const [favorite, setFavorite] = useState(false);
  const [cartData, setCartData] = useState(10);
  const [count, setCount] = useState(10);
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, SetAlertType] = useState('');

  const toggleAlert = x => {
    if (x === 'delete') {
      setAlertVisible(!alertVisible);
      SetAlertType('delete');
    } else if (x === 'update') {
      SetAlertType('update');
    } else if (x === 'offline') {
      setAlertVisible(!alertVisible);
      SetAlertType('offline');
    } else {
      setAlertVisible(!alertVisible);
      SetAlertType('mainAlert');
    }
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Cart',
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
      headerRight: () => (
        <LeftContainer>
          <CartContainer>
            <>
              <Icon
                name="cart-outline"
                type={'Ionicons'}
                size={30}
                color={'white'}
                role={'button'}
                onPress={() => {}}
              />
              {cartData && cartData !== null && (
                <CartCountContainer>
                  <Count>{ount}</Count>
                </CartCountContainer>
              )}
            </>
          </CartContainer>
        </LeftContainer>
      ),
    });
  }, [navigation]);

  return (
    <MainContainer>
      <StatusBar backgroundColor="#009933" barStyle="light-content" />
      <ScrollView>
        <BodyContainer>
          <PriceContainer>
            <PriceText>{'Your Total'}</PriceText>
            <PriceText style={{paddingLeft: wdp(38)}}>
              {'Rs ' + ' 1750 .00'}
            </PriceText>
          </PriceContainer>

          <CartCard onPress={()=>toggleAlert('delete')}/>
        </BodyContainer>
      </ScrollView>
      <ButtonContainer>
        <SaveButton
          title={String.BUTTON.PROCESSTODELIVARY}
          mode="contained"
          // loading={loading}
          onPress={()=>navigation.navigate(Routes.DELIVERY)}
        />
      </ButtonContainer>

      <ModelAlerts
            alert={alertType}
            toggleModal={() => toggleAlert(!alertVisible)}
            isModalVisible={alertVisible}
            closeOnPress={() => toggleAlert(false)}
            onBackdropPress={() => setAlertVisible(false)}
            onDeletePress={() => toggleAlert('delete')}
            OnEditPress={() => toggleAlert('update')}
          />
    </MainContainer>
  );
};

export default Cart;
