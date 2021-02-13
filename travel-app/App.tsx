import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/containers/HomeScreen";
import * as Font from "expo-font";
import {
  useFonts,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";
import StyleGuide from "./src/styles/StyleGuide";
import AppLoading from "expo";
import { Provider } from "react-redux";
import { travelStore } from "./src/store/rootStore";
const Stack = createStackNavigator();

const fetchFonts = () => {
  // return Font.loadAsync({
  //   thin: Raleway_200ExtraLight,
  // }).then((res) => console.warn(res));
};
// useState(() => {

// }, [])
export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  // const fonts = fetchFonts();
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  let [font, error] = useFonts({ JosefinSans_400Regular });
  console.warn(font);
  // setFontsLoaded(font);
  if (!font) {
    return <Text>Loading...</Text>;
  }

  return (
    <Provider store={travelStore}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
