import React, { useState, useEffect, PropsWithChildren } from "react";
import { StyleSheet, Animated, Easing } from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import StyleGuide from "../../styles/StyleGuide";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/rootStore";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: StyleGuide.palette.white,
    zIndex: 100,
    height: "80%",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    ...globalStyles.roundedTopCorner,
  },
});
const { height } = StyleGuide.size;

const modalPosition = 0;
const TModal = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  const state = useSelector((state: AppState) => state.modal);
  const { isOpened } = state;
  const translateY = React.useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (isOpened) {
      Animated.timing(translateY, {
        toValue: modalPosition,
        useNativeDriver: true,
        duration: 500,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: height,
        useNativeDriver: true,
        duration: 500,
        easing: Easing.linear,
      }).start();
    }
  }, [isOpened]);
  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      {children}
    </Animated.View>
  );
};

export default TModal;
