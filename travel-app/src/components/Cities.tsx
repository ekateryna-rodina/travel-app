import React from "react";
import { View, StyleSheet } from "react-native";
import { ICity } from "../store/search/models/Hotel";
import Cards from "./shared/Cards";
import { Title } from "./shared/Title";
import { TitleTypes, CardTypes } from "../helpers/enums";
import StyleGuide from "../styles/StyleGuide";

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
    <>
      <Title style={styles.title} type={TitleTypes.secondary}>
        15 cities to explore
      </Title>
      <Cards items={cards} type={CardTypes.city} />
    </>
  );
};
export default Cities;
