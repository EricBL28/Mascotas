import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Slot } from "expo-router";
import React from "react";
import { useFonts } from 'expo-font';


export default function RootLayout() {
  const [loaded] = useFonts({
    MoreSugar: require("../assets/fonts/MoreSugar-Thin.ttf"),
    WendyOne: require("../assets/fonts/WendyOne-Regular.ttf"),
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
};