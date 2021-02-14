import React, { useState, useRef, useEffect } from "react";
import { View, Text, Dimensions, Animated, StyleSheet } from "react-native";
import globalStyles from "../styles/GlobalStyles";
import StyleGuide from "../styles/StyleGuide";
import Button from "./shared/Button";
import ExpandandableText from "./shared/ExpandableText";
import Stars from "./Stars";

interface IBasicHotelInfoProps {
  name: string;
  rating: number;
  reviews: string[];
  description: string;
}

const { height, width } = StyleGuide.size;
const startHeight = height * 0.3;
const endHeight = height * 0.7;
const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.dark,
    marginTop: -48,
    ...globalStyles.roundedTopCorner,
  },
  contentContainer: {
    flex: 1,
    position: "absolute",
    padding: StyleGuide.spacing,
  },
  titleContainer: {
    marginBottom: StyleGuide.spacing,
  },

  title: {
    fontSize: 22,
    color: StyleGuide.palette.white,
    fontWeight: "bold",
  },
  ratingRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: StyleGuide.spacing / 3,
  },
  expandableText: { height: 300 },
});

const BasicHotelInfo = (props: IBasicHotelInfoProps) => {
  const { name, rating, reviews, description } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const animatedHeight = useRef(new Animated.Value(startHeight)).current;

  const reviewButtonStyle = {
    width: 120,
    height: 30,
    backgroundColor: StyleGuide.palette.bright,
    color: StyleGuide.palette.dark,
    borderRadius: 20,
  };
  const reviewsLength = reviews.length;
  useEffect(() => {
    Animated.spring(animatedHeight, {
      friction: 100,
      toValue: isExpanded ? endHeight : startHeight,
      useNativeDriver: false,
    }).start();
  }, [isExpanded]);

  return (
    <Animated.View style={[styles.container, { height: animatedHeight }]}>
      <View style={styles.contentContainer}>
        <View style={{ height: 80 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View style={styles.ratingRowContainer}>
            <Stars rating={rating} />
            <Button
              style={reviewButtonStyle}
              handler={() => console.warn("reviews")}
            >
              {reviewsLength} reviews
            </Button>
          </View>
        </View>

        <View style={styles.expandableText}>
          <ExpandandableText
            text={description}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default BasicHotelInfo;
