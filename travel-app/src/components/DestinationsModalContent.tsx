import React from "react";
import {
  View,
  ScrollView,
  TouchableHighlight,
  Image,
  Text,
  Animated,
  Easing,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import { ICity, IDestination } from "../store/search/models/Hotel";
import StyleGuide from "../styles/StyleGuide";
import { AppState } from "../store/rootStore";

interface IDestinationsModalContentProps {
  destinations: IDestination[];
}

const styles = StyleSheet.create({
  name: {
    ...StyleGuide.typography.subhead,
    marginHorizontal: StyleGuide.spacing,
    padding: 3,
  },
});
const DestinationsModalContent = (props: IDestinationsModalContentProps) => {
  const state = useSelector((state: AppState) => state.modal);
  const { isOpened } = state;
  const animated = React.useRef(new Animated.Value(400)).current;
  const { destinations } = props;
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
    <Animated.ScrollView
      style={{ transform: [{ translateX: animated }] }}
      showsVerticalScrollIndicator={false}
    >
      {destinations.map((item, index) => {
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
                // padding: 5,
              }}
            >
              {item.isCountry && (
                <Image
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                  source={item.image}
                />
              )}
              <Text
                style={[
                  styles.name,
                  {
                    fontSize: item.isCountry ? 22 : 16,
                    marginStart: !item.isCountry
                      ? 50 + StyleGuide.spacing
                      : StyleGuide.spacing,
                    opacity: !item.isCountry ? 0.5 : 1,
                  },
                ]}
              >
                {item.name}
              </Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </Animated.ScrollView>
  );
};

export default DestinationsModalContent;
