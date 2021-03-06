import React from "react";
import { StyleSheet, View } from "react-native";
import { CardTypes, TitleTypes } from "../helpers/enums";
import StyleGuide from "../styles/StyleGuide";
import Cards from "./shared/Cards";
import { Title } from "./shared/Title";

export interface ITrending {
  type?: string;
  image?: number;
  city: string;
  country: string;
  hotelKey: string;
  hotelName: string;
  moto?: string;
}

interface ITrendingProps {
  items: ITrending[];
}

const styles = StyleSheet.create({
  title: {
    color: StyleGuide.palette.dark,
  },
});

const Trending = (props: ITrendingProps) => {
  const { items } = props;

  const cards = items.map((item) => {
    return {
      name: item.type,
      image: item.image,
      hotelName: item.hotelName,
      hotelKey: item.hotelKey,
      city: item.city,
      country: item.country,
    };
  });

  return (
    <View style={{ marginTop: -StyleGuide.spacing * 2 }}>
      <Title style={styles.title} type={TitleTypes.secondary}>
        Trending Stays
      </Title>
      <Cards items={cards} type={CardTypes.hotel} />
    </View>
  );
};

export default Trending;
