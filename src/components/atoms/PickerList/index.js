import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import Label from "../Label";
import RNPickerSelect from 'react-native-picker-select';
import PropTypes from "prop-types";
import { getByScreenSize } from "../../../utils/responsive";
import Icon from "../../Icon";
import { View, Platform } from "react-native";
import Ripple from "react-native-material-ripple";

const Container = styled(Platform.OS === 'ios' ? View : Ripple)`
  flex-direction: column;
  margin: 0;
  width: 100%;
`;

const PickerContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.genericInput.colorPrimary};
  border-radius: 7px;
  border-color: ${({ theme }) => theme.genericInput.borderPrimary};
  border-width: 1px;
  margin-top: 1%;
`;

const PickerList = ({
  label,
  required,
  list,
  titleKey,
  valueKey,
  value,
  onValueChange,
  disabled,
  placeholder,
  ...props
}) => {
  const theme = useTheme();
  const pickerRef = useRef();
  const [selected, setSelected] = useState(value);
  const [pickerFocused, setPickerFocused] = useState(false);

  useEffect(() => {
  if (placeholder!==null) {
    setSelected(placeholder.value)
    onValueChange(placeholder.value)
  }
  }, [pickerFocused,pickerRef]);

  return (
    <Container onPress={() => Platform.OS === 'android' && !disabled && pickerRef.current.focus()}>
      {label && <Label label={label} required={required} />}
      <PickerContainer>
        <RNPickerSelect
          value={selected}
          disabled={disabled}
          style={{
            inputAndroid: {
              fontSize: getByScreenSize(theme.text.s8, theme.text.s9)
            },
            inputIOS: {
              fontSize: getByScreenSize(theme.text.s8, theme.text.s9)
            },
            inputIOSContainer: {
              height: getByScreenSize(44, 40), justifyContent: 'center', paddingHorizontal: '3%',
            },
            inputAndroidContainer: {
              height: getByScreenSize(44, 40), justifyContent: 'center', paddingHorizontal: '3%',
            },
            iconContainer: {
              right: '3%',
            },
          }}
          onDonePress={() => {
            const itemIndex = list.findIndex((item) => item === selected);
            if (onValueChange) onValueChange(selected, itemIndex);
          }
          }
          modalProps={
            { onRequestClose: () => console.log('close') }
          }
          onValueChange={(itemValue) => setSelected(itemValue)}
          pickerProps={{
            mode: 'dropdown',
            ref: pickerRef,
            onValueChange: (itemValue,) => {
              setSelected(itemValue);
              if (Platform.OS === 'android') {
                const itemIndex = list.findIndex((item) => item === itemValue);
                if (onValueChange) onValueChange(itemValue, itemIndex);
              }
            },
            style: Platform.OS === 'android' && { height: getByScreenSize(44, 40), bottom: 5 }
          }}
          onClose={() => {
            setPickerFocused(false); const itemIndex = list.findIndex((item) => item === selected);
            if (onValueChange) onValueChange(selected, itemIndex);
          }}
          Icon={() => Platform.OS === 'ios' && <Icon name={'chevron-down'} type={'Entypo'} size={theme.text.s6} color={theme.text.dark} />}
          placeholder={!pickerFocused ? { label: "--None--", value: null, disabled: true } : {}}
          items={list.map(item => { return { label: titleKey ? item[titleKey] : item, value: valueKey ? item[valueKey] : item } })}
        />
      </PickerContainer>
    </Container>
  );
};

PickerList.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder:PropTypes.object,
  required: PropTypes.bool,
  list: PropTypes.array.isRequired,
  titleKey: PropTypes.string,
  valueKey: PropTypes.string,
  onValueChange: PropTypes.func,
  disabled: PropTypes.bool,
};

PickerList.defaultProps = {
  label: null,
  value: null,
  placeholder:null,
  required: false,
  titleKey: null,
  valueKey: null,
  onValueChange: null,
  disabled: false,
};

export default PickerList;
