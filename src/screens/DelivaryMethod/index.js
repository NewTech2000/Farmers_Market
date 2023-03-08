import React from 'react';
import {useState} from 'react';
import {StatusBar, Text} from 'react-native';
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

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 10px;
  width: ${wdp(98)}px;
  align-self: center;
  padding: 20px;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.dark};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  font-weight: 600;
  top: 50px;
  font-style: italic;
`;

const DeliveryMethodCard = styled.View`
  width: 45%;
  height: 200px;
  background-color: ${({theme}) => theme.homeBackground};
  margin-top: 25px;
  border-radius: 5px;
  shadow-color: #000;
  shadow-opacity: 1;
  shadow-radius: 20px;
  elevation: 8;
  flex-direction: column;
  margin-right: 15px;
`;

const DeliveryMethodCardContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: 70px;
  align-self: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const RadioButtonContainer = styled.View`
  flex-direction: row;
  padding-top: 15px;
  padding-left: 120px;
  bottom: 30px;
`;

const MethodTitle = styled.Text`
  color: ${({theme}) => theme.dark};
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s8)}px;
  font-weight: 700;
  text-align: center;
  top: 10px;
  // left:10px;
`;

const Price = styled.Text`
  color: ${({theme}) => theme.darkGray};
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s9)}px;
  font-weight: 700;
  text-align: center;
  bottom: 3px;
`;

const Images = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin: 2px;
  align-self: center;
  bottom: 20px;
`;

const DeliveryMethod = ({navigation}) => {
  const theme = useTheme();
  const [cartData, setCartData] = useState(10);
  const [checked, setChecked] = React.useState('threeWheel');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'DeliveryMethod',
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
                  <Count>{cartData}</Count>
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
      <ScrollView>
        <BodyContainer>
          <PriceContainer>
            <PriceText>{'Your Total'}</PriceText>
            <PriceText style={{paddingLeft: wdp(38)}}>
              {'Rs ' + ' 1750 .00'}
            </PriceText>
          </PriceContainer>
          <Title>{'please Setup Your Delivery Method'}</Title>

          <DeliveryMethodCardContainer>
            <DeliveryMethodCard>
              <MethodTitle>{'Three Wheeler'}</MethodTitle>
              <RadioButtonContainer>
                <RadioButton
                  value="threeWheel"
                  status={checked === 'threeWheel' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('threeWheel')}
                  color={theme.newButton}
                />
              </RadioButtonContainer>
              <Images
                source={require('../../assets/images/threewheeler.png')}
              />
              <Price>{'Rs :  120'}</Price>
            </DeliveryMethodCard>

            <DeliveryMethodCard>
              <MethodTitle>{'Mini Lorry'}</MethodTitle>
              <RadioButtonContainer>
                <RadioButton
                  value="miniLorry"
                  status={checked === 'miniLorry' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('miniLorry')}
                  color={theme.newButton}
                />
              </RadioButtonContainer>
              <Images source={require('../../assets/images/lorry.png')} />
              <Price>{'Rs :  120'}</Price>
            </DeliveryMethodCard>

            <DeliveryMethodCard>
              <MethodTitle>{'Lorry'}</MethodTitle>
              <RadioButtonContainer>
                <RadioButton
                  value="lorry"
                  status={checked === 'lorry' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('lorry')}
                  color={theme.newButton}
                />
              </RadioButtonContainer>
              <Images source={require('../../assets/images/lorry1.png')} />
              <Price>{'Rs :  120'}</Price>
            </DeliveryMethodCard>

            <DeliveryMethodCard>
              <MethodTitle>{'Self'}</MethodTitle>
              <RadioButtonContainer>
                <RadioButton
                  value="self"
                    status={checked === 'self' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('self')}
                  color={theme.newButton}
                />
              </RadioButtonContainer>
              <Images source={require('../../assets/images/user1.png')} />
            </DeliveryMethodCard>
          </DeliveryMethodCardContainer>
        </BodyContainer>
      </ScrollView>
      <ButtonContainer>
        <SaveButton
          title={String.BUTTON.PROCESSTOPAY}
          mode="contained"
          // loading={loading}
          onPress={() => navigation.navigate(Routes.DELIVERYMETHOD)}
        />
      </ButtonContainer>
    </MainContainer>
  );
};

export default DeliveryMethod;
