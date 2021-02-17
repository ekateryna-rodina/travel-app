import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import StyleGuide from "../styles/StyleGuide";

const { height } = StyleGuide.size;
const iconColor = StyleGuide.palette.white;
const iconSize = 28;
const styles = StyleSheet.create({
  footer: { flex: 1 },
  container: {
    backgroundColor: StyleGuide.palette.dark,
    height: height * 0.09,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: StyleGuide.spacing,
    paddingBottom: StyleGuide.spacing / 2,
  },
});

const Menu = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <Entypo name="magnifying-glass" size={iconSize} color={iconColor} />
        <AntDesign name="hearto" size={iconSize} color={iconColor} />
        <MaterialCommunityIcons
          name="map-marker-check-outline"
          size={iconSize}
          color={iconColor}
        />
        <AntDesign name="message1" size={iconSize} color={iconColor} />
        <Ionicons
          name="person-circle-outline"
          size={iconSize}
          color={iconColor}
        />
      </View>
    </View>
  );
};

export default Menu;
