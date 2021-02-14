import React from "react";
import { View, FlatList, Dimensions, StyleSheet } from "react-native";
import StyleGuide from "../../styles/StyleGuide";
import Card from "./Card";

interface ICard {
  key: string;
  name: string;
  image: number;
}
interface ICardsProps {
  items: ICard[];
  type: CardTypes;
}
const styles = StyleSheet.create({
  container: {
    height: (Dimensions.get("window").height * 16) / 100,
    paddingVertical: StyleGuide.spacing / 3,
  },
});

const Cards = (props: ICardsProps) => {
  const { items, type } = props;
  return (
    <View style={styles.container}>
      <FlatList
        style={{ position: "absolute" }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={items}
        renderItem={(c) => (
          <Card
            key={c.index.toString()}
            card={{ name: c.item.name, image: c.item.image }}
            type={type}
          />
        )}
      />
    </View>
  );
};

export default Cards;
