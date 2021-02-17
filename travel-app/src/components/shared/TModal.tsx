import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  AppState,
  Easing,
} from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import StyleGuide from "../../styles/StyleGuide";
import { useSelector, useDispatch } from "react-redux";
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
const TModal = () => {
  const [selected, setSelected] = useState(null);
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
      <ScrollView>
        {new Array(15).fill("hey").map((item, index) => {
          return (
            <TouchableHighlight
              onPress={() => console.warn("add")}
              underlayColor={"rgba(255, 255, 255, 0.3)"}
            >
              <View
                key={index.toString()}
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginHorizontal: StyleGuide.spacing,
                  marginVertical: StyleGuide.spacing,
                }}
              >
                <Image
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                  source={require("../../../assets/cities/amalfi.jpg")}
                />
                <Text style={{ marginHorizontal: StyleGuide.spacing }}>
                  Amalfi Coast
                </Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default TModal;
