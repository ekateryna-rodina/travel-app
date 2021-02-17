import React from "react";
import {
  View,
  ScrollView,
  TouchableHighlight,
  Image,
  Text,
  Animated,
  Easing,
} from "react-native";
import { useSelector } from "react-redux";
import { IDestination } from "../store/search/models/Hotel";
import StyleGuide from "../styles/StyleGuide";
import { AppState } from "../store/rootStore";

interface IDestinationsModalContentProps {
  destinations?: IDestination[];
}
const DestinationsModalContent = (props: IDestinationsModalContentProps) => {
  const state = useSelector((state: AppState) => state.modal);
  const { isOpened } = state;
  const animated = React.useRef(new Animated.Value(400)).current;
  React.useEffect(() => {
    if (isOpened) {
      animated.setValue(400);
      Animated.timing(animated, {
        toValue: 0,
        duration: 200,
        delay: 450,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpened]);
  return (
    <Animated.ScrollView style={{ transform: [{ translateX: animated }] }}>
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
                source={require("../../assets/cities/amalfi.jpg")}
              />
              <Text style={{ marginHorizontal: StyleGuide.spacing }}>
                Amalfi Coast
              </Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </Animated.ScrollView>
  );
};

export default DestinationsModalContent;
