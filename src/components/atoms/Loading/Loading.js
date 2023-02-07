import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

import styled, { useTheme } from "styled-components/native";

// const theme = useTheme();
const Loading = () => (
  
  <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
    <ActivityIndicator size="large" color={'#009933'} />
    <Text style={{alignSelf:"center"}}>Loading ....</Text>
  </View>
);

export default Loading;
