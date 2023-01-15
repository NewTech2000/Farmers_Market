import React, { useState } from "react";
import styled, { useTheme } from "styled-components/native";
import PropTypes from "prop-types";
import Label from "../Label";
import TextGeneric from "../TextGeneric";
import { getByScreenSize } from "../../utils/responsive";
import { formatDate, formatDateTime, formatTime } from "../../utils/date";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import Icon from "../Icon";

const Container = styled.View`
  width: 100%;
`;

const ValueContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.genericInput.colorPrimary};
  border-radius: 7px;
  border-color: ${({ theme }) => theme.genericInput.borderPrimary};
  border-width: 1px;
  padding-vertical: 8px;
  min-height: ${getByScreenSize(44, 40)}px;
  padding-horizontal: 3%;
  margin-top: 1%;
`;
const Value = styled(TextGeneric)`
  font-size: ${({ theme }) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
`;
const CustomDatePicker = ({
  label,
  required,
  onChange,
  style,
  defaultValue,
  mode,
}) => {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const onDateChange = (selectedDate) => {
    setShow(false);
    if (selectedDate) {
      let currentValue = "";
      if (mode === "date") {
        currentValue = formatDate(selectedDate);
      } else if (mode === "time") {
        currentValue = formatTime(selectedDate);
      } else {
        currentValue = formatDateTime(selectedDate);
      }
      if (currentValue) setValue(currentValue);
      if (onChange) onChange(currentValue);
    }
  };
  const getDate = () => {
    return value ? new Date(value) : new Date();
  };
  return (
    <Container style={style}>
      <TouchableOpacity onPress={() => setShow(true)}>
        {label && <Label label={label} required={required} />}
        <ValueContainer>
          <Value>{value} </Value>
          <Icon
            name={mode === "date" ? "calendar" : "clock-time-three-outline"}
            type={mode === "date" ? "FontAwesome" : "MaterialCommunityIcons"}
            color={theme.text.dark}
            size={theme.text.s6}
          />
        </ValueContainer>
      </TouchableOpacity>
      {show && (
        <DatePicker
          modal
          mode={mode}
          open={show}
          date={value ? new Date(value) : new Date()}
          maximumDate={value ? new Date(value) : new Date()}
          onConfirm={onDateChange}
          onCancel={() => {
            setShow(false);
          }}
        />
      )}
    </Container>
  );
};

CustomDatePicker.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  mode: PropTypes.string,
  defaultValue: PropTypes.string,
};

CustomDatePicker.defaultProps = {
  label: null,
  required: false,
  onChange: null,
  mode: "date",
  defaultValue: "",
};

export default CustomDatePicker;
