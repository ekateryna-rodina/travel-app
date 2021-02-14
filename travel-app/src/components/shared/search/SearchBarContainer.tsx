import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../../../styles/GlobalStyles";
import StyleGuide from "../../../styles/StyleGuide";
// import SearchBar from "../SearchBar";
// import SearchSettings from "../SearchSettings";

/*Declarations*/
const { height, width } = StyleGuide.size;

/*Styles*/
const styles = StyleSheet.create({
  container: {
    height: height * 0.2,
    backgroundColor: StyleGuide.palette.white,
    top: 0,
    left: 0,
    right: 0,
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
      <Text style={{ fontFamily: "JosefinSans_400Regular" }}>test</Text>
      {/* <SearchBar />
      <SearchSettings /> */}
    </View>
  );
};
export default SearchBarContainer;
