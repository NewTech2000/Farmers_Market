/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef, useRef, useState } from "react";
import styled, { withTheme } from "styled-components/native";
import PropTypes from "prop-types";
import { Platform, TouchableOpacity } from "react-native";
import * as RNLocalize from "react-native-localize";

import DismissKeyboard from "../DismissKeyboard";
import commaCountries from "./countries_decimal.json";
import Text from "../TextGeneric";
import Icon from "../Icon";
import Label from "../Label";
import { getByScreenSize } from "../../utils/responsive";

const Input = styled.TextInput`
  text-align: left;
  color: ${({ theme }) => theme.genericInput.textPrimary};
  font-size: ${({ theme }) => getByScreenSize(theme.text.s7, theme.text.s9)}px;
  padding-horizontal: 10px;
  padding-vertical: 5px;
  flex: 1;
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
  background-color: ${({ theme }) => theme.genericInput.colorPrimary};
  border-radius: 7px;
  border-color: ${({ theme }) => theme.genericInput.borderPrimary};
  border-width: 1px;
  min-height: ${getByScreenSize(44, 40)}px;
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
      ...props
    },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const keyboardTypeIOS = useRef(
      Platform.OS === "ios" && keyboardType === "decimal-pad"
        ? "decimal-pad-ios"
        : keyboardType
    );

    if (keyboardTypeIOS.current === "decimal-pad-ios") {
      const countryCode = RNLocalize.getCountry();
      if (commaCountries.countries.indexOf(countryCode) >= 0) {
        keyboardTypeIOS.current = "numbers-and-punctuation";
      } else {
        keyboardTypeIOS.current = "decimal-pad";
      }
    }

    const withEye = !noEye && props.secureTextEntry;

    return (
      <DismissKeyboard>
        <Container style={[style]}>
          {label && <Label label={label} style={labelStyle} />}
          <InputContainer
            style={
              disabled && {
                backgroundColor: "transparent",
                borderWidth: 0,
                borderBottomWidth: 1,
              }
            }
          >
            {type === "button" ? (
           <Text style={{fontSize:20, color:theme.genericInput.textPrimary}}  numberOfLines={1}>{props.value|| props.defaultValue}</Text>
            ) : (
              <Input
                {...props}
                placeholderTextColor={theme.genericInput.placeholderPrimary}
                selectionColor={`${theme.secondary}80`}
                ref={ref}
                editable={!disabled}
                returnKeyType={returnKeyType || "done"}
                style={[
                  inputStyle,
                  disabled && editable && { backgroundColor: "transparent" },
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
                  alignSelf: "flex-end",
                  
                }}
              />
            )}
            {withEye && (
              <Icon
                type="SimpleLineIcons"
                name="eye"
                color={
                  passwordVisible ? theme.secondary : theme.button.colorDisabled
                }
                size={theme.text.s3}
                role="button"
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={{
                  position: "absolute",
                  right: 0,
                }}
              />
            )}
          </InputContainer>
        </Container>
      </DismissKeyboard>
    );
  }
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
