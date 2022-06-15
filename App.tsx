import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { Home } from "./src/screens/Home";

import * as Font from "expo-font";

import React, { useCallback, useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "SF-Pro-Display-Regular": require("./src/assets/fonts/sf-pro-display-regular.ttf"),
          "SF-Pro-Display-Medium": require("./src/assets/fonts/sf-pro-display-medium.ttf"),
          "SF-Pro-Display-Bold": require("./src/assets/fonts/sf-pro-display-bold.ttf"),
        });
      } catch (err: any) {
        console.warn(err);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      onLayout={onLayoutRootView}
    >
      <StatusBar style="dark" backgroundColor="transparent" translucent />

      <Home />
    </View>
  );
}
