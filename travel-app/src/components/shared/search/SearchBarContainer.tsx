import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../../../styles/GlobalStyles";
import StyleGuide from "../../../styles/StyleGuide";
import SearchBar from "./SearchBar";
import { SearchSettings } from "./SearchSettings";

const { height, width } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    height: height * 0.2,
    width: "100%",
    backgroundColor: StyleGuide.palette.white,
    paddingTop: 65,
    paddingEnd: 25,
    paddingStart: 15,
    paddingBottom: 25,
    ...globalStyles.roundedBottomCorner,
  },
});

const SearchBarContainer = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <SearchSettings />
    </View>
  );
};
export default SearchBarContainer;
