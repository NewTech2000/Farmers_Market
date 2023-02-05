import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";
import PropTypes from "prop-types";
import { useTheme } from "styled-components/native";
import Icon from "../../Icon";
import { getByScreenSize } from "../../../utils/responsive";

const GenericCheckBox = ({ value, onChange, disabled,editable,onEditChange, ...props }) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(value);

  const onChangeValue = (newValue) => {
    setSelected(newValue);
    if (onChange) onChange(newValue);
  };

  return (
  <>
    <CheckBox
      value={selected}
      disabled={disabled}
      onValueChange={onChangeValue}
      tintColors={{
        true: theme.primary,
        false: theme.genericInput.borderPrimary,
      }}
      style={{
        marginTop: '2%',
        width: 20,
        height: 20,
      }}
      boxType={"square"}
      {...props}
    />
       {disabled && editable && (
              <Icon
                type="MaterialIcons"
                name="edit"
                color={theme.disableTextInput.label}
                size={getByScreenSize(theme.text.s3, theme.text.s6)}
                role="button"
                onPress={onEditChange}
                style={{
                  alignSelf: "flex-end",position:"absolute",
                  top:-10
                  
                }}
              />
            )}
    </>
  );
};

GenericCheckBox.propTypes = {
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  editable:PropTypes.bool,
  onEditChange:PropTypes.func,
};

GenericCheckBox.defaultProps = {
  value: false,
  disabled: false,
  onChange: null,
  editable:false,
  onEditChange:null,
};

export default GenericCheckBox;
