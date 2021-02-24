import React, { useState, useRef, useEffect } from "react";
import { View, Text, Easing, StyleSheet } from "react-native";
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
    ...StyleGuide.typography.body,
    fontSize: 22,
    color: StyleGuide.palette.white,
    fontWeight: "bold",
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
  const { name, rating, reviews, description, scrollY } = props;
  const [isExpanded_, setIsExpanded_] = useState<0 | 1>(0);
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
    console.warn(isExpanded_);
    toggleExpandable(isExpanded_);
    // Animated.timing(animatedHeight, {
    //   friction: 100,
    //   toValue: isExpanded_ ? endHeight : startHeight,
    //   useNativeDriver: false,
    // }).start();
  }, [isExpanded_]);
  // const translateY = new Animated.Value(startHeight);
  // const handleShowLessMore = () => {
  //   let _toValue = translateY.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [1, 0],
  //   });
  //   Animated.timing(translateY, {
  //     toValue: _toValue,
  //     duration: 100,
  //   }).start();
  // };

  // useEffect(() => {
  //   console.error(isExpanded_);
  // }, [isExpanded_]);
  // const translateY = interpolate(scrollY, {
  //   inputRange: [0, HEADER_IMAGE_HEIGHT],
  //   outputRange: [0, -backHeaderHeight],
  //   extrapolate: Extrapolate.CLAMP,
  // });
  // const translateX = interpolate(scrollY, {
  //   inputRange: [0, HEADER_IMAGE_HEIGHT],
  //   outputRange: [0, 20],
  // });

  return (
    <Animated.View style={[styles.container, { height: animatedHeight }]}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>

        <View style={styles.ratingRowContainer}>
          <Stars rating={rating} />
          <Button
            style={styles.button}
            handler={() => console.warn("open review")}
          >
            {reviews.length} reviews{" "}
          </Button>
        </View>

        {/* <View style={{ height: 300, marginVertical: 15 }}> */}
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
