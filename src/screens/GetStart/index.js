import React from 'react';
import {Text, View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {getByScreenSize, hdp, wdp} from '../../Utils/responsive';

const BackgroundContainer = styled.View`
  background: ${({theme}) => theme.primary};
  width: ${wdp(100)}px;
  height: ${hdp(100)}px;
`;
console.log('GetStart 123');
const GetStart = () => {
  const theme = useTheme();

  return (
    <View>
      <Text style={{backgroundColor: theme.primary}}>GetStart</Text>
    </View>
  );
};

export default GetStart;
