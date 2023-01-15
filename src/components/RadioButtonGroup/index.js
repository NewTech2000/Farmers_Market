/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { withTheme } from "styled-components/native";
import PropTypes from "prop-types";
import { RadioButton } from "react-native-paper";
import CustomRadioButton from "../RadioButton";

/**
 Usage:
 <RadioButtonGroup list={[
            {label: 'l', value: 1},
            {label: 'l2', value: 2}
        ]} valueKey={'value'} labelKey={'label'} />
 **/

const RadioButtonGroup = ({
  list,
  valueKey,
  labelKey,
  onValueChange,
  titleStyle,
  val,
}) => {
  const [value, setValue] = React.useState(val);

  return (
    <RadioButton.Group
      onValueChange={(newValue) => {
        setValue(newValue);
        if (onValueChange) onValueChange(newValue);
      }}
      value={value}
    >
      {list.map((item, idx) => (
        <RadioButton.Item
          key={`radio_${idx}`}
          value={item[valueKey]}
          color={'#000080'}
          style={[{
            flexDirection: 'row-reverse',
            alignSelf: 'flex-start',
          }, titleStyle]}
          labelStyle={{ fontSize: 12 }}
          label={item[labelKey]}
        />
      ))}
    </RadioButton.Group>
  );
};

RadioButtonGroup.propTypes = {
  list: PropTypes.array,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  onValueChange: PropTypes.func,
  val: PropTypes.string,
};
RadioButtonGroup.defaultProps = {
  list: [],
  valueKey: null,
  labelKey: null,
  onValueChange: null,
  val: "",
};

export default withTheme(RadioButtonGroup);
