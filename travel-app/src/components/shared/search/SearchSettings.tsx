import React from "react";
import { View, StyleSheet } from "react-native";
import StyleGuide from "../../../styles/StyleGuide";
import PickerButton from "../PickerButton";
import { SearchModalSettingsTypes } from "../../../helpers/enums";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: StyleGuide.spacing,
  },
});

export const SearchSettings = () => {
  return (
    <View style={styles.container}>
      <PickerButton type={SearchModalSettingsTypes.guests}>
        3 Guests
      </PickerButton>
      <PickerButton type={SearchModalSettingsTypes.date}>
        March 3 - 17
      </PickerButton>
      <PickerButton type={SearchModalSettingsTypes.filters}>
        Filters
      </PickerButton>
    </View>
  );
};
