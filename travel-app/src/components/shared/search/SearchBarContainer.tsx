import React from "react";
import { StyleSheet, View } from "react-native";
import globalStyles from "../../../styles/GlobalStyles";
import StyleGuide from "../../../styles/StyleGuide";
import ProgressBar from "../ProgressBar";
import SearchBar from "./SearchBar";
import { SearchSettings } from "./SearchSettings";

const { height, width } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    height: height * 0.2,
    width: "100%",
    backgroundColor: StyleGuide.palette.white,
    zIndex: 1,
    paddingTop: 65,
    paddingEnd: 25,
    paddingStart: 15,
    paddingBottom: 25,
    ...globalStyles.roundedBottomCorner,
  },
});

const SearchBarContainer = () => {
  return (
    <View>
      <View style={styles.container}>
        <SearchBar />
        <SearchSettings />
      </View>
      <ProgressBar />
    </View>
  );
};
export default SearchBarContainer;
