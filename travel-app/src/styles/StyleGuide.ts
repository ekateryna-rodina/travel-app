import { Dimensions } from "react-native";
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
  },
  typography: {
    body: {
      fontSize: 17,
      lineHeight: 20,
      fontFamily: "Raleway_200ExtraLight",
    },
    callout: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: "Raleway_200ExtraLightlar",
    },
    caption: {
      fontSize: 11,
      lineHeight: 13,
      fontFamily: "Raleway_200ExtraLightlar",
    },
    footnote: {
      fontSize: 13,
      lineHeight: 18,
      fontFamily: "Raleway_200ExtraLightlar",
      color: "#999999",
    },
    headline: {
      fontSize: 17,
      lineHeight: 22,
      fontFamily: "Raleway_200ExtraLightbold",
    },
    subhead: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: "Raleway_200ExtraLight",
    },
    title1: {
      fontSize: 34,
      lineHeight: 41,
      fontFamily: "Raleway_200ExtraLight",
    },
    title2: {
      fontSize: 28,
      lineHeight: 34,
      fontFamily: "Raleway_200ExtraLight",
    },
    title3: {
      fontSize: 22,
      lineHeight: 26,
      fontFamily: "Raleway_200ExtraLight",
    },
  },
};

export default StyleGuide;
