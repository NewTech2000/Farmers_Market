import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components/native';
import BorderButton from '../../components/atoms/BorderButton/BorderButton';
import Icon from '../../components/atoms/Icon';
import TextGeneric from '../../components/atoms/TextGeneric';
import {getByScreenSize, hdp, wdp} from '../../utils/responsive';
import Button from '../../components/atoms/Button';
import String from '../../assets/resources/String';
import Input from '../../components/atoms/Input';
import CustomDatePicker from '../../components/atoms/DatePicker';
import {TouchableOpacity, View} from 'react-native';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({theme}) => theme.homeBackground};
`;

const Title = styled.Text`
  color: ${({theme}) => theme.darkGray};
  padding-top: ${hdp(3)}px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
`;

const SavedTitle = styled.Text`
  color: ${({theme}) => theme.darkGray};
  padding-top: ${hdp(3)}px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
`;

const Card = styled.View`
  border-radius: 15px;
  background-color: ${({theme}) => theme.homeBackground};

  width: ${wdp(26)}%;
  shadow-color: #000;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
  elevation: 15;
  align-self: center;
  top: 40px;
`;

const SavedCard = styled.View`
  border-radius: 15px;
  background-color: ${({theme}) => theme.homeBackground};
  width: ${wdp(26)}%;
  height: ${hdp(4)}%;
  shadow-color: #000;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
  elevation: 15;
  align-self: center;
  top: 100px;
`;

const BodyContainer = styled.View`
  height: 100%;
  align-content: center;
  padding: 30px;
  padding-bottom: 200px;
`;

const InputContainer = styled.View`
  padding-top: 20px;
  padding: 25px;
`;

const Details = styled.View`
 width:350px
 height:35px;;
 margin-top:10px;
 border-radius:10px
 flex-direction: row;
 background-color: ${({theme}) => theme.notificationLightGray};
`;

const DetailsText = styled(TextGeneric)`
  text-align: center;
  margin-left: 20px;
  font-weight: 700;
  top: 5px;
  color: ${({theme}) => theme.darkGray};
  font-size: ${({theme}) => getByScreenSize(theme.text.s10, theme.text.s7)}px;
  width: ${wdp(21)}%;
`;

const DetailsContainer = styled.View`
  align-self: center;
  flex-direction: column;
`;

const ButtonContainer = styled.View`
  margin-top: ${hdp(5)}px;
  width: ${wdp(80)}px;
  align-self: center;
  padding: 20px;
  bottom: 20px;
`;

const BorderButtonContainer = styled.View`
  padding-top: 40px;
  align-self: flex-end;
  right: 100px;
  bottom: 25px;
`;

const DateContainer = styled.View`
  top: 30px;
  width: ${wdp(35)}px;
`;

const MainDateContainer = styled.View`
  flex-direction: row;
`;

const IconContainer = styled.View`
  justify-content: flex-end;
  align-self: flex-end;
  right: 20px;
  bottom: 28px;
`;

const FutureGoals = () => {
  const theme = useTheme();
  return (
    <MainContainer>
      <Title>{'You can set Your Future Goals In Here'}</Title>
      <ScrollView style={{paddingBottom: 100}}>
        <BodyContainer>
          <Card>
            <InputContainer>
              <Input
                label={'My Goals To Earn Rs'}
                labelStyle={{fontWeight: '100'}}
                // onChangeText={handleChange('email')}
                placeholder="Enter your Expectation"
                textContentType="emailAddress"
                autoCapitalize="none"
                autoCorrect={false}
                required={true}
              />
              <MainDateContainer>
                <DateContainer>
                  <CustomDatePicker
                    label={'From'}
                    required={true}
                    defaultValue={'2023-04-30'}
                  />
                </DateContainer>

                <DateContainer style={{left: 30}}>
                  <CustomDatePicker
                    label={'To'}
                    required={true}
                    defaultValue={'2024-01-30'}
                  />
                </DateContainer>
              </MainDateContainer>
            </InputContainer>
            <ButtonContainer>
              <Button
                title={String.BUTTON.OKAY}
                mode="contained"
                onPress={() => {}}
              />
            </ButtonContainer>
            <DetailsContainer>
              <Details>
                <Icon
                  name={'certificate'}
                  size={15}
                  type={'FontAwesome5'}
                  color={theme.dotColor}
                  style={{height: 100, top: 6, left: 10}}
                />

                <DetailsText>{'You should sell 100kg of Fruits'}</DetailsText>
              </Details>

              <Details>
                <Icon
                  name={'certificate'}
                  size={15}
                  type={'FontAwesome5'}
                  color={theme.dotColor}
                  style={{height: 100, top: 6, left: 10}}
                />

                <DetailsText>
                  {'You should sell 100kg of vegetables in march to september'}
                </DetailsText>
              </Details>

              <Details>
                <Icon
                  name={'certificate'}
                  size={15}
                  type={'FontAwesome5'}
                  color={theme.dotColor}
                  style={{height: 100, top: 6, left: 10}}
                />

                <DetailsText>{'You should Grow 100kg of Fruits'}</DetailsText>
              </Details>
            </DetailsContainer>
            <BorderButtonContainer>
              <BorderButton title={'Save'} onPress={() => {}} />
            </BorderButtonContainer>
          </Card>

          <SavedCard>
            <SavedTitle>{'Your Goals sets on 2023.01.11'}</SavedTitle>
            <IconContainer>
              <TouchableOpacity onPress={() => {}}>
                <View>
                  <Icon
                    type="MaterialIcons"
                    name={'delete'}
                    color={theme.priceColor}
                    size={30}
                    style={{}}
                  />
                </View>
              </TouchableOpacity>
            </IconContainer>
            <DetailsContainer>
              <Details>
                <Icon
                  name={'certificate'}
                  size={15}
                  type={'FontAwesome5'}
                  color={theme.dotColor}
                  style={{height: 100, top: 6, left: 10}}
                />

                <DetailsText>{'You should sell 100kg of Fruits'}</DetailsText>
              </Details>

              <Details>
                <Icon
                  name={'certificate'}
                  size={15}
                  type={'FontAwesome5'}
                  color={theme.dotColor}
                  style={{height: 100, top: 6, left: 10}}
                />

                <DetailsText>
                  {'You should sell 100kg of vegetables in march to september'}
                </DetailsText>
              </Details>

              <Details>
                <Icon
                  name={'certificate'}
                  size={15}
                  type={'FontAwesome5'}
                  color={theme.dotColor}
                  style={{height: 100, top: 6, left: 10}}
                />

                <DetailsText>{'You should Grow 100kg of Fruits'}</DetailsText>
              </Details>
            </DetailsContainer>
          </SavedCard>
        </BodyContainer>
      </ScrollView>
    </MainContainer>
  );
};

export default FutureGoals;
