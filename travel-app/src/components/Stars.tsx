import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import StyleGuide from "../styles/StyleGuide";

interface IStarProps {
  rating: number;
  fullThreshold: number;
  halfThreshold: number;
  size?: number;
}

interface IStarsProps {
  rating: number;
  size?: number;
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: StyleGuide.spacing / 3,
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const _getStarStyleName = (
  full: number,
  half: number,
  rating: number
): string => {
  return rating >= 1 ? "star" : rating >= 0.5 ? "star-half-o" : "star-o";
};

const Star = (props: IStarProps) => {
  const { rating, fullThreshold, halfThreshold, size } = props;
  const starSize = size || 24;

  const style =
    rating >= fullThreshold
      ? "star"
      : rating >= halfThreshold
      ? "star-half-o"
      : "star-o";

  return (
    <FontAwesome
      name={style}
      size={starSize}
      color={StyleGuide.palette.bright}
    />
  );
};

const Stars = (props: IStarsProps) => {
  const { rating, size } = props;

  return (
    <View style={styles.starsContainer}>
      <Star rating={rating} fullThreshold={1} halfThreshold={0.5} size={size} />
      <Star rating={rating} fullThreshold={2} halfThreshold={1.5} size={size} />
      <Star rating={rating} fullThreshold={3} halfThreshold={2.5} size={size} />
      <Star rating={rating} fullThreshold={4} halfThreshold={3.5} size={size} />
      <Star rating={rating} fullThreshold={5} halfThreshold={4.5} size={size} />
    </View>
  );
};

export default Stars;
