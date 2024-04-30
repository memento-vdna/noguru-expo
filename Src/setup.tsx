import React, { useCallback } from 'react';
import { View, LogBox } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import RootNavigation from "./Navigation/AppNavigation";

LogBox.ignoreAllLogs()

export default function Root() {
  const [isLoaded] = useFonts({
    "SF-Pro-Bold": require("../assets/Fonts/SF-Pro-Display-Bold.ttf"),
    "SF-Pro-Light": require("../assets/Fonts/SF-Pro-Display-Light.ttf"),
    "SF-Pro-Medium": require("../assets/Fonts/SF-Pro-Display-Medium.ttf"),
    "SF-Pro-Regular": require("../assets/Fonts/SF-Pro-Display-Regular.ttf"),
    "SF-Pro-Semibold": require("../assets/Fonts/SF-Pro-Display-Semibold.ttf"),
    "SF-Pro-Thin": require("../assets/Fonts/SF-Pro-Display-Thin.ttf"),
    "SF-Pro-Black": require("../assets/Fonts/SF-Pro-Display-Black.ttf"),
    "Poppins-Regular": require("../assets/Fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/Fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/Fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/Fonts/Poppins-Bold.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }


  return (
    <View style={{ flex: 1 }}>
      <RootNavigation />
    </View>
  );
}
