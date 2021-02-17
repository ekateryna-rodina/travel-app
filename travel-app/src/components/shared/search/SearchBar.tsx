import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import StyleGuide from "../../../styles/StyleGuide";
import { useSelector, useDispatch } from "react-redux";
import TModal from "../TModal";
import { IModal } from "../../../store/common/modal/models/Modal";
import { AppState } from "../../../store/rootStore";
import { closeModal, openModal } from "../../../store/common/modal/ModalAction";
// import DropDown from "../DropDown";
// import { Dropdown } from "react-native-material-dropdown";

const SearchBar = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state.modal);
  const { isOpened } = state;
  const textInputFocusHandler = () => {
    if (isOpened) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  };
  const textInputChangedHandler = () => {};
  return (
    <View style={styles.container}>
      <Entypo name="magnifying-glass" size={30} color={"rgba(0, 0, 0, 0.5)"} />
      {/* <KeyboardAvoidingView> */}
      {/* <TextInput
        onBlur={() => Keyboard.dismiss()}
        placeholder={"Hi Kateryna!\nWhere are you going next?"}
        multiline
        // editable={false}
        style={{ ...styles.input, ...StyleGuide.typography.body }}
        // onFocus={textInputFocusHandler}
        // onChangeText={textInputChangedHandler}
      /> */}
      <TouchableWithoutFeedback onPress={textInputFocusHandler}>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={[
              { ...styles.input, ...StyleGuide.typography.body },
              { flex: 1 },
            ]}
          >
            Hi Kateryna!
          </Text>
          <Text
            style={[
              { ...styles.input, ...StyleGuide.typography.body },
              { flex: 1 },
            ]}
          >
            Where are you going next?
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "55%",
  },
  input: {
    opacity: 0.5,
    marginStart: StyleGuide.spacing,
    marginVertical: 1,
    fontSize: 20,
    color: StyleGuide.palette.black,
  },
});

export default SearchBar;
