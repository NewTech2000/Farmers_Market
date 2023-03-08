import React from 'react';
import {useState} from 'react';
import {StatusBar, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Ripple from 'react-native-material-ripple';
import styled, {useTheme} from 'styled-components/native';
import Icon from '../../components/atoms/Icon';
import Input from '../../components/atoms/Input';
import TextGeneric from '../../components/atoms/TextGeneric';
import NavButton from '../../components/molecule/NavButton';
import {getByScreenSize, hdp, wdp} from '../../utils/responsive';
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

const FavoriteContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-self: flex-end;
  height: 40px;
  width: 40px;
  margin: 10px;
  padding-left: 5px;
`;

const LeftContainer = styled.TouchableOpacity`
  flex-direction:row
  height: 50px;
  margin-left: 18%;
`;

const MainLeftContainer = styled.View`
  flex-direction:row
  height: 50px;
  background-color: ${({theme}) => theme.primary};
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

const CartContainer = styled.TouchableOpacity`
  height: 50px;
  padding-right: 10px;
`;

const Images = styled.Image`
  top: 70px;
  width: 85px;
  height: 85px;
  border-radius: 15px;
  margin-top: 5px;
`;

const ImageContainer = styled.View`
  align-self: center;
  top: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
  width: 280px;
  justify-content: space-between;
  height: 120px;
`;

const MainImages = styled.Image`
  width: 280px;
  height: 85px;
  top: 30px;
  border-radius: 15px;
  align-self: center;
`;

const BodyContainer = styled.View`
  flex-direction: column;
  align-content: center;
  padding: 30px;
  padding-top: 50px;
  padding-bottom: 90px;
`;

const DetailsContainer = styled.View`
  flex-direction: column;
  align-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
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

const ContainerView = styled.View`
  width: 100%;
`;

const CountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
`;

const Button = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border-color: ${({theme}) => theme.darkGray};
  background-color: ${({theme}) => theme.lightGray};
  border-width: 0.5px;
  align-items: center;
  justify-content: center;
  margin: 0 50px;
`;

const CountText = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: black;
  padding: 0 2px;
`;

const WarningText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme}) => theme.errorText};
  padding: 25px;
  align-self: center;
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
  margin-top: ${hdp(2)}px;
  width: ${wdp(98)}px;
  align-self: center;
  padding: 20px;
`;

const NextButton = styled.TouchableOpacity`
  height: 50px;
  width: ${wdp(88)}px;
  border-radius: 50px;
  border-color: ${({theme}) => theme.darkGray};
  background-color: ${({theme}) => theme.newButton};
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: row;
`;

const NextText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme}) => theme.homeBackground};
  padding: 15px 25px;
`;

const SingleItem = ({navigation}) => {
  const theme = useTheme();
  const [favorite, setFavorite] = useState(false);
  const [cartData, setCartData] = useState(10);
  const [count, setCount] = useState(0);
  const [availableQuantity, setAvailableQuantity] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Carrot',
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
        <StatusBar backgroundColor="#009933" barStyle="light-content" />
        <FavoriteContainer onPress={() => setFavorite(!favorite)}>
          {favorite == true ? (
            <Icon
              name={'star'}
              size={25}
              type={'FontAwesome'}
              color={theme.star}
              style={{padding: 5}}
            />
          ) : (
            <Icon
              name={'star-o'}
              size={25}
              type={'FontAwesome'}
              color={theme.darkGray}
              style={{padding: 5}}
            />
          )}
        </FavoriteContainer>

        <MainImages source={require('../../assets/images/ITM1.jpg')} />
        <ImageContainer>
          <Images source={require('../../assets/images/ITM1.jpg')} />
          <Images source={require('../../assets/images/ITM1.jpg')} />
          <Images source={require('../../assets/images/ITM1.jpg')} />
        </ImageContainer>

        <BodyContainer>
          <DetailsContainer>
            <Input
              label={'Item Name'}
              labelStyle={{fontWeight: '100'}}
              placeholder="Enter your Telephone Number"
              autoCapitalize="none"
              keyboardType="numeric"
              autoCorrect={false}
              defaultValue={'Carrot'}
              // type={'button'}
              showInfo
              disabled
              inputStyle={{backgroundColor: theme.gray}}
            />
          </DetailsContainer>
          <DetailsContainer>
            <Input
              label={'Item Price (per One KG)'}
              labelStyle={{fontWeight: '100'}}
              placeholder="Enter your Telephone Number"
              autoCapitalize="none"
              keyboardType="numeric"
              autoCorrect={false}
              defaultValue={'150'}
              // type={'button'}
              showInfo
              disabled
              inputStyle={{backgroundColor: theme.gray}}
            />
          </DetailsContainer>

          <DetailsContainer>
            <Input
              label={'Available Quantity'}
              labelStyle={{fontWeight: '100'}}
              autoCapitalize="none"
              keyboardType="numeric"
              autoCorrect={false}
              defaultValue={'0766028355'}
              showInfo
              disabled
              inputStyle={{backgroundColor: theme.gray}}
            />
          </DetailsContainer>
          <DetailsContainer>
            <Input
              label={'Date Posted'}
              labelStyle={{fontWeight: '100'}}
              autoCorrect={false}
              defaultValue={'2023.03.07 - 02.35.25 PM'}
              showInfo
              disabled
              inputStyle={{backgroundColor: theme.gray}}
            />
          </DetailsContainer>

          <DetailsContainer>
            <Input
              label={'Item Description'}
              labelStyle={{fontWeight: '100'}}
              placeholder="Enter your Telephone Number"
              autoCapitalize="none"
              keyboardType="numeric"
              autoCorrect={false}
              defaultValue={'This Is New Arrived Quantity'}
              showInfo
              disabled
              multiline={true}
              numberOfLines={4}
              inputStyle={{backgroundColor: theme.gray}}
            />
          </DetailsContainer>

          <ContainerView style={[{width: `${getByScreenSize(100, 46)}%`}]}>
            <LabelView>
              <LabelText style={{}}>{'Item Quantity'}</LabelText>

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
            <CountContainer>
              <Button onPress={handleDecrement}>
                <Icon name="minus" type={'AntDesign '} size={18} color="#444" />
              </Button>
              <CountText>{count}</CountText>
              <Button onPress={handleIncrement}>
                <Icon name="plus" type={'AntDesign '} size={18} color="#444" />
              </Button>
            </CountContainer>
          </ContainerView>

          {cartData < count && (
            <WarningText>
              {
                ' You Have exceed the Maximum  Item quantity Buy the Rest From Next Item'
              }
            </WarningText>
          )}

          <PriceContainer>
            <PriceText>{'Your Total'}</PriceText>
            <PriceText style={{paddingLeft: wdp(38)}}>
              {'Rs ' + ' 1750 .00'}
            </PriceText>
          </PriceContainer>

          <ButtonContainer>
            <SaveButton
              title={String.BUTTON.ADDTOCART}
              mode="contained"
              // loading={loading}
              onPress={()=>navigation.navigate(Routes.CART)}
            />
          </ButtonContainer>
          {cartData < count && (
            <NextButton>
              <NextText>{'Buy The Rest Quantity  from Next Item '}</NextText>
              <Icon
                name={'rightcircleo'}
                type={'AntDesign'}
                size={getByScreenSize(theme.text.s6, theme.text.s6)}
                color={theme.homeBackground}
                style={{top: 1, right: 15}}
              />
            </NextButton>
          )}
        </BodyContainer>
      </ScrollView>
    </MainContainer>
  );
};

export default SingleItem;
