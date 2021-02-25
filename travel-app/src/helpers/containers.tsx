import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import StyleGuide from "../styles/StyleGuide";
import globalStyles from "../styles/GlobalStyles";
const commonProps = {
  color: StyleGuide.palette.light,
  size: 20,
};

export const getIcon = (type) => {
  console.warn(type);
  switch (type) {
    case "restaurant":
      return (
        <Ionicons
          name="restaurant"
          size={20}
          color={StyleGuide.palette.light}
        />
      );
    case "swimming-pool":
      return (
        <FontAwesome5
          name="swimming-pool"
          size={20}
          color={StyleGuide.palette.light}
        />
      );
    case "fitness-center":
      return (
        <MaterialIcons
          name="fitness-center"
          size={20}
          color={StyleGuide.palette.light}
        />
      );
    case "reception":
      return (
        <Fontisto name="persons" size={22} color={StyleGuide.palette.light} />
      );
    case "sports-tennis":
      return (
        <MaterialIcons
          name="sports-tennis"
          size={20}
          color={StyleGuide.palette.light}
        />
      );
  }
};
