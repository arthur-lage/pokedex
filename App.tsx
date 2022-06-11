import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { Home } from "./src/screens/Home";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "SF-Pro-Display-Regular": require("./src/assets/fonts/sf-pro-display-regular.ttf"),
    "SF-Pro-Display-Medium": require("./src/assets/fonts/sf-pro-display-medium.ttf"),
    "SF-Pro-Display-Bold": require("./src/assets/fonts/sf-pro-display-bold.ttf"),
  });

  if (!fontsLoaded) {
    // @ts-ignore
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Home />
    </View>
  );
}
