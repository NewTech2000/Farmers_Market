/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;

DismissKeyboard.propTypes = {
  children: PropTypes.any.isRequired,
};
