/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import styled, { useTheme } from 'styled-components/native';
import PropTypes from 'prop-types';
import Icon from '../../../components/Icon';
import { hdp, wdp } from '../../../utils/responsive';
import Ripple from 'react-native-material-ripple';
import { hideInfoPopUp } from './actions';
import { Modal, TouchableWithoutFeedback } from 'react-native';

const Container = styled.View`
  justify-content:center;
  align-items:center;
  flex:1;
  opacity: 1;
  background-color:${({ theme }) => theme.infoPopUp.containerBackground};
`;
const PopUpView = styled.View`
  border-radius: 10px;
  width: 90%;
  height:25%;
  background-color:${({ theme }) => theme.infoPopUp.background};
  elevation: 5;

`;
const TitleView = styled.View`
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:100%;
  flex:1;
  background-color:${({ theme }) => theme.infoPopUp.background};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const IconView = styled.View`
  background-color:${({ theme }) => theme.infoPopUp.iconBackground}
  width: ${wdp(5)}px;
  height: ${wdp(5)}px;
  border-radius:${wdp(5) / 2}px;
  justify-content:center;
  align-items:center;

`;
const CloseButton = styled(Ripple)`
  right: 2%;
  padding: 18px;
  position: absolute;
`;
const TitleText = styled.Text`
  color: ${({ theme }) => theme.infoPopUp.text};
  font-size: ${({ theme }) => theme.text.s8}px;
  text-align: center;
  font-weight: bold;
  padding-horizontal:1%;
`;
const SeperatorView = styled.View`
  width:100%;
  height:1px;
  border-bottom-width:2px;
  border-color:${({ theme }) => theme.infoPopUp.separator}; 
`;
const DescriptionView = styled.View`
  flex-direction:row;
  justify-content:center;
  align-items:center;
  align-self:center;
  width:96%;
  flex:1;
  background-color:${({ theme }) => theme.infoPopUp.background};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-wrap: wrap;
`;
const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.infoPopUp.text};
  font-size: ${({ theme }) => theme.text.s8}px;
  text-align: center;
`;
const Overlay = styled.View`
   width: ${wdp(100)}px;
   height: ${hdp(100)}px;
   position: absolute;
   left: 0;
   top: 0;
`;

const InfoPopUp = ({
  infoPopUp,
  ...props
}) => {
  const theme = useTheme();

  const closeBtn = () => {
    onPressClose && onPressClose();
    props.hideInfoPopUp();
  }
  const {
    title,
    description,
    isVisible,
    onPressClose
  } = infoPopUp;
  return (
    <Modal visible={isVisible} transparent animationType={'fade'}>
      <Container>
        <TouchableWithoutFeedback onPress={() => closeBtn()}>
          <Overlay />
        </TouchableWithoutFeedback>
        <PopUpView>
          <TitleView>
            <IconView>
              <Icon type={'FontAwesome'} name={'info'} color={theme.infoPopUp.infoIcon}
                size={theme.text.s10} />
            </IconView>
            <TitleText>{title}</TitleText>
            <CloseButton onPress={() => closeBtn()}>
              <Icon type={'AntDesign'} name={'close'} color={theme.infoPopUp.closeIcon}
                size={theme.text.s7} />
            </CloseButton>
          </TitleView>
          <SeperatorView />
          <DescriptionView>
            <DescriptionText style={description.length>200?{fontSize:14}:{}}>{description}</DescriptionText>
          </DescriptionView>
        </PopUpView>
      </Container>
    </Modal>);
};

const mapStateToProps = state => ({
  infoPopUp: state.infoPopUp
});

export default connect(mapStateToProps, { hideInfoPopUp })(InfoPopUp);

InfoPopUp.propTypes = {
  infoPopUp: PropTypes.object.isRequired,
};
