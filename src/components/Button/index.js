/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Ripple from "react-native-material-ripple";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { wdp, hdp, getByScreenSize } from "../../Utils/responsive";
import TextGeneric from "../TextGeneric";
// import Icon from "../../Icon";

const ButtonContainer = styled(Ripple)`
  padding: ${wdp(getByScreenSize(2.2, 0.8))}px;
  width: 100%;
  margin: auto;
  margin-top: ${hdp(0.5)}px;
  margin-bottom: ${hdp(0.5)}px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

const Label = styled(TextGeneric)`
  font-size: ${({ theme }) => theme.text.s8}px;
`;

const Button = ({
  label,
  type,
  round,
  style,
  onPress,
  disabled,
  light,
  iconName,
  iconType,
  iconSize,
  iconStyle,
  labelStyle,
  customIcon,
}) => {
  const theme = useTheme();
  const getColorByStyle = () => {
    switch (type) {
      case "solid":
        return theme.primary;
      case "outline":
        return "transparent";
      case "clear":
        return "transparent";
      default:
        return theme.primary;
    }
  };
  const getTextColorByStyle = () => {
    switch (type) {
      case "solid":
        return theme.text.light;
      case "outline":
        return light ? theme.text.light : theme.primary;
      case "clear":
        return theme.primary;
      default:
        return theme.primary;
    }
  };
  return (
    <ButtonContainer
      disabled={disabled}
      rippleContainerBorderRadius={4}
      style={[
        {
          opacity: disabled ? 0.4 : 1,
          backgroundColor: getColorByStyle(),
          borderRadius: round ? 50 : 4,
        },
        type === "outline" && {
          borderWidth: 1,
          borderColor: "#ccc",
        },
        style,
      ]}
      onPress={onPress}
    >
      {iconName && (
        <Icon
          name={iconName}
          type={iconType}
          size={iconSize || theme.text.s7}
          style={[
            {
              paddingHorizontal: 12,
              color: "white",
            },
            iconStyle,
          ]}
        />
      )}
      {customIcon && customIcon()}
      <Label
        style={[
          {
            color: getTextColorByStyle(),
            alignSelf: "center",
          },
          labelStyle,
        ]}
      >
        {label}
      </Label>
    </ButtonContainer>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  round: PropTypes.bool,
  light: PropTypes.bool,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  customIcon: PropTypes.func,
};

Button.defaultProps = {
  label: null,
  type: "solid",
  style: null,
  onPress: null,
  disabled: false,
  round: false,
  light: false,
  iconName: null,
  iconSize: null,
  iconStyle: null,
  iconType: null,
  labelStyle: null,
  customIcon: null,
};
