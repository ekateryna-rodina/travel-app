import React, { PropsWithChildren } from "react";
import { Text, View, StyleSheet } from "react-native";
import StyleGuide from "../../styles/StyleGuide";

interface ITitleProps {
  style?: {};
  type: TitleTypes.primary | TitleTypes.secondary;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: StyleGuide.spacing / 3,
    marginVertical: StyleGuide.spacing * 2,
  },
});

/* Map title type on style */
const styleByType = {
  [TitleTypes.primary]: StyleGuide.typography.title1,
  [TitleTypes.secondary]: StyleGuide.typography.title2,
};
export const Title = (props: PropsWithChildren<ITitleProps>) => {
  const { style, type, children } = props;
  return (
    <View style={styles.container}>
      <Text style={styleByType[type]}>{children}</Text>
    </View>
  );
};
