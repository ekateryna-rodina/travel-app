import React from "react";
import { StyleSheet, View } from "react-native";
import { CardTypes, TitleTypes } from "../helpers/enums";
import { ICity } from "../store/search/models/Hotel";
import StyleGuide from "../styles/StyleGuide";
import Cards from "./shared/Cards";
import { Title } from "./shared/Title";

interface ICitiesProps {
  items: ICity[];
}
const styles = StyleSheet.create({
  title: {
    color: StyleGuide.palette.dark,
  },
});

const Cities = (props: ICitiesProps) => {
  const { items: cities } = props;
  const cards = cities.map((c) => {
    return { name: c.name, image: c.image };
  });
  return (
    <View style={{}}>
      <Title style={styles.title} type={TitleTypes.secondary}>
        15 cities to explore
      </Title>
      <Cards items={cards} type={CardTypes.city} />
    </View>
  );
};
export default Cities;
