import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Image, Text, StyleSheet, Platform } from "react-native";
import { CardTypes } from "../../helpers/enums";
import globalStyles from "../../styles/GlobalStyles";
import GlobalStyles from "../../styles/GlobalStyles";
import StyleGuide from "../../styles/StyleGuide";
import { ICardExtended } from "./Cards";

interface ICard {
  image: number;
  name: string;
  description?: string;
}
interface ICardProps {
  key: string;
  type: CardTypes;
  card: ICardExtended;
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
    height: width * 0.15,
    top: 60,
    left: 0,
    right: -2,
  },
  bottomOverlay: {
    borderRadius: 15,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(245, 245, 245, 0.7)",
    flex: 1,
    top: Platform.OS === "ios" ? 180 : 160,
  },
  centeredTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteTitle: {
    ...StyleGuide.typography.bodyBold,
    color: StyleGuide.palette.white,
  },
  bottomTextContainer: {
    ...StyleSheet.absoluteFillObject,
    // marginHorizontal: StyleGuide.spacing * 3,
    marginBottom: StyleGuide.spacing / 3,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginHorizontal: (width - height * 0.38) / 2,
  },
  darkTitle: {
    ...StyleGuide.typography.footnoteBold,
    color: StyleGuide.palette.dark,
  },
  darkSubtitle: {
    color: StyleGuide.palette.dark,
    ...StyleGuide.typography.footnote,
  },
  city: {
    ...globalStyles.roundedBottomCorner,
    height: height * 0.13,
    width: height * 0.13,
    marginEnd: 10,
  },
  hotel: {
    ...globalStyles.roundedBottomCorner,
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
    marginHorizontal: (width - height * 0.38) / 3,
  },
  linearGradient: {
    flex: 1,
    bottom: 0,
  },
});

const _renderContent = (
  type: CardTypes,
  name: string,
  hotelName?: string,
  city?: string,
  country?: string
) => {
  switch (type) {
    case CardTypes.city:
      return (
        <View style={styles.centeredTextContainer}>
          <Text style={styles.whiteTitle}>{name}</Text>
        </View>
      );
    case CardTypes.hotel:
      return (
        <View style={styles.bottomTextContainer}>
          <Text style={styles.darkTitle}>{name}</Text>
          <View>
            <Text style={[styles.darkSubtitle]}>in {hotelName},</Text>
            <Text style={[styles.darkSubtitle]}>
              {" "}
              {city}, {country}
            </Text>
          </View>
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
      <View style={overlaySet[type]}>
        {_renderContent(
          type,
          card.name,
          card.hotelName,
          card.city,
          card.country
        )}
      </View>
      {/* <LinearGradient
        colors={["black", "red"]}
        locations={[0.6, 0.8]}
        style={[styles.linearGradient, { position: "absolute" }]}
      ></LinearGradient> */}
    </View>
  );
};

export default Card;
