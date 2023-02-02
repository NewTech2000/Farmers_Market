import React from "react";
import { View, ActivityIndicator } from "react-native";

import styled, { useTheme } from "styled-components/native";

// const theme = useTheme();
const Loading = () => (
  
  <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
    <ActivityIndicator size="large" color={"red"} />
  </View>
);

export default Loading;
