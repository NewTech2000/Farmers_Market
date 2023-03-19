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
  top: 10px;
  width: 180px;
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
}) => {
  const theme = useTheme();

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
      </Modal>
    </View>
  );
};

export default AppModal;
