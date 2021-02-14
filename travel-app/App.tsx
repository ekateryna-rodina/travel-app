import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/containers/HomeScreen";
import {
  useFonts,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";
import { connect, Provider } from "react-redux";
import store from "./src/store/rootStore";
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
setTimeout(() => console.error(store.getState()), 5000);

const App = () => {
  let [font, error] = useFonts({ JosefinSans_400Regular });
  if (!font) {
    return <Text>Loading...</Text>;
  }
  console.log(store.getState());
  return (
    <Provider store={store}>
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
};

export default App;
