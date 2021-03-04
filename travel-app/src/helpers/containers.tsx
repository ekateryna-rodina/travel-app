import {
  Feather,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import StyleGuide from "../styles/StyleGuide";
const commonProps = {
  color: StyleGuide.palette.light,
  size: 20,
};

export const getIcon = (type) => {
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
    case "gift":
      return <Feather name="gift" size={20} color={StyleGuide.palette.dark} />;
    case "slippers":
      return (
        <Fontisto
          name="beach-slipper"
          size={20}
          color={StyleGuide.palette.dark}
        />
      );
    case "tv":
      return (
        <MaterialIcons
          name="connected-tv"
          size={20}
          color={StyleGuide.palette.dark}
        />
      );
    case "sanitizer":
      return (
        <MaterialIcons
          name="sanitizer"
          size={20}
          color={StyleGuide.palette.dark}
        />
      );
  }
};
