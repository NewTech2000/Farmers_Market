import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled, {useTheme} from 'styled-components/native';

const Background = ({children}) => {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={[theme.homeBackground, theme.primary]}
      style={{flex: 1}}>
      <View style={{flex: 1}}>{children}</View>
    </LinearGradient>
  );
};

export default Background;
