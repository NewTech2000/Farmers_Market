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

const Title = styled.Text`
  color: ${({theme}) => theme.dark};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  font-weight: 600;
  top: 50px;
  font-style: italic;
`;

const DetailsContainer = styled.View`
  flex-direction: column;
  align-content: center;
  padding-top: 50px;
  padding-bottom: 10px;
`;

const InputContainer = styled.View`
  align-content: center;
  padding-top: 25px;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 10px;
  width: ${wdp(98)}px;
  align-self: center;
  padding: 20px;
`;
const Delivery = ({navigation}) => {
  const theme = useTheme();
  const [cartData, setCartData] = useState(10);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Delivery',
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

          <Title>{'please Setup Your Delivery details'}</Title>

          <DetailsContainer>
            <InputContainer>
              <Input
                label={'Address'}
                labelStyle={{fontWeight: '100'}}
                // onChangeText={handleChange('telephoneNumber')}
                placeholder="Enter your Address"
                autoCapitalize="none"
                autoCorrect={false}
                defaultValue={'Galle Poddala Srilanka'}
                required={true}
                disabled
                multilinr={true}
                numberOfLines={3}
                inputStyle={{backgroundColor: theme.gray}}
              />
            </InputContainer>

            <InputContainer>
              <Input
                label={'Telephone Number'}
                labelStyle={{fontWeight: '100'}}
                // onChangeText={handleChange('telephoneNumber')}
                placeholder="Enter your Telephone Number"
                autoCapitalize="none"
                keyboardType="numeric"
                autoCorrect={false}
                defaultValue={'0766028355'}
                required={true}
                disabled
                inputStyle={{backgroundColor: theme.gray}}
              />
            </InputContainer>

            <InputContainer>
              <Input
                label={'Postal Code'}
                labelStyle={{fontWeight: '100'}}
                // onChangeText={handleChange('telephoneNumber')}
                placeholder="Enter your Postal Code"
                autoCapitalize="none"
                keyboardType="numeric"
                autoCorrect={false}
                defaultValue={'80000'}
                required={true}
                disabled
                inputStyle={{backgroundColor: theme.gray}}
              />
            </InputContainer>

            <InputContainer>
              <Input
                label={'Province'}
                labelStyle={{fontWeight: '100'}}
                // onChangeText={handleChange('telephoneNumber')}
                placeholder="Enter your Province"
                autoCapitalize="none"
                autoCorrect={false}
                defaultValue={'Southern PRovince'}
                required={true}
                disabled
                inputStyle={{backgroundColor: theme.gray}}
              />
            </InputContainer>

            <InputContainer>
              <Input
                label={'District'}
                labelStyle={{fontWeight: '100'}}
                // onChangeText={handleChange('telephoneNumber')}
                placeholder="Enter your District"
                autoCapitalize="none"
                autoCorrect={false}
                defaultValue={'Galle'}
                required={true}
                disabled
                inputStyle={{backgroundColor: theme.gray}}
              />
            </InputContainer>

            <InputContainer>
              <Input
                label={'Additional Note'}
                labelStyle={{fontWeight: '100'}}
                // onChangeText={handleChange('telephoneNumber')}
                placeholder="Enter your Additional Note"
                autoCapitalize="none"
                autoCorrect={false}
                defaultValue={'Test'}
                required={true}
                disabled
                inputStyle={{backgroundColor: theme.gray}}
              />
            </InputContainer>
          </DetailsContainer>
        </BodyContainer>
      </ScrollView>
      <ButtonContainer>
        <SaveButton
          title={String.BUTTON.PROCESSTODELIVARY}
          mode="contained"
          // loading={loading}
          onPress={() => navigation.navigate(Routes.DELIVERYMETHOD)}
        />
      </ButtonContainer>
    </MainContainer>
  );
};

export default Delivery;
