import { Dimensions, StyleSheet } from "react-native";
const StyleGuide = {
  spacing: 15,
  size: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  palette: {
    light: "#f5f5f5",
    dark: "#2d3e52",
    white: "#ffffff",
    bright: "#fdb714",
    primary: "#9e802e",
    brighter: "#17b7f2",
    secondary: "#6983a2",
    success: "#94c54d",
    danger: "#bf332a",
    highlight: "#dfa51f",
    black: "#2b2d2f",
    light2: "#f0f2f5",
    darkTransparent: "rgba(45, 62, 82, 0.5)",
    primaryTransparent: "rgba(158, 128, 46, 0.5)",
  },
  typography: {
    body: {
      fontSize: 17,
      lineHeight: 20,
      fontFamily: "JosefinSans_400Regular",
    },
    bodyBold: {
      fontSize: 17,
      lineHeight: 20,
      fontFamily: "JosefinSans_600SemiBold",
    },

    callout: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: "JosefinSans_400Regular",
    },
    calloutBold: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: "JosefinSans_700Bold",
    },
    caption: {
      fontSize: 11,
      lineHeight: 13,
      fontFamily: "JosefinSans_400Regular",
    },
    footnote: {
      fontSize: 13,
      lineHeight: 18,
      fontFamily: "JosefinSans_400Regular",
    },
    footnoteBold: {
      fontSize: 13,
      lineHeight: 18,
      fontFamily: "JosefinSans_600SemiBold",
    },
    headline: {
      fontSize: 17,
      lineHeight: 22,
      fontFamily: "JosefinSans_400Regular",
    },
    subhead: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: "JosefinSans_400Regular",
    },
    title1: {
      fontSize: 34,
      lineHeight: 41,
      fontFamily: "JosefinSans_400Regular",
    },
    title2: {
      fontSize: 28,
      lineHeight: 34,
      fontFamily: "JosefinSans_400Regular",
    },
    title3: {
      fontSize: 22,
      lineHeight: 26,
      fontFamily: "JosefinSans_400Regular",
    },
  },
};

export default StyleGuide;
