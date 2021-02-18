import React from "react";
import { View, StyleSheet, Text, Animated, Easing } from "react-native";
import { useSelector } from "react-redux";
import { SearchModalSettingsTypes } from "../helpers/enums";
import { AppState } from "../store/rootStore";
import StyleGuide from "../styles/StyleGuide";
import CountPicker from "./shared/CountPicker";

const styles = StyleSheet.create({
  container: {
    margin: StyleGuide.spacing,
    // right: 400,
  },
});

const GuestsModalContent = (props) => {
  const animated = new Animated.Value(400);
  const state = useSelector((state: AppState) => state.modal);
  const { isOpened, selectedIndex } = state;
  //   const { mount, unmount } = props;
  React.useEffect(() => {
    // if (mount) {
    if (selectedIndex === SearchModalSettingsTypes.guests) {
      //   console.warn(mount);
      //   console.warn("iamhere");
      //   animated.setValue(400);
      Animated.timing(animated, {
        toValue: 0,
        duration: 200,
        delay: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      //   console.warn("iamhere");
      animated.setValue(0);
      Animated.timing(animated, {
        toValue: -400,
        duration: 1000,
        delay: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [selectedIndex]);
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: animated }] }]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text>Adults</Text>
          <Text>Ages 13 and above</Text>
        </View>
        <View>
          <CountPicker
            actionIncrease={() => console.warn("increase")}
            actionDecrease={() => console.warn("decrease")}
            count={{ adult: 5, children: 0, infant: 1 }}
          />
        </View>
      </View>
      {/* <View></View>
      <View></View> */}
    </Animated.View>
  );
};

export default GuestsModalContent;
