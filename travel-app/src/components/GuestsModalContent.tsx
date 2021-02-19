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

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // margin: StyleGuide.spacing,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    width: "100%",
    backgroundColor: StyleGuide.palette.light,
    padding: StyleGuide.spacing,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    width: 80,
    height: 40,
    borderRadius: 10,
    backgroundColor: StyleGuide.palette.dark,
    color: StyleGuide.palette.white,
    textTransform: "uppercase",
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
      <View style={styles.footer}>
        <Button style={styles.button} handler={guestsCountHandler}>
          Select
        </Button>
      </View>
    </Animated.View>
  );
};

export default GuestsModalContent;
