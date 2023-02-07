import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styled, {useTheme} from 'styled-components/native';
import {getByScreenSize} from '../../../utils/responsive';

const Dropdown = ({
  label,
  required,
  items,
  value,
  onValueChange,
  info,
  placeholder,
  selectedVal,
  disabled,
}) => {
  const theme = useTheme();
  const pickerRef = useRef();
  const [pickerFocused, setPickerFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    if (!selectedValue && items[0]) {
      setSelectedValue(items[0].value);
      onValueChange(items[0].value);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
        {required && <Text style={styles.requiredText}>*</Text>}
        {info && (
          <TouchableOpacity onPress={info}>
            <Icon name="information" size={20} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedVal ? selectedVal.toString() : selectedValue}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
            onValueChange(itemValue);
          }}>
          {items?.map(item => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
              color={theme.darkGray}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 1,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 16,
  },
  requiredText: {
    color: 'red',
    fontSize: 16,
    marginHorizontal: 5,
  },
  pickerContainer: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  picker: {
    width: '100%',
  },
});

export default Dropdown;
