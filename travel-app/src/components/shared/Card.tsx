import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import GlobalStyles from "../../styles/GlobalStyles";
import StyleGuide from "../../styles/StyleGuide";

interface ICardProps {
  key: string;
  type: CardTypes;
  card: {
    image: number;
    name: string;
  };
}

const { width, height } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  overlaySmall: {},
  overlayMedium: {},
  fullOverlay: {
    ...StyleSheet.absoluteFillObject,
    ...globalStyles.roundedBottomCorner,
    backgroundColor: "rgba(45, 62, 82, 0.5)",
    width: height * 0.13,
    height: height * 0.13,
  },
  halfOverlay: {
    ...StyleSheet.absoluteFillObject,
    ...globalStyles.roundedBottomCorner,
    backgroundColor: "rgba(245, 245, 245, 0.3)",
    width: height * 0.26,
    height: height * 0.13,
    top: height * 0.06,
  },
  bottomOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(245, 245, 245, 0.7)",
    flex: 1,
    top: 180,
  },
  centeredContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteTitle: {
    fontSize: 18,
    color: StyleGuide.palette.white,
    fontWeight: "bold",
  },
  bottomTextContainer: {
    position: "absolute",
    width: "90%",
    padding: 10,
    left: 20,
    right: 0,
    bottom: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  darkTitle: {
    fontSize: 16,
    color: StyleGuide.palette.black,
    fontWeight: "bold",
  },
  city: {
    ...globalStyles.roundedBottomCorner,
    height: height * 0.13,
    width: height * 0.13,
    marginEnd: 10,
  },
  hotel: {
    ...globalStyles.btnSmallBorderRadius,
    height: height * 0.13,
    width: height * 0.26,
    marginEnd: 10,
  },
  text: {
    ...globalStyles.btnSmallBorderRadius,
    width: height * 0.42,
    height: height * 0.2,
    marginEnd: 10,
  },
  activity: {
    ...globalStyles.roundedTopCorner,
    width: height * 0.38,
    height: height * 0.28,
    marginHorizontal: StyleGuide.spacing,
  },
});

const _renderTitle = (type: CardTypes, name: string) => {
  switch (type) {
    case CardTypes.city:
      return (
        <View style={styles.centeredContainer}>
          <Text style={styles.whiteTitle}>{name}</Text>
        </View>
      );
    case CardTypes.activity:
      return (
        <View style={styles.bottomTextContainer}>
          <Text style={styles.darkTitle}>{name}</Text>
        </View>
      );
    default:
      return <></>;
  }
};

const Card = (props: ICardProps) => {
  const { card, type } = props;
  const stylesSet = {
    [CardTypes.city]: styles.city,
    [CardTypes.hotel]: styles.hotel,
    [CardTypes.text]: styles.text,
    [CardTypes.activity]: styles.activity,
  };

  const overlaySet = {
    [CardTypes.city]: styles.fullOverlay,
    [CardTypes.hotel]: styles.halfOverlay,
    [CardTypes.text]: {},
    [CardTypes.activity]: styles.bottomOverlay,
  };

  return (
    <View style={styles.container}>
      <Image
        source={card.image}
        style={stylesSet[type]}
        resizeMode="cover"
        blurRadius={type === CardTypes.city ? 3 : 0}
      />
      <View style={overlaySet[type]} />
      {_renderTitle(type, card.name)}
    </View>
  );
};

export default Card;
