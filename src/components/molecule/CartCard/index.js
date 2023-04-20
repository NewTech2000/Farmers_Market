import React from 'react';
import {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import styled, {useTheme} from 'styled-components/native';
import Icon from '../../../components/atoms/Icon';
import {getByScreenSize, hdp} from '../../../utils/responsive';

const Container = styled.View`
  border-radius: 15px;
  background-color: ${({theme}) => theme.homeBackground};
  height: ${hdp(5)}%;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 15;
  height: 110px;
  margin-top: 20px;
`;

const InnerContainer = styled.View`
  height: 100px;
  flex-direction: row;
  padding: 10px;
`;
const RadioButtonContainer = styled.View`
  padding-top: 25px;
`;

const MainImageContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 20px;
`;

const ImageContainer = styled.View`
  top: 1px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 280px;
  height: 120px;
`;

const MainImages = styled.Image`
  width: 100px;
  height: 50px;
  top: 2px;
  border-radius: 5px;
`;

const Images = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 2px;
`;

const IconContainer = styled.TouchableOpacity`
  align-self: flex-end;
`;

const MidContainer = styled.View`
  flex: 2;
  flex-direction: column;
`;
const Title = styled.Text`
  color: ${({theme}) => theme.dark};
  font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s8)}px;
  font-weight: 700;
  text-align: center;
  top: 5px;
`;

const Price = styled.Text`
  color: ${({theme}) => theme.darkGray};
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s9)}px;
  font-weight: 700;
  text-align: center;
  top: 10px;
`;

const CountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 25px;
  padding-left: 35px;
`;

const Button = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border-color: ${({theme}) => theme.darkGray};
  background-color: ${({theme}) => theme.lightGray};
  border-width: 0.5px;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

const CountText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: black;
  padding: 0 2px;
`;
const options = [
  {label: 'Option 1', value: 'option1'},
];

const CartCard = ({item, onPress}) => {
  const theme = useTheme();
  const [checked, setChecked] = React.useState('first');
  const [count, setCount] = useState(10);


  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Container>
      <InnerContainer>
        <RadioButtonContainer>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked(checked === 'first' ? '' : 'first')}
            color={theme.newButton}
          />
        </RadioButtonContainer>
        <MainImageContainer>
          <MainImages source={require('../../../assets/images/ITM1.jpg')} />
          <ImageContainer>
            <Images source={require('../../../assets/images/ITM1.jpg')} />
            <Images source={require('../../../assets/images/ITM1.jpg')} />
            <Images source={require('../../../assets/images/ITM1.jpg')} />
          </ImageContainer>
        </MainImageContainer>
        <MidContainer>
          <Title>{'Carrot'}</Title>
          <Price>{'Rs :  120'}</Price>

          <CountContainer>
            <Button onPress={handleDecrement}>
              <Icon name="minus" type={'AntDesign '} size={18} color="#444" />
            </Button>
            <CountText>{count}</CountText>
            <Button onPress={handleIncrement}>
              <Icon name="plus" type={'AntDesign '} size={18} color="#444" />
            </Button>
          </CountContainer>
        </MidContainer>
        <IconContainer onPress={onPress}>
          <Icon
            name={'ios-trash-outline'}
            size={30}
            type={'Ionicons'}
            color={theme.priceColor}
            style={{padding: 3, bottom: 20}}
          />
        </IconContainer>
      </InnerContainer>
    </Container>
  );
};

export default CartCard;
