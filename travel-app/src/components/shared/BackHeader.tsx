import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import StyleGuide from "../../styles/StyleGuide";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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
const height = Platform.OS === "android" ? 50 : 75;
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
  const navigation = useNavigation();
  const toggleAnimated = useRef(new Animated.Value(0)).current;
  const offset = Platform.OS === "android" ? 40 : 10;
  useCode(
    () =>
      set(toggleAnimated, greaterThan(scrollY, HEADER_IMAGE_HEIGHT - offset)),
    [toggleAnimated, scrollY]
  );
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: StyleGuide.palette.white,
            opacity: toggleAnimated,
          },
        ]}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          style={{
            marginHorizontal: 15,
            marginTop: Platform.OS === "android" ? 30 : 40,
            marginBottom: 15,
          }}
          name="arrowleft"
          size={24}
          color="white"
        />
      </TouchableOpacity>
      <Animated.View
        style={[StyleSheet.absoluteFillObject, { opacity: toggleAnimated }]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            style={{
              marginHorizontal: 15,
              marginTop: Platform.OS === "android" ? 30 : 40,
              marginBottom: 15,
            }}
            name="arrowleft"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default BackHeader;
