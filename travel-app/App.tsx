import {
  JosefinSans_100Thin,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold,
  JosefinSans_700Bold_Italic,
  useFonts,
} from "@expo-google-fonts/josefin-sans";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Provider } from "react-redux";
import HomeScreen from "./src/containers/HomeScreen";
import HotelScreen from "./src/containers/HotelScreen";
import RoomScreen from "./src/containers/RoomScreen";
import SearchResultsScreen from "./src/containers/SearchResultsScreen";
import store from "./src/store/rootStore";
const Stack = createSharedElementStackNavigator();
// const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  let [font, error] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });
  if (!font) {
    return <Text>Loading...</Text>;
  }
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SeachResults" component={SearchResultsScreen} />
            <Stack.Screen name="Hotel" component={HotelScreen} />
            <Stack.Screen name="Room" component={RoomScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;

// import {
//   JosefinSans_100Thin,
//   JosefinSans_100Thin_Italic,
//   JosefinSans_200ExtraLight,
//   JosefinSans_200ExtraLight_Italic,
//   JosefinSans_300Light,
//   JosefinSans_300Light_Italic,
//   JosefinSans_400Regular,
//   JosefinSans_400Regular_Italic,
//   JosefinSans_500Medium,
//   JosefinSans_500Medium_Italic,
//   JosefinSans_600SemiBold,
//   JosefinSans_600SemiBold_Italic,
//   JosefinSans_700Bold,
//   JosefinSans_700Bold_Italic,
//   useFonts,
// } from "@expo-google-fonts/josefin-sans";
// import { NavigationContainer } from "@react-navigation/native";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { createSharedElementStackNavigator } from "react-navigation-shared-element";
// import { Provider } from "react-redux";
// import HomeScreen from "./src/containers/HomeScreen";
// import HotelScreen from "./src/containers/HotelScreen";
// import RoomScreen from "./src/containers/RoomScreen";
// import SearchResultsScreen from "./src/containers/SearchResultsScreen";
// import store from "./src/store/rootStore";
// const Stack = createSharedElementStackNavigator();

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// const App = () => {
//   let [font, error] = useFonts({
//     JosefinSans_400Regular,
//     JosefinSans_100Thin,
//     JosefinSans_200ExtraLight,
//     JosefinSans_300Light,
//     JosefinSans_500Medium,
//     JosefinSans_600SemiBold,
//     JosefinSans_700Bold,
//     JosefinSans_100Thin_Italic,
//     JosefinSans_200ExtraLight_Italic,
//     JosefinSans_300Light_Italic,
//     JosefinSans_400Regular_Italic,
//     JosefinSans_500Medium_Italic,
//     JosefinSans_600SemiBold_Italic,
//     JosefinSans_700Bold_Italic,
//   });
//   if (!font) {
//     return <Text>Loading...</Text>;
//   }
//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         <NavigationContainer>
//           <Stack.Navigator
//             screenOptions={{ headerShown: false }}
//             initialRouteName="Home"
//           >
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="SeachResults" component={SearchResultsScreen} />
//             <Stack.Screen name="Hotel" component={HotelScreen} />
//             <Stack.Screen name="Room" component={RoomScreen} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </View>
//     </Provider>
//   );
// };

// export default App;
