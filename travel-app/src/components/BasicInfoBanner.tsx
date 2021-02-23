import React, { useState, useRef, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import globalStyles from "../styles/GlobalStyles";
import StyleGuide from "../styles/StyleGuide";
import Button from "./shared/Button";
import ExpandandableText from "./shared/ExpandableText";
import Stars from "./Stars";
import Animated, {
  Extrapolate,
  greaterThan,
  interpolate,
  useCode,
  set,
} from "react-native-reanimated";
import { onScroll, useValues } from "react-native-redash/lib/module/v1";

const { height, width } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    // height: (Dimensions.get("window").height * 30) / 100,
    backgroundColor: StyleGuide.palette.dark,
    marginTop: -48,
    ...globalStyles.roundedTopCorner,
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    padding: 15,
  },
  titleContainer: {
    marginBottom: 10,
  },

  title: {
    ...StyleGuide.typography.body,
    fontSize: 22,
    color: StyleGuide.palette.white,
    fontWeight: "bold",
  },
  ratingRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
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
  const { name, rating, reviews, description, scrollY } = props;
  const [isExpanded_, setIsExpanded_] = useState(false);
  const startHeight = (Dimensions.get("window").height * 30) / 100;
  const endHeight = (Dimensions.get("window").height * 70) / 100;
  const animatedHeight = useRef(new Animated.Value(startHeight)).current;
  const HEADER_IMAGE_HEIGHT = 250;
  const backHeaderHeight = 75;
  const translateY = interpolate(scrollY, {
    inputRange: [0, HEADER_IMAGE_HEIGHT],
    outputRange: [0, -backHeaderHeight],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateX = interpolate(scrollY, {
    inputRange: [0, HEADER_IMAGE_HEIGHT],
    outputRange: [0, 20],
  });
  //   useEffect(() => {
  //     Animated.spring(animatedHeight, {
  //       friction: 100,
  //       toValue: isExpanded_ ? endHeight : startHeight,
  //       useNativeDriver: false,
  //     }).start();
  //     // console.warn(scrollY);
  //   }, [isExpanded_]);

  return (
    <Animated.View style={[styles.container, { height: animatedHeight }]}>
      <View style={styles.contentContainer}>
        <View style={{ height: 80 }}>
          <Animated.View
            style={[
              styles.titleContainer,
              //   { transform: [{ translateY }, { translateX }] },
            ]}
          >
            <Text style={styles.title}>{name}</Text>
          </Animated.View>
          <View style={styles.ratingRowContainer}>
            <Stars rating={rating} />
            <Button
              style={styles.button}
              handler={() => console.warn("open review")}
            >
              {reviews.length} reviews{" "}
            </Button>
          </View>
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
