import React from "react";
import { View, FlatList, Dimensions, StyleSheet } from "react-native";
import { CardTypes } from "../../helpers/enums";
import StyleGuide from "../../styles/StyleGuide";
import Card from "./Card";

interface ICardBase {
  name: string;
  image: number;
}
export interface ICardExtended extends ICardBase {
  hotelName?: string;
  hotelKey?: number | null;
  city?: string;
  country?: string;
}

interface ICardsProps {
  items: ICardExtended[];
  type: CardTypes;
}

const { width, height } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    height: height * 0.16,
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
            card={{
              name: c.item.name || "",
              image: c.item.image,
              hotelName: c.item.hotelName || "",
              hotelKey: c.item.hotelKey || null,
              city: c.item.city || "",
              country: c.item.country || "",
            }}
            type={type}
          />
        )}
      />
    </View>
  );
};

export default Cards;