import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { AppState } from "../../store/rootStore";
import StyleGuide from "../../styles/StyleGuide";

const { width, height } = StyleGuide.size;
const ProgressBar = () => {
  const translateXTop = useRef(new Animated.Value(0)).current;
  const translateXBottom = useRef(new Animated.Value(0)).current;
  const state = useSelector((state: AppState) => state.search);
  const { loading } = state;

  const progressAnimation = () => {
    function cycleAnimation() {
      translateXTop.setValue(-width);
      translateXBottom.setValue(-width);
      const animation = Animated.sequence([
        Animated.timing(translateXTop, {
          toValue: 0,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(translateXBottom, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start((event) => {
        if (event.finished && loading) {
          cycleAnimation();
        }
      });

      return animation;
    }

    cycleAnimation();
  };

  useEffect(() => {
    progressAnimation();
  }, [loading]);
  return (
    <Animated.View
      style={[
        {
          borderBottomRightRadius: 45,
          position: "absolute",
          left: 1,
          top: 1,
          width: "100%",
          height: "100%",
          backgroundColor: loading ? StyleGuide.palette.dark : "transparent",
          transform: [{ translateX: translateXTop }],
        },
      ]}
    >
      <Animated.View
        style={[
          StyleSheet.absoluteFill,

          {
            left: 1,
            top: 1,
            borderBottomRightRadius: 45,
            backgroundColor: loading
              ? StyleGuide.palette.primary
              : "transparent",
            transform: [{ translateX: translateXBottom }],
          },
        ]}
      ></Animated.View>
    </Animated.View>
  );
};

export default ProgressBar;
