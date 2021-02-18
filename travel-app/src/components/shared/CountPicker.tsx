import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import StyleGuide from "../../styles/StyleGuide";

interface ICountPickerProps {
  actionIncrease: Function; // TODO: update to typeof
  actionDecrease: Function;
  count: {
    adult: number;
    children: number;
    infant: number;
  };
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: StyleGuide.palette.dark,
    borderWidth: 1,
  },
});
const CountPicker = (props: ICountPickerProps) => {
  const {
    actionIncrease,
    actionDecrease,
    count: { adult, children, infant },
  } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>5</Text>
      <TouchableOpacity style={styles.button}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountPicker;
