import { StyleSheet, Platform } from "react-native";
import { StatusBar } from "react-native";
import StyleGuide from "./StyleGuide";

const globalStyles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: StyleGuide.palette.white,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  roundedBottomCorner: {
    borderBottomRightRadius: 45,
  },
  roundedTopCorner: {
    borderTopRightRadius: 45,
  },

  btnSmallBorderRadius: {
    borderRadius: 15,
  },
});

export default globalStyles;
