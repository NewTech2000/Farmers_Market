/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, {forwardRef, useRef, useState} from 'react';
import styled, {withTheme} from 'styled-components/native';
import PropTypes from 'prop-types';
import {Platform, TouchableOpacity} from 'react-native';
import * as RNLocalize from 'react-native-localize';

import DismissKeyboard from '../DismissKeyboard';
import Text from '../TextGeneric';
import Icon from '../Icon';
import Label from '../Label';
import {getByScreenSize} from '../../../utils/responsive';
import Ripple from 'react-native-material-ripple';

const Input = styled.TextInput`
  text-align: left;
  color: ${({theme}) => theme.genericInput.textPrimary};
  font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s9)}px;

  padding-vertical: 5px;
  flex: 1;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  shadow-color: #000;
  shadow-opacity: 0.8;
  elevation: 5;
`;

const Button = styled(TouchableOpacity)`
  padding-horizontal: 10px;
  padding-vertical: 10px;
  width: 100%;
`;

const Container = styled.View`
  margin-top: 5px;
  width: 100%;
`;

const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.genericInput.colorPrimary};
  border-radius: 7px;
  border-color: ${({theme}) => theme.genericInput.borderPrimary};
  border-width: 0.5px;
  min-height: ${getByScreenSize(44, 40)}px;
`;

const ContainerView = styled.View`
  width: 100%;
`;
const LabelView = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;
const LabelText = styled(Text)`
  color: ${({theme}) => theme.disableTextInput.label};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s10)}px;
  margin-right: 8px;
`;
const ValueView = styled.View``;

const Separator = styled.View`
  padding-top: 20px;
`;
const Range = styled.View`
  align-items: center;
  justify-content: center;
`;

const RedText = styled(Text)`
  color: ${({theme}) => theme.errorText};
`;

const GenericInput = forwardRef(
  (
    {
      theme,
      style,
      labelStyle,
      inputStyle,
      label,
      children,
      keyboardType,
      returnKeyType,
      noEye,
      required,
      type,
      onPress,
      onEditChange,
      disabled,
      editable,
      row,
      name,
      showInfo,
      ...props
    },
    ref,
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const keyboardTypeIOS = useRef(
      Platform.OS === 'ios' && keyboardType === 'decimal-pad'
        ? 'decimal-pad-ios'
        : keyboardType,
    );

    const withEye = !noEye && props.secureTextEntry;

    const getContent = () => {
      return (
        <DismissKeyboard>
          <Container style={[style]}>
            <InputContainer
              style={
                disabled && {
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                  borderBottomWidth: 1,
                }
              }>
              {type === 'button' ? (
                <Text
                  style={{fontSize: 20, color: theme.genericInput.textPrimary}}
                  numberOfLines={1}>
                  {props.value || props.defaultValue}
                </Text>
              ) : (
                <Input
                  {...props}
                  placeholderTextColor={theme.genericInput.placeholderPrimary}
                  selectionColor={`${theme.secondary}80`}
                  ref={ref}
                  editable={!disabled}
                  returnKeyType={returnKeyType || 'done'}
                  style={[
                    inputStyle,
                    disabled && editable && {backgroundColor: 'transparent'},
                  ]}
                  keyboardType={keyboardTypeIOS.current}
                  secureTextEntry={withEye && !passwordVisible}
                />
              )}
              {children}
              {disabled && editable && (
                <Icon
                  type="MaterialIcons"
                  name="edit"
                  color={theme.disableTextInput.label}
                  size={getByScreenSize(theme.text.s3, theme.text.s6)}
                  role="button"
                  onPress={onEditChange}
                  style={{
                    alignSelf: 'flex-end',
                  }}
                />
              )}
              {withEye && (
                <Icon
                  type="Feather"
                  name={!passwordVisible ? 'eye-off' : 'eye'}
                  color={passwordVisible ? theme.gray : theme.button.darkGray}
                  size={theme.text.s6}
                  role="button"
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  style={{
                    position: 'absolute',
                    right: 0,
                  }}
                />
              )}
            </InputContainer>
          </Container>
        </DismissKeyboard>
      );
    };
    return (
      <ContainerView
        style={[style, row && {width: `${getByScreenSize(100, 46)}%`}]}>
        <LabelView>
          <LabelText style={labelStyle}>
            {type == 'image' ? title : label}
            {!!required && <RedText>*</RedText>}
          </LabelText>
          {!!showInfo && (
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
          )}
        </LabelView>
        <ValueView>{getContent()}</ValueView>
        {/* <Separator /> */}
      </ContainerView>
    );
  },
);

export default withTheme(GenericInput);

GenericInput.propTypes = {
  theme: PropTypes.object.isRequired,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  returnKeyType: PropTypes.string,
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  keyboardType: PropTypes.string,
  noEye: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onEditChange: PropTypes.func,
  editable: PropTypes.bool,
};
GenericInput.defaultProps = {
  label: null,
  children: null,
  style: null,
  labelStyle: null,
  returnKeyType: null,
  inputStyle: null,
  keyboardType: null,
  noEye: false,
  secureTextEntry: false,
  required: false,
  disabled: false,
  onEditChange: null,
  editable: false,
};
