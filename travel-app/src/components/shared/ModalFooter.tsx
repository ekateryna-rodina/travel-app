import React from "react";
import { View, StyleSheet } from "react-native";
import { closeModal } from "../../store/common/modal/ModalAction";
import StyleGuide from "../../styles/StyleGuide";
import Button from "./Button";
import { useDispatch } from "react-redux";

interface IModalFooterProps {
  handler: Function;
  disabled?: boolean;
}

const { height } = StyleGuide.size;
const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    height: height * 0.1,
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
  const { handler, disabled } = props;
  const dispatch = useDispatch();
  const globalHandler = (handler: Function) => {
    handler();
    dispatch(closeModal());
  };
  return (
    <View style={styles.footer}>
      <Button
        style={styles.button}
        disabled={disabled}
        handler={() => globalHandler(handler)}
      >
        Select
      </Button>
    </View>
  );
};

export default ModalFooter;
