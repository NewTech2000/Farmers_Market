import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import styled, {useTheme} from 'styled-components/native';
import {connect} from 'react-redux';
import Icon from '../../atoms/Icon';
import TextGeneric from '../../atoms/TextGeneric';
import {getByScreenSize, wdp} from '../../../utils/responsive';

const MainContainer = styled.View`
  flex-direction: column;
  background-color: white;
  height: 40%;
  top: 10px;
  border-radius: 10px;
`;

const Container = styled.View``;

const Line = styled.View`
  align-self:center;
  width:80%
  height:5%;
  border-radius:10px
  background-color: ${({theme}) => theme.gray};
  flex-direction: row;
  top:20px;
`;

const TitleText = styled(TextGeneric)`
  text-align: center;
  color: ${({theme}) => theme.title.titleColor};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s7)}px;
  top: 10px;
`;

const EditText = styled(TextGeneric)`
  text-align: center;
  color: ${({theme}) => theme.edit};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s7)}px;
  top: 10px;
`;

const DeleteText = styled(TextGeneric)`
  text-align: center;
  color: ${({theme}) => theme.errorText};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s7)}px;
  top: 10px;
`;

const InnerContainer = styled.View`
  padding-top: 30px;
`;

const ItemContainer = styled.TouchableOpacity`
  padding-top: 30px;
  padding-bottom: 10px;
`;

const DescriptionText = styled(TextGeneric)`
  color: ${({theme}) => theme.darkGray};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  text-align: center;
  top: 20px;
`;

const BottomButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
`;

const AddCardButtonContainer = styled.TouchableOpacity`
  height: 45px;
  width: ${wdp(40)}px;
  border-radius: 50px;
  border-color: ${({theme}) => theme.darkGray};
  background-color: ${({theme}) => theme.errorText};
  align-item: center;
  padding: 12px;
  justify-content: center;
  flex-direction: row;
  margin-left: 10px;
`;

const AddCardButtonText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  top: 2px;
  color: ${({theme}) => theme.homeBackground};
`;

const ButtonContainer = styled.TouchableOpacity`
  border-width: 3px;
  background-color: ${({theme}) => theme.homeBackground};
  border-radius: 50px;
  padding: 10px;
  width: ${wdp(40)}px;
  height: 45px;
  border-color: ${({theme}) => theme.userColor};
  align-item: center;
  padding: 10px;
  justify-content: center;
  flex-direction: row;
  margin-right: 10px;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.userColor};
  font-weight: bold;
  text-align: center;
`;

const UpdateButton = styled.TouchableOpacity`
  height: 45px;
  width: ${wdp(40)}px;
  border-radius: 50px;
  border-color: ${({theme}) => theme.darkGray};
  background-color: ${({theme}) => theme.primary};
  align-item: center;
  padding: 12px;
  justify-content: center;
  flex-direction: row;
  margin-left: 10px;
`;

export const ModelAlerts = ({
  alert,
  toggleModal,
  isModalVisible,
  onBackdropPress,
  closeOnPress,
  OnEditPress,
  onDeletePress,
  title,
}) => {
  const theme = useTheme();

  return (
    <View>
      {/* {alert === 'mainAlert' && ( */}
      <Modal
        testID={'bottom-half-modal-open-button'}
        animationType={'fade'}
        isVisible={isModalVisible}
        animationOut={'slideOutDown'}
        animationIn={'slideInUp'}
        onBackButtonPress={onBackdropPress}>
        {alert == 'mainAlert' && (
          <MainContainer>
            <Container>
              <TouchableOpacity onPress={closeOnPress}>
                <Icon
                  name={'closecircle'}
                  size={25}
                  type={'AntDesign'}
                  color={theme.darkGray}
                  style={{left: 340, paddingTop: 3}}
                />
              </TouchableOpacity>
              <TitleText>{'What Do you Want To do ?'}</TitleText>
              <InnerContainer>
                <ItemContainer onPress={OnEditPress}>
                  <EditText>{'Edit'}</EditText>
                </ItemContainer>
                <Line />
                <ItemContainer onPress={onDeletePress}>
                  <DeleteText>{'Delete'}</DeleteText>
                </ItemContainer>
              </InnerContainer>
            </Container>
          </MainContainer>
        )}

        {alert == 'delete' && (
          <MainContainer>
            <Container>
              <TouchableOpacity onPress={closeOnPress}>
                <Icon
                  name={'closecircle'}
                  size={25}
                  type={'AntDesign'}
                  color={theme.darkGray}
                  style={{left: 340, paddingTop: 3}}
                />
              </TouchableOpacity>
              <TitleText>{'Are You Sure ?'}</TitleText>
              <DescriptionText>
                {'You Want To Delete This Item'}
              </DescriptionText>
              <InnerContainer>
                <View style={{height: 100, zIndex: 10, top: 30}}>
                  <Line />
                </View>
                <BottomButtonContainer>
                  <AddCardButtonContainer onPress={() => {}}>
                    <Icon
                      name={'delete-outline'}
                      type={'MaterialIcons'}
                      size={getByScreenSize(theme.text.s6, theme.text.s6)}
                      color={theme.homeBackground}
                      style={{top: 1, right: 15}}
                    />
                    <AddCardButtonText>{'Remove'}</AddCardButtonText>
                  </AddCardButtonContainer>

                  <ButtonContainer>
                    <Icon
                      name={'cancel-presentation'}
                      type={'MaterialIcons'}
                      size={getByScreenSize(theme.text.s6, theme.text.s6)}
                      color={theme.userColor}
                      style={{top: -1, right: 15}}
                    />
                    <ButtonText>{'Cancel'}</ButtonText>
                  </ButtonContainer>
                </BottomButtonContainer>
              </InnerContainer>
            </Container>
          </MainContainer>
        )}

        {alert == 'update' && (
          <MainContainer>
            <Container>
              <TouchableOpacity onPress={closeOnPress}>
                <Icon
                  name={'closecircle'}
                  size={25}
                  type={'AntDesign'}
                  color={theme.darkGray}
                  style={{left: 340, paddingTop: 3}}
                />
              </TouchableOpacity>
              <TitleText>{'Are You Sure ?'}</TitleText>
              <DescriptionText>
                {'You Want To Update This Item'}
              </DescriptionText>
              <InnerContainer>
                <View style={{height: 100, zIndex: 10, top: 30}}>
                  <Line />
                </View>
                <BottomButtonContainer>
                  <UpdateButton onPress={() => {}}>
                    <Icon
                      name={'refresh'}
                      type={'FontAwesome'}
                      size={getByScreenSize(theme.text.s6, theme.text.s6)}
                      color={theme.homeBackground}
                      style={{top: 1, right: 15}}
                    />
                    <AddCardButtonText>{'Update'}</AddCardButtonText>
                  </UpdateButton>

                  <ButtonContainer>
                    <Icon
                      name={'cancel-presentation'}
                      type={'MaterialIcons'}
                      size={getByScreenSize(theme.text.s6, theme.text.s6)}
                      color={theme.userColor}
                      style={{top: -1, right: 15}}
                    />
                    <ButtonText>{'Cancel'}</ButtonText>
                  </ButtonContainer>
                </BottomButtonContainer>
              </InnerContainer>
            </Container>
          </MainContainer>
        )}

        {alert == 'offline' && (
          <MainContainer>
            <Container>
              <TouchableOpacity onPress={closeOnPress}>
                <Icon
                  name={'closecircle'}
                  size={25}
                  type={'AntDesign'}
                  color={theme.darkGray}
                  style={{left: 340, paddingTop: 3}}
                />
              </TouchableOpacity>
              <TitleText>{'You Are Offline ?'}</TitleText>
              <DescriptionText>
                {'Check yoyr Internet Connection'}
              </DescriptionText>
              <InnerContainer>
                <View style={{height: 100, zIndex: 10, top: 30}}>
                  <Line />
                </View>
                <BottomButtonContainer>
                  <ButtonContainer style={{width: 350, marginLeft: 15}}>
                    <Icon
                      name={'refresh'}
                      type={'FontAwesome'}
                      size={getByScreenSize(theme.text.s6, theme.text.s6)}
                      color={theme.userColor}
                      style={{top: -1, right: 15, height: 100}}
                    />
                    <ButtonText>{'Try Again'}</ButtonText>
                  </ButtonContainer>
                </BottomButtonContainer>
              </InnerContainer>
            </Container>
          </MainContainer>
        )}
      </Modal>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModelAlerts);
