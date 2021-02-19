import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import StyleGuide from "../../styles/StyleGuide";

interface ICountPickerProps {
  actionIncrease: () => void; // TODO: update to typeof
  actionDecrease: () => void;
  count: number;
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: StyleGuide.palette.dark,
    borderWidth: 0.2,
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 20,
  },
});
const CountPicker = (props: ICountPickerProps) => {
  const { actionIncrease, actionDecrease, count } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={actionDecrease}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={[{ marginEnd: 20 }, StyleGuide.typography.headline]}>
        {count}
      </Text>
      <TouchableOpacity
        style={[styles.button, { marginEnd: 0 }]}
        onPress={actionIncrease}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountPicker;
