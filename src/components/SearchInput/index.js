/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import PropTypes from 'prop-types';
import Autocomplete from 'react-native-autocomplete-input';
import Ripple from 'react-native-material-ripple';
import TextGeneric from '../TextGeneric';
import Icon from '../Icon';
import { hdp, wdp } from '../../utils/responsive';
import { Platform } from 'react-native';

const Container = styled.View`
  margin-top: 15px;
  width: 100%;
  position: relative;
  height: ${hdp(7)}px;
`;

const SearchInput = ({
  onChangeText,
  labelKey,
  localList,
  placeholder,
  withClearIcon,
  onClearIconPress,
}
) => {
  const [value, setValue] = useState('');
  const [filterData, setFilterData] = useState([]);
  const theme = useTheme();
  const selectItem = item => {
    setValue(item.label);
    setFilterData([]);
  };

  const onChangeValue = (text) => {
    setValue(text);
    if (onChangeText) onChangeText(text);
  };
  return (
    <Container>
      {!value || value === '' && (
        <Icon
          style={{
            position: 'absolute',
            top: 13,
            left: '2%',
            elevation: 1000,
            zIndex: 1000
          }}
          name="search"
          type="FontAwesome"
          size={theme.text.s8}
          color={theme.search.placeholder}
        />
      )}
      <Autocomplete
        style={{
          backgroundColor: theme.search.inputBackground,
          borderColor: theme.search.inputBorder,
          borderWidth: 1,
          elevation: 0,
          shadowOpacity: 0,
          borderRadius: 5,
          color: theme.text.dark,
          zIndex: 1000,
          paddingHorizontal: wdp(2),
          paddingVertical: Platform.OS === 'android' ? 6 : hdp(1)
        }}
        value={value}
        inputContainerStyle={{
          borderRadius: 5,
          borderWidth: 0
        }}
        placeholderTextColor={theme.search.placeholder}
        placeholder={placeholder}
        flatListProps={{
          style: {
            zIndex: 100000,
            color: theme.text.dark,
            backgroundColor: theme.search.backgroundColor,
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12,
          },
          renderSeparator: true,
          keyExtractor: (_, idx) => idx,
        }}
        onChangeText={text => onChangeValue(text)}
      />
      {value !== '' && withClearIcon && (
        <Icon
          type="Ionicons"
          name="close-circle"
          color={theme.tab.closeIconColor}
          size={theme.text.s5}
          role="button"
          onPress={() => {
            onChangeValue('');
            if (onClearIconPress) onClearIconPress();
          }}
          style={{
            position: 'absolute',
            right: 0
          }}
        />
      )}
    </Container>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  labelKey: PropTypes.string,
  onChangeText: PropTypes.func,
  localList: PropTypes.bool,
  placeholder: PropTypes.string,
  withClearIcon: PropTypes.bool,
  onClearIconPress: PropTypes.func,
};

SearchInput.defaultProps = {
  labelKey: null,
  localList: true,
  placeholder: 'Search Building Audits',
  withClearIcon: true,
  onClearIconPress: null,
};
