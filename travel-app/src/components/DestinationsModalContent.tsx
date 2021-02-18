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
import { SearchModalSettingsTypes } from "../helpers/enums";

interface IDestinationsModalContentProps {
  destinations: IDestination[];
  mount?: boolean;
  unmount?: boolean;
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
  const [oldState, setOldState] = React.useState();
  const { isOpened, selectedIndex } = state;
  const animated = new Animated.Value(400);
  const { destinations, mount, unmount } = props;
  React.useEffect(() => {
    // if (mount) {
    if (selectedIndex === SearchModalSettingsTypes.destination) {
      animated.setValue(400);
      Animated.timing(animated, {
        toValue: 0,
        duration: 200,
        delay: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      animated.setValue(0);
      Animated.timing(animated, {
        toValue: -400,
        duration: 400,
        delay: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [selectedIndex, mount, unmount]);
  return (
    <Animated.ScrollView
      style={{ position: "absolute", transform: [{ translateX: animated }] }}
      showsVerticalScrollIndicator={false}
    >
      {destinations.map((item, index) => {
        return (
          <TouchableHighlight
            key={index.toString()}
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
