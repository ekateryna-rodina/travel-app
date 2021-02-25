import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import globalStyles from "../styles/GlobalStyles";
import StyleGuide from "../styles/StyleGuide";

interface IReviewsProps {
  reviews: string[];
}

interface IReviewProps {
  total: number;
  current: number;
  text: string;
}
const { width, height } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.light,
    borderTopEndRadius: 45,
  },
  review: {
    width: width,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  labelContainer: {
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  label: {
    color: StyleGuide.palette.dark,
    ...StyleGuide.typography.headline,
  },
  colorContainer: {
    width: 60,
    height: 36,
    backgroundColor: StyleGuide.palette.bright,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: StyleGuide.spacing / 3,
    paddingHorizontal: StyleGuide.spacing / 3,
    borderRadius: 10,
  },
});

const Review = (props: IReviewProps) => {
  const { text, current, total } = props;
  return (
    <View style={styles.container}>
      <View style={styles.review}>
        <Text style={{ ...StyleGuide.typography.subhead }}>"{text}"</Text>
      </View>
      <View style={[styles.labelContainer]}>
        <View
          style={[
            styles.colorContainer,
            StyleSheet.absoluteFillObject,
            { bottom: 250, left: 15, top: height * 0.35 - 15 },
          ]}
        >
          <Text style={[styles.label]}>
            {current} of {total}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Reviews = (props: IReviewsProps) => {
  const { reviews } = props;
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={reviews}
        keyExtractor={(image, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Review
            current={index + 1}
            total={reviews.length}
            text={item}
            key={index.toString()}
          />
        )}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={StyleGuide.size.width}
      />
    </View>
  );
};

export default Reviews;
