import React from 'react';
import {Platform, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';
import {getByScreenSize} from '../../../utils/responsive';
import Icon from '../../atoms/Icon';

const ButtonContainer = styled(Ripple)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 10px;
`;

const NavButton = ({
  label,
  style,
  iconType,
  iconName,
  iconStyle,
  labelStyle,
  onPress,
  disabled,
}) => {
  const theme = useTheme();
  return (
    <ButtonContainer
      onPress={onPress}
      style={[style, disabled && {opacity: 0.4}]}>
      {iconName && (
        <Icon
          color={theme.homeBackground}
            style={[{ }, iconStyle]}
          type={'Ionicons'}
          name={iconName}
          size={30}
          //   color={theme.primary}
        />
      )}
      <Text
        style={[
          labelStyle,
          {
            color: theme.primary,
            marginRight: 2,
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: getByScreenSize(theme.text.s7, theme.text.s10),
          },
          {fontWeight: Platform.OS === 'ios' ? '600' : 'bold'},
        ]}>
        {label}
      </Text>
    </ButtonContainer>
  );
};

export default NavButton;

NavButton.propTypes = {
  label: PropTypes.string,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

NavButton.defaultProps = {
  label: null,
  iconName: null,
  iconType: 'AntDesign',
  style: null,
  labelStyle: null,
  iconStyle: null,
  onPress: null,
  disabled: false,
};
