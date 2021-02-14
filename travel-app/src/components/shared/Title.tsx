import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StyleGuide from "../../styles/StyleGuide";

interface ItitleProps {
  text: string;
  style: [];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: StyleGuide.spacing / 3,
  },
});

export const Title = () => {
  return <View style={styles.container}></View>;
};
