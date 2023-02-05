import React from 'react';
import {StyleSheet, Text} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

function ErrorText({children}) {
  
  return <Text style={styles.error}>{children}</Text>;
}

const styles = StyleSheet.create({
    
  error: {
    color: '#FF0000',
    fontSize: 13,
    marginBottom: 5,
  },
});

export default ErrorText;