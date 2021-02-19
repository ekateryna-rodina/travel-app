import React from "react";
import { View, StyleSheet } from "react-native";
import StyleGuide from "../../styles/StyleGuide";
import Button from "./Button";

interface IModalFooterProps {
  handler: Function;
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "28%",
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
const ModalFooter = (props: IModalFooterProps) => {
  const { handler } = props;
  return (
    <View style={styles.footer}>
      <Button style={styles.button} handler={handler}>
        Select
      </Button>
    </View>
  );
};

export default ModalFooter;
