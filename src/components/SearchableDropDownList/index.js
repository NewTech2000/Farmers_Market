import React, {memo, useCallback, useRef, useState, useEffect} from 'react';
import {Button, Dimensions, Text, View, Platform, LogBox} from 'react-native';

import styled, {useTheme} from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';
import PropTypes from 'prop-types';
import {getByScreenSize} from '../../utils/responsive';
import Icon from '../Icon';

import Ripple from 'react-native-material-ripple';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';

const Container = styled(Platform.OS === 'ios' ? View : Ripple)`
  flex-direction: column;
  margin: 0;
  width: 100%;
`;

const PickerContainer = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.genericInput.colorPrimary};
  border-radius: 7px;
  border-color: ${({theme}) => theme.genericInput.borderPrimary};
  border-width: 1px;
  margin-top: 1%;
`;

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
const Picker = ({
  label,
  required,
  list,
  titleKey,
  valueKey,
  value,
  onValueChange,
  disabled,
  placeholder,
  onSelectItem,

  ...props
}) => {
  const theme = useTheme();
  const pickerRef = useRef();
  const [selected, setSelected] = useState(value);
  const [pickerFocused, setPickerFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownController = useRef(null);
  const searchRef = useRef(null);

  const getSuggestions = useCallback(async q => {
    const filterToken = q.toLowerCase();
    setLoading(true);
    const items = list;
    const suggestions = items.filter(item =>
      item.toLowerCase().includes(filterToken),
    );
    setSelected(
      list.map(item => ({
        title: item,
      })),
    );
    setLoading(false);
  }, []);

  const onClearPress = async () => {
    setSelected(
      list.map(item => ({
        title: item,
      })),
    );
  };

  const onOpenSuggestionsList = useCallback(isOpened =>  setSelected(
    list.map(item => ({
      title: item,
    })),
  ), []);

  useEffect(() => {
    setSelected(
      list.map(item => ({
        title: item,
      })),
    );

    if (placeholder !== null) {
      setSelected(placeholder.value);
      onValueChange(placeholder.value);
    }
  }, [pickerFocused, pickerRef]);

  return (
    <View
      style={[
        {flex: 1, flexDirection: 'row', alignItems: 'center'},
        Platform.select({ios: {zIndex: 9}}),
      ]}>
      <AutocompleteDropdown
        ref={searchRef} //
        listMode="SCROLLVIEW"
        direction={'up'}
        nestedScrollEnabled={true}
        disabled={disabled}
        onSelectItem={items => {
          setSelected(items?.title);
            const itemIndex = list?.findIndex(item => item === items?.title);
            if (onSelectItem) onSelectItem(items?.title, itemIndex);
        }}
        onClear={onClearPress}
        debounce={600}
        onFocus={onOpenSuggestionsList}
        position={"absolute"}
        controller={controller => {
          dropdownController.current = controller;
        }}
        onChangeText={getSuggestions}
        onOpenSuggestionsList={onOpenSuggestionsList}
        loading={loading}
        dataSet={selected}
        scrollEnabled={true}
        textInputProps={{
          placeholder: value === null ? '--None--' : value,
          placeholderTextColor: '#383b42',
          autoCorrect: false,
          autoCapitalize: 'none',
          fontSize: 18,
          style: {
            borderRadius: 7,
            borderColor: theme.genericInput.borderPrimary,
            borderWidth: 1,
            color: '#383b42',
            paddingLeft: 18,
            width: '100%',
          },
        }}
        listStyle={{maxHeight: 350}}
        rightButtonsContainerStyle={{
          right: 8,
          height: 30,
          position: 'absolute',
          alignSelf: 'center',
        }}
        inputContainerStyle={{
          backgroundColor: '#fff',
        }}
        suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
        ItemSeparatorComponent={
          <View
            style={{height: 1, width: '100%', backgroundColor: '#d8e1e6'}}
          />
        }
        getItemLayout={(data, index) => ({
          length: 50,
          offset: 50 * index,
          index,
        })}
      />
      {/* </PickerContainer> */}
      {/* </Container> */}
    </View>
  );
};

Picker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.object,
  required: PropTypes.bool,
  list: PropTypes.array.isRequired,
  titleKey: PropTypes.string,
  valueKey: PropTypes.string,
  onSelectItem: PropTypes.func,
  disabled: PropTypes.bool,
};

Picker.defaultProps = {
  label: null,
  value: null,
  placeholder: null,
  required: false,
  titleKey: null,
  valueKey: null,
  onSelectItem: null,
  disabled: false,
};

export default Picker;
