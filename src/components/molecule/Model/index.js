import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import styled, {useTheme} from 'styled-components/native';
import String from '../../../assets/resources/String';
import {District, ItemData} from '../../../utils/Data';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import TextGeneric from '../../atoms/TextGeneric';
import CustomDatePicker from '../../atoms/DatePicker';
import {TextInput} from 'react-native';
import {Switch} from 'react-native-paper';

const MainContainer = styled.View`
  flex-direction: column;
  background-color: white;
  height: 85%;
  top: 100px;
  border-radius: 10px;
`;

const Container = styled.View``;

const Line = styled.View`
  align-self:center;
  width:60%
  height:0.8%;
  border-radius:10px
  background-color: ${({theme}) => theme.gray};
  flex-direction: row;
  top:12px;
`;

const TitleText = styled(TextGeneric)`
  text-align: center;
  color: ${({theme}) => theme.title.titleColor};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s5, theme.text.s5)}px;
  top: 10px;
`;

const DetailsText = styled(TextGeneric)`
  text-align: center;
  margin-left: 20px;
  font-weight: 700;
  top: 5px;
  color: ${({theme}) => theme.darkGray};
  font-size: ${({theme}) => getByScreenSize(theme.text.s10, theme.text.s7)}px;
`;

const DetailsContainer = styled.View`
  align-self: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Details = styled.View`
width:350px
height:30px;;
margin-top:8px;
border-radius:10px
flex-direction: row;
background-color: ${({theme}) => theme.notificationLightGray};
`;

const MainImages = styled.Image`
  width: 280px;
  height: 85px;
  top: 30px;
  border-radius: 15px;
  align-self: center;
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

const SubTitle = styled(TextGeneric)`
  color: ${({theme}) => theme.priceColor};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s6, theme.text.s6)}px;
  top: 10px;
`;
const SubTitleText = styled(TextGeneric)`
  text-align: center;
  color: ${({theme}) => theme.text.textPrimary};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s6, theme.text.s6)}px;
  top: 10px;
`;

const StatusContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 5%;
`;

const StatusRowContainer = styled.View`
  flex-direction: row;
  text-align: center;
  align-self: center;
  padding-top: 5%;
`;

const StatusText = styled(TextGeneric)`
  text-align: center;
  color: ${({theme}) => theme.text.textPrimary};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  padding-top: 10px;
`;

const ButtonContainer = styled.View`
  margin-top: ${hdp(2)}px;
  width: ${wdp(90)}px;
  align-self: center;
  padding: 20px;
  bottom: 20px;
`;

const DescriptionText = styled(TextGeneric)`
  color: ${({theme}) => theme.darkGray};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  padding-left: 125px;
  top: 5px;
`;

const ViewMoreText = styled(TextGeneric)`
  color: ${({theme}) => theme.priceColor};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  text-align:center
  padding-top: 50px;
`;

const DateRow = styled.View`
  flex: 1;
  flex-direction: row;
`;

const DateContainer = styled.View`
  width: ${wdp(35)}px;
  left: 20px;
`;

const TopDataContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 120px;
  padding-top: 50px;
  // position: absolute;
`;

const TopDescriptionText = styled(TextGeneric)`
  color: ${({theme}) => theme.darkGray};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  padding-left: 35px;
  top: 5px;
`;

const FinanceDataContainRow = styled.View`
  flex: 1;
  flex-direction: row;
  height: 50px;
`;

const FinanceBodyContainRow = styled.View`
  flex: 30;
  top: 20px;
`;
const FinanceItemText = styled(TextGeneric)`
  color: ${({theme}) => theme.text.textPrimary};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  left: 50px;
`;

const CostInput = styled.TextInput`
  width: 100px;
  height: 40px;
  border-color: ${({theme}) => theme.genericInput.borderPrimary};
  border-radius: 4px;
  text-align: center;
  shadow-color: #000;
  shadow-opacity: 0.8;
  elevation: 2;
  bottom: 10px;
  margin-right: 10px;
  flex: 2;
`;

const CostInputContainer = styled.View`
  flex: 3;
  flex-direction: row;
  padding-left: 100px;
`;

const AddCardInput = styled.TextInput`
  width: 350px;
  height: 50px;
  border-color: ${({theme}) => theme.genericInput.borderPrimary};
  border-radius: 4px;
  text-align: center;
  shadow-color: #000;
  shadow-opacity: 0.8;
  elevation: 2;
  margin-top: 20px;
  margin-right: 10px;
  flex: 2;
  border-radius: 30px;
`;

const AddCardBody = styled.View`
  flex: 3;
  flex-direction: column;
  padding-left: 10px;
  margin-top: 50px;
  align-self: center;
`;

const AddCardButtonContainer = styled.TouchableOpacity`
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
  margin-top: 10px;
`;

const AddCardButtonText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme}) => theme.homeBackground};
  padding: 15px 25px;
`;

const ToggleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 40px;
`;

const ToggleContentText = styled(TextGeneric)`
  color: ${({theme}) => theme.darkGray};
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s10)}px;
  flex-wrap: wrap;
  top: 5px;
`;

const RatingContainer = styled.View`
  padding-top: 50px;
`;

const SeparatorLine = styled.View`
  height: 2px;
  width: 80%;
  align-self: center;
  background-color: ${({theme}) => theme.darkGray};
  margin-top: 20px;
`;

const IconRow = styled.View`
align-self:flex-end;
flex-direction:row
height:50px;
align-self: center;
padding-left:20px;
`;

const DetailContainer = styled.View`
  flex-direction: row;
  padding-left: 60px;
  padding-top: 10px;
`;

const UserText = styled(TextGeneric)`
  color: ${({theme}) => theme.userColor};
  font-weight: 600;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
`;

const NextText = styled.Text``;

const AppModal = ({
  modelName,
  toggleModal,
  isModalVisible,
  onBackdropPress,
  closeOnPress,
  images,
  userRole,
  title,
  ViewMoreOnPress,
  doneOnPress,
}) => {
  const theme = useTheme();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={{flex: 1}}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}

      <Modal
        testID={'bottom-half-modal-open-button'}
        animationType={'fade'}
        isVisible={isModalVisible}
        animationOut={'slideOutDown'}
        animationIn={'slideInUp'}
        onBackButtonPress={onBackdropPress}>
        {modelName === 'CompleteOrder' && (
          <MainContainer>
            <Container>
              <Line />
              <TouchableOpacity onPress={closeOnPress}>
                <Icon
                  name={'closecircle'}
                  size={25}
                  type={'AntDesign'}
                  color={theme.darkGray}
                  style={{left: 340, paddingTop: 3}}
                />
              </TouchableOpacity>
              <TitleText>{'Carrot  10 KG'}</TitleText>
              <MainImages source={require('../../../assets/images/ITM1.jpg')} />
              <ImageContainer>
                <Images source={require('../../../assets/images/ITM1.jpg')} />
                <Images source={require('../../../assets/images/ITM1.jpg')} />
                <Images source={require('../../../assets/images/ITM1.jpg')} />
              </ImageContainer>

              {ItemData.map((item, i) => (
                <DetailsContainer key={i}>
                  <Details>
                    <Icon
                      name={'certificate'}
                      size={15}
                      type={'FontAwesome5'}
                      color={theme.dotColor}
                      style={{height: 100, top: 6, left: 10}}
                    />

                    <DetailsText>
                      {'Item'}
                      {' :'}
                    </DetailsText>
                    <DetailsText>{item.ItemName}</DetailsText>
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
                      {'Price'}
                      {' :'}
                    </DetailsText>
                    <DetailsText>{item['Price:']}</DetailsText>
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
                      {'Quantity'}
                      {' :'}
                    </DetailsText>
                    <DetailsText>{item.Quantity}</DetailsText>
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
                      {'Order Id'}
                      {' :'}
                    </DetailsText>
                    <DetailsText>{item.OrderId}</DetailsText>
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
                      {'Picked By'}
                      {' :'}
                    </DetailsText>
                    <DetailsText>{item.PickBy}</DetailsText>
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
                      {'Order Placed Date'}
                      {' :'}
                    </DetailsText>
                    <DetailsText>{item.OrderPlacedDate}</DetailsText>
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
                      {'Order Picked Date'}
                      {' :'}
                    </DetailsText>
                    <DetailsText>{item.OrderPickedDate}</DetailsText>
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
                      {'Delivery Time'}
                      {':'}
                    </DetailsText>
                    <DetailsText>{item['DeliveryDate ']}</DetailsText>
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
                      {'Delivered Date'}
                      {' :'}
                    </DetailsText>
                    <DetailsText>{item.DeliveredDate}</DetailsText>
                  </Details>
                </DetailsContainer>
              ))}
            </Container>
          </MainContainer>
        )}
        {modelName === 'StatusCheck' && (
          <MainContainer>
            <Line />
            <TouchableOpacity onPress={closeOnPress}>
              <Icon
                name={'closecircle'}
                size={25}
                type={'AntDesign'}
                color={theme.darkGray}
                style={{left: 340, paddingTop: 3}}
              />
            </TouchableOpacity>
            <SubTitleText>
              {'Your Order Current Status  '}
              <SubTitle>{'#2435'}</SubTitle>
            </SubTitleText>

            <StatusContainer>
              <ScrollView>
                <StatusRowContainer>
                  <Icon
                    name={'check'}
                    size={30}
                    type={'Entypo'}
                    color={theme.newButton}
                    style={{
                      top: 5,
                      alignSelf: 'flex-start',
                      right: 40,
                    }}
                  />
                  <StatusText>{'On The Way To Pickup'}</StatusText>
                </StatusRowContainer>
                <DescriptionText>{'2023.02.03- 08.35.22 am'}</DescriptionText>

                <StatusRowContainer>
                  <Icon
                    name={'check'}
                    size={30}
                    type={'Entypo'}
                    color={theme.newButton}
                    style={{
                      top: 5,
                      alignSelf: 'flex-start',
                      right: 40,
                    }}
                  />

                  <StatusText>{'Package Is Ready'}</StatusText>
                </StatusRowContainer>
                <DescriptionText>{'2023.02.03- 08.35.22 am'}</DescriptionText>

                <StatusRowContainer>
                  <Icon
                    name={'check'}
                    size={30}
                    type={'Entypo'}
                    color={theme.newButton}
                    style={{
                      top: 5,
                      alignSelf: 'flex-start',
                      right: 40,
                    }}
                  />
                  <StatusText>{'Package Is Ready To Pick Up'}</StatusText>
                </StatusRowContainer>
                <DescriptionText>{'2023.02.03- 08.35.22 am'}</DescriptionText>

                <StatusRowContainer>
                  <Icon
                    name={'check'}
                    size={30}
                    type={'Entypo'}
                    color={theme.gray}
                    style={{
                      top: 5,
                      alignSelf: 'flex-start',
                      right: 40,
                    }}
                  />
                  <StatusText>{'Order Picked'}</StatusText>
                </StatusRowContainer>
                <DescriptionText>{'2023.02.03- 08.35.22 am'}</DescriptionText>
                <DescriptionText>
                  {'Picked By: sunil , TP- 0766028355'}
                </DescriptionText>

                <StatusRowContainer>
                  <Icon
                    name={'check'}
                    size={30}
                    type={'Entypo'}
                    color={theme.gray}
                    style={{
                      top: 5,
                      alignSelf: 'flex-start',
                      right: 40,
                    }}
                  />
                  <StatusText>{'Order Delivered'}</StatusText>
                </StatusRowContainer>
                <DescriptionText>{'2023.02.03- 08.35.22 am'}</DescriptionText>

                <StatusRowContainer>
                  <Icon
                    name={'check'}
                    size={30}
                    type={'Entypo'}
                    color={theme.gray}
                    style={{
                      top: 5,
                      alignSelf: 'flex-start',
                      right: 40,
                    }}
                  />
                  <StatusText>{'Collect Money and Order Complete'}</StatusText>
                </StatusRowContainer>
                <DescriptionText>{'2023.02.03- 08.35.22 am'}</DescriptionText>

                <TouchableOpacity onPress={ViewMoreOnPress}>
                  <ViewMoreText>{'View Order Details'}</ViewMoreText>
                </TouchableOpacity>
                <ButtonContainer>
                  <Button
                    title={String.BUTTON.OKAY}
                    mode="contained"
                    onPress={() => {}}
                  />
                </ButtonContainer>
              </ScrollView>
            </StatusContainer>
          </MainContainer>
        )}

        {modelName === 'UpdateStatus' && (
          <MainContainer>
            <Line />
            <TouchableOpacity onPress={closeOnPress}>
              <Icon
                name={'closecircle'}
                size={25}
                type={'AntDesign'}
                color={theme.darkGray}
                style={{left: 340, paddingTop: 3}}
              />
            </TouchableOpacity>
            <SubTitleText>
              {'Your Order Current Status  '}
              <SubTitle>{'#2435'}</SubTitle>
            </SubTitleText>

            <StatusContainer>
              <StatusRowContainer>
                <Icon
                  name={'check'}
                  size={30}
                  type={'Entypo'}
                  color={theme.newButton}
                  style={{
                    height: 60,
                    top: 5,
                    alignSelf: 'flex-start',
                    right: 30,
                  }}
                />
                <StatusText>{'On The Way To Pickup'}</StatusText>

                <Icon
                  name={'edit'}
                  size={30}
                  type={'Entypo'}
                  color={theme.darkGray}
                  style={{height: 60, top: 5, alignSelf: 'flex-end', left: 40}}
                />
              </StatusRowContainer>
              <StatusRowContainer>
                <Icon
                  name={'check'}
                  size={30}
                  type={'Entypo'}
                  color={theme.newButton}
                  style={{
                    height: 60,
                    top: 5,
                    alignSelf: 'flex-start',
                    right: 35,
                  }}
                />

                <StatusText>{'Order Picked'}</StatusText>

                <Icon
                  name={'edit'}
                  size={30}
                  type={'Entypo'}
                  color={theme.darkGray}
                  style={{height: 60, top: 5, alignSelf: 'flex-end', left: 40}}
                />
              </StatusRowContainer>

              <StatusRowContainer>
                <Icon
                  name={'check'}
                  size={30}
                  type={'Entypo'}
                  color={theme.newButton}
                  style={{
                    height: 60,
                    top: 5,
                    alignSelf: 'flex-start',
                    right: 35,
                  }}
                />
                <StatusText>{'Order Picked'}</StatusText>

                <Icon
                  name={'edit'}
                  size={30}
                  type={'Entypo'}
                  color={theme.darkGray}
                  style={{height: 60, top: 5, alignSelf: 'flex-end', left: 40}}
                />
              </StatusRowContainer>

              <StatusRowContainer>
                <Icon
                  name={'check'}
                  size={30}
                  type={'Entypo'}
                  color={theme.gray}
                  style={{
                    height: 60,
                    top: 5,
                    alignSelf: 'flex-start',
                    right: 35,
                  }}
                />
                <StatusText>{'Order Picked'}</StatusText>

                <Icon
                  name={'edit'}
                  size={30}
                  type={'Entypo'}
                  color={theme.darkGray}
                  style={{height: 60, top: 5, alignSelf: 'flex-end', left: 40}}
                />
              </StatusRowContainer>

              <StatusRowContainer>
                <Icon
                  name={'check'}
                  size={30}
                  type={'Entypo'}
                  color={theme.gray}
                  style={{
                    height: 60,
                    top: 5,
                    alignSelf: 'flex-start',
                    right: 35,
                  }}
                />
                <StatusText>{'Order Picked'}</StatusText>

                <Icon
                  name={'edit'}
                  size={30}
                  type={'Entypo'}
                  color={theme.darkGray}
                  style={{height: 60, top: 5, alignSelf: 'flex-end', left: 40}}
                />
              </StatusRowContainer>

              <StatusRowContainer>
                <Icon
                  name={'check'}
                  size={30}
                  type={'Entypo'}
                  color={theme.gray}
                  style={{
                    height: 60,
                    top: 5,
                    alignSelf: 'flex-start',
                    right: 30,
                  }}
                />
                <StatusText>{'Order Picked'}</StatusText>

                <Icon
                  name={'edit'}
                  size={30}
                  type={'Entypo'}
                  color={theme.darkGray}
                  style={{height: 60, top: 5, alignSelf: 'flex-end', left: 40}}
                />
              </StatusRowContainer>

              <ButtonContainer>
                <Button title={'Save'} mode="contained" onPress={() => {}} />
              </ButtonContainer>
            </StatusContainer>
          </MainContainer>
        )}

        {modelName === 'EditFinanceDetails' && (
          <MainContainer>
            <Line />
            <TouchableOpacity onPress={closeOnPress}>
              <Icon
                name={'closecircle'}
                size={25}
                type={'AntDesign'}
                color={theme.darkGray}
                style={{left: 340, paddingTop: 3}}
              />
            </TouchableOpacity>
            <ScrollView>
              <DateRow>
                <StatusText>{'Edit this Finance Details For'}</StatusText>
                <DateContainer>
                  <CustomDatePicker
                    label={'For'}
                    required={true}
                    defaultValue={'2023-04-30'}
                  />
                </DateContainer>
              </DateRow>

              <TopDataContainer>
                <TopDescriptionText>{'Bought-Price'}</TopDescriptionText>
                <TopDescriptionText>{'Selling-Price'}</TopDescriptionText>
              </TopDataContainer>

              <FinanceBodyContainRow>
                <FinanceDataContainRow>
                  <FinanceItemText>{'Banana'}</FinanceItemText>
                  <CostInputContainer>
                    <CostInput />
                    <CostInput />
                  </CostInputContainer>
                </FinanceDataContainRow>

                <FinanceDataContainRow>
                  <FinanceItemText>{'Carrot'}</FinanceItemText>
                  <CostInputContainer>
                    <CostInput />
                    <CostInput />
                  </CostInputContainer>
                </FinanceDataContainRow>

                <FinanceDataContainRow>
                  <FinanceItemText>{'Apple'}</FinanceItemText>
                  <CostInputContainer>
                    <CostInput />
                    <CostInput />
                  </CostInputContainer>
                </FinanceDataContainRow>

                <FinanceDataContainRow>
                  <FinanceItemText>{'Orange'}</FinanceItemText>
                  <CostInputContainer>
                    <CostInput />
                    <CostInput />
                  </CostInputContainer>
                </FinanceDataContainRow>

                <FinanceDataContainRow>
                  <FinanceItemText>{'Profit'}</FinanceItemText>
                  <CostInputContainer>
                    <CostInput />
                    <CostInput />
                  </CostInputContainer>
                </FinanceDataContainRow>

                <FinanceDataContainRow>
                  <FinanceItemText>{'Loss'}</FinanceItemText>
                  <CostInputContainer>
                    <CostInput />
                  </CostInputContainer>
                </FinanceDataContainRow>

                <FinanceDataContainRow>
                  <FinanceItemText>{'Additional Profit'}</FinanceItemText>
                  <CostInputContainer>
                    <CostInput />
                  </CostInputContainer>
                </FinanceDataContainRow>

                <FinanceDataContainRow>
                  <FinanceItemText>{'Total'}</FinanceItemText>
                  <CostInputContainer>
                    <CostInput disabled={true} defaultValue={'225'} />
                  </CostInputContainer>
                </FinanceDataContainRow>
              </FinanceBodyContainRow>

              <ButtonContainer>
                <Button title={'Save'} mode="contained" onPress={() => {}} />
              </ButtonContainer>
            </ScrollView>
          </MainContainer>
        )}

        {modelName === 'ratingModel' && (
          <MainContainer>
            <Line />
            <TouchableOpacity onPress={closeOnPress}>
              <Icon
                name={'closecircle'}
                size={25}
                type={'AntDesign'}
                color={theme.darkGray}
                style={{left: 340, paddingTop: 3}}
              />
            </TouchableOpacity>

            <TitleText>{'Share Your Experience With Us'}</TitleText>
            <ScrollView>
              <RatingContainer>
                <StatusText>
                  {'How About The Bought Items Quality  ?'}
                </StatusText>
                <DetailContainer>
                  <Icon
                    name={'dot-circle-o'}
                    size={15}
                    type={'FontAwesome'}
                    color={theme.userColor}
                    style={{padding: 3, right: 11}}
                  />

                  <UserText>{'Carrot'}</UserText>
                </DetailContainer>
                <IconRow>
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                </IconRow>
                <SeparatorLine />
              </RatingContainer>

              <RatingContainer>
                <StatusText>
                  {'How About The Seller  ?'}
                </StatusText>
                <DetailContainer>
                  <Icon
                    name={'dot-circle-o'}
                    size={15}
                    type={'FontAwesome'}
                    color={theme.userColor}
                    style={{padding: 3, right: 11}}
                  />

                  <UserText>{'Sunil'}</UserText>
                </DetailContainer>
                <IconRow>
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                </IconRow>
                <SeparatorLine />
              </RatingContainer>

              <RatingContainer>
                <StatusText>{'How About TheDelivery  ?'}</StatusText>
                <DetailContainer>
                  <Icon
                    name={'dot-circle-o'}
                    size={15}
                    type={'FontAwesome'}
                    color={theme.userColor}
                    style={{padding: 3, right: 11}}
                  />

                  <UserText>{'Kamal- Mini Lorry'}</UserText>
                </DetailContainer>
                <IconRow>
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                  <Icon
                    name={'star'}
                    size={25}
                    type={'FontAwesome'}
                    color={theme.star}
                    style={{paddingRight: 20, paddingTop: 20}}
                  />
                </IconRow>
                <SeparatorLine />
              </RatingContainer>

              <ButtonContainer>
                <Button title={'Done'} mode="contained" onPress={doneOnPress} />
              </ButtonContainer>
            </ScrollView>
          </MainContainer>
        )}
        {modelName === 'AddCard' && (
          <MainContainer>
            <Line />
            <TouchableOpacity onPress={closeOnPress}>
              <Icon
                name={'closecircle'}
                size={25}
                type={'AntDesign'}
                color={theme.darkGray}
                style={{left: 340, paddingTop: 3}}
              />
            </TouchableOpacity>

            <StatusText>{'Add Credit/Debit Card'}</StatusText>
            <ScrollView>
              <AddCardBody>
                <AddCardInput placeholder={'Card Number'} />
                <AddCardInput placeholder={'Security Code'} />
                <AddCardInput placeholder={'Expire Date   DD/MM'} />
                <AddCardInput placeholder={'First Name'} />
                <AddCardInput placeholder={'Last Name'} />
              </AddCardBody>

              <ToggleContainer>
                <ToggleContentText>
                  {'You can remove this card at anytime '}
                </ToggleContentText>
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color={theme.primary}
                  style={{paddingLeft: 10}}
                />
              </ToggleContainer>
              <AddCardButtonContainer onPress={() => toggleModal()}>
                <Icon
                  name={'add'}
                  type={'MaterialIcons'}
                  size={getByScreenSize(theme.text.s6, theme.text.s6)}
                  color={theme.homeBackground}
                  style={{top: 1, right: 15}}
                />
                <AddCardButtonText>{'Add Card'}</AddCardButtonText>
              </AddCardButtonContainer>
            </ScrollView>
          </MainContainer>
        )}
      </Modal>
    </View>
  );
};

export default AppModal;
