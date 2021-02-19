import React, { PropsWithChildren } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { SearchModalSettingsTypes } from "../../helpers/enums";
import StyleGuide from "../../styles/StyleGuide";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  setModalContent,
} from "../../store/common/modal/ModalAction";
import { AppState } from "../../store/rootStore";
interface IPickerButtonProps {
  type: SearchModalSettingsTypes;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: StyleGuide.palette.light2,
    width: 100,
    height: 25,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginEnd: StyleGuide.spacing / 3,
  },
  text: {
    ...StyleGuide.typography.footnote,
    color: StyleGuide.palette.dark,
  },
});

export const PickerButton = (props: PropsWithChildren<IPickerButtonProps>) => {
  const { type, children } = props;
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state.modal);

  const handlersSet = {
    [SearchModalSettingsTypes.destination]: () => {
      dispatch(setModalContent(SearchModalSettingsTypes.destination));
    },
    [SearchModalSettingsTypes.guests]: () => {
      dispatch(setModalContent(SearchModalSettingsTypes.guests));
    },
    [SearchModalSettingsTypes.date]: () => {
      dispatch(setModalContent(SearchModalSettingsTypes.date));
    },
    [SearchModalSettingsTypes.filters]: () => {
      dispatch(setModalContent(SearchModalSettingsTypes.filters));
    },
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlersSet[type]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
export default PickerButton;
