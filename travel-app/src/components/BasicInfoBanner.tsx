import React, { useEffect, useRef, useState } from "react";
import { Easing, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SharedElement } from "react-navigation-shared-element";
import globalStyles from "../styles/GlobalStyles";
import StyleGuide from "../styles/StyleGuide";
import Button from "./shared/Button";
import ExpandandableText from "./shared/ExpandableText";
import Stars from "./Stars";

const { height, width } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.dark,
    marginTop: -48,
    ...globalStyles.roundedTopCorner,
    // flex: 6,
    height: 700,
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    padding: 15,
  },
  titleContainer: {},

  title: {
    ...StyleGuide.typography.title3,
    color: StyleGuide.palette.white,
    paddingVertical: StyleGuide.spacing / 3,
  },
  ratingRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: StyleGuide.spacing,
  },
  descriptionContainer: {},
  button: {
    width: 120,
    height: 30,
    backgroundColor: StyleGuide.palette.bright,
    padding: 3,
    borderRadius: 20,
  },
});

const BasicInfoBanner = (props) => {
  const {
    key,
    name,
    rating,
    reviews,
    description,
    reviewsShown,
    setReviewsShown,
  } = props;
  const [isExpanded_, setIsExpanded_] = useState<0 | 1>(0);
  const [reviewButtonText, setReviewText] = useState<string>("");
  const startHeight = 275;
  const endHeight = 490;
  const animatedHeight = useRef(new Animated.Value(startHeight)).current;
  const HEADER_IMAGE_HEIGHT = 250;
  const backHeaderHeight = 75;
  const toggleExpandable = (expand) => {
    if (expand) {
      Animated.timing(animatedHeight, {
        duration: 500,
        toValue: endHeight,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        duration: 500,
        toValue: startHeight,
        easing: Easing.linear,
      }).start();
    }
  };

  useEffect(() => {
    toggleExpandable(isExpanded_);
    // change reviews button text
    if (reviewsShown) {
      setReviewText("Hide reviews");
    } else {
      setReviewText(`Show ${reviews.length} reviews`);
    }
  }, [isExpanded_, reviewsShown]);
  return (
    <Animated.View style={[styles.container, { height: animatedHeight }]}>
      <View style={styles.contentContainer}>
        <SharedElement id={`hotel.${key}.name`}>
          <Text style={styles.title}>{name}</Text>
        </SharedElement>

        <View style={styles.ratingRowContainer}>
          <Stars rating={rating} />
          <Button
            style={styles.button}
            handler={() => setReviewsShown(!reviewsShown)}
          >
            {reviewButtonText}
          </Button>
        </View>
        <View style={{ height: 300 }}>
          <ExpandandableText
            text={description}
            isExpanded={isExpanded_}
            setIsExpanded={setIsExpanded_}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default BasicInfoBanner;
