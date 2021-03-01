import React from "react";
import { View, StyleSheet, Text, Animated, Easing } from "react-native";
import { useSelector } from "react-redux";
import { SearchModalSettingsTypes } from "../helpers/enums";
import { AppState } from "../store/rootStore";
import globalStyles from "../styles/GlobalStyles";
import StyleGuide from "../styles/StyleGuide";
import Button from "./shared/Button";
import CountPicker from "./shared/CountPicker";
import GuestsRow from "./shared/GuestsRow";
import ModalFooter from "./shared/ModalFooter";

const { height } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    height: height - height * 0.2 + 7,
  },
});

const ageCategoriesPropsData = [
  {
    headline: "Adults",
    caption: "Ages 13 or above",
    count: 0,
    actionIncrease: () => console.warn("adults increase"),
    actionDecrease: () => console.warn("adults decrease"),
  },
  {
    headline: "Children",
    caption: "Ages 2 - 12",
    count: 0,
    actionIncrease: () => console.warn("children increase"),
    actionDecrease: () => console.warn("children decrease"),
  },
  {
    headline: "Infants",
    caption: "Under 2",
    count: 0,
    actionIncrease: () => console.warn("infants increase"),
    actionDecrease: () => console.warn("infants decrease"),
  },
];
const guestsCountHandler = () => {};

const GuestsModalContent = () => {
  const animated = new Animated.Value(400);
  const state = useSelector((state: AppState) => state.modal);
  const { isOpened, selectedIndex } = state;
  React.useEffect(() => {
    if (selectedIndex === SearchModalSettingsTypes.guests) {
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
          marginHorizontal: StyleGuide.spacing,
          marginVertical: StyleGuide.spacing * 2,
        }}
      >
        {ageCategoriesPropsData.map((item, index) => {
          return (
            <GuestsRow
              key={index.toString()}
              headline={item.headline}
              caption={item.caption}
              count={item.count}
              actionDecrease={item.actionDecrease}
              actionIncrease={item.actionIncrease}
            />
          );
        })}
      </View>
      <ModalFooter handler={guestsCountHandler} />
    </Animated.View>
  );
};

export default GuestsModalContent;
