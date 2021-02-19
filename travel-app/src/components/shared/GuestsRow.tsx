import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import StyleGuide from "../../styles/StyleGuide";
import CountPicker from "./CountPicker";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: StyleGuide.spacing,
  },
});
interface IGuestsRowProps {
  headline: string;
  caption: string;
  actionIncrease: () => void;
  actionDecrease: () => void;
  count: number;
}
const GuestsRow = (props: IGuestsRowProps) => {
  const { headline, caption, actionIncrease, actionDecrease, count } = props;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column" }}>
        <Text style={StyleGuide.typography.headline}>{headline}</Text>
        <Text style={StyleGuide.typography.caption}>{caption}</Text>
      </View>
      <View>
        <CountPicker
          actionIncrease={actionIncrease}
          actionDecrease={actionDecrease}
          count={count}
        />
      </View>
    </View>
  );
};

export default GuestsRow;
