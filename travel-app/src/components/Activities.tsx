import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StyleGuide from "../styles/StyleGuide";
import globalStyles from "../styles/GlobalStyles";
import { Title } from "./shared/Title";
import CardList from "./shared/Cards";

interface IActivity {
  key: string;
  name: string;
  city: string;
  country: string;
  description: string;
  price: number;
  image: number;
}
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
