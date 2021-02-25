import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StyleGuide from "../styles/StyleGuide";
import globalStyles from "../styles/GlobalStyles";
import { Title } from "./shared/Title";
import CardList from "./shared/Cards";
import { IActivity } from "../store/search/models/Hotel";
import { CardTypes, TitleTypes } from "../helpers/enums";

interface IActivitiesProps {
  activities: IActivity[];
}

const { width, height } = StyleGuide.size;
const colorGuide = StyleGuide.palette;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: -45,
    backgroundColor: colorGuide.light,
    paddingHorizontal: StyleGuide.spacing,
    ...globalStyles.roundedTopCorner,
    height: 350,
  },
  titleContainer: {
    marginVertical: StyleGuide.spacing,
  },
  title: {
    color: colorGuide.dark,
    fontSize: 18,
    fontWeight: "bold",
  },
});

const Activities = (props: IActivitiesProps) => {
  const { activities } = props;
  return (
    <View style={styles.container}>
      <Title type={TitleTypes.secondary}>Adventures to enjoy</Title>
      <CardList type={CardTypes.activity} items={activities} />
    </View>
  );
};
export default Activities;
