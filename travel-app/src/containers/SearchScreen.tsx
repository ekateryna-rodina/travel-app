import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native";
// import { useFonts, Raleway_200ExtraLight } from "@expo-google-fonts/raleway";
import StyleGuide from "../styles/StyleGuide";

interface SearchScreenProps {
  color?: string;
}

interface SearchScreenState {}
const SearchScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return <Text>hi from search</Text>;
};

export default SearchScreen;
