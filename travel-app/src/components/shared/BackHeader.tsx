import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import StyleGuide from "../../styles/StyleGuide";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  Extrapolate,
  set,
  greaterThan,
  useCode,
  color,
} from "react-native-reanimated";
import { onScroll, useValues } from "react-native-redash/lib/module/v1";

interface IBackHeaderProps {
  scrollY: Animated.Node<number>;
}
const headerImageHeight = 75;
const HEADER_IMAGE_HEIGHT = 250;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 75,
    position: "absolute",
    zIndex: 100,
    backgroundColor: "transparent",
  },
});
const BackHeader = (props) => {
  const { scrollY } = props;
  const toggleAnimated = useRef(new Animated.Value(0)).current;
  useCode(
    () => set(toggleAnimated, greaterThan(scrollY, HEADER_IMAGE_HEIGHT - 10)),
    [toggleAnimated, scrollY]
  );
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: "white", opacity: toggleAnimated },
        ]}
      />

      <AntDesign
        style={{ marginHorizontal: 15, marginTop: 40, marginBottom: 15 }}
        name="arrowleft"
        size={24}
        color="white"
      />
      <Animated.View
        style={[StyleSheet.absoluteFillObject, { opacity: toggleAnimated }]}
      >
        <AntDesign
          style={{ marginHorizontal: 15, marginTop: 40, marginBottom: 15 }}
          name="arrowleft"
          size={24}
          color="black"
        />
      </Animated.View>
    </View>
  );
};

export default BackHeader;
