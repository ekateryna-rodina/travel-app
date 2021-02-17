import React from "react";
import { View, Dimensions, Image, Text, StyleSheet } from "react-native";
import StyleGuide from "../../../styles/StyleGuide";

interface IShowcaseItem {
  image: number;
  total: number;
  current: number;
  labelPosition: {};
}

const { width } = StyleGuide.size;
const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: StyleGuide.palette.white,
  },
  grayContainer: {
    width: 60,
    height: 36,
    backgroundColor: StyleGuide.palette.dark,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: StyleGuide.spacing / 3,
    paddingHorizontal: StyleGuide.spacing / 3,
    borderRadius: 10,
  },
});

const ShowcaseItem = (props: IShowcaseItem) => {
  const { image, total, current, labelPosition } = props;
  return (
    <View style={{ flex: 1, width: width }}>
      <Image source={image} />
      <View style={[styles.labelContainer, labelPosition]}>
        <View style={styles.grayContainer}>
          <Text style={styles.label}>
            {current + 1} of {total}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ShowcaseItem;
