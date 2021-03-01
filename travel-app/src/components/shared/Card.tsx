import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { CardTypes } from "../../helpers/enums";
import globalStyles from "../../styles/GlobalStyles";
import StyleGuide from "../../styles/StyleGuide";
import { ICardExtended } from "./Cards";

interface ICard {
  image: number;
  name: string;
  description?: string;
}
interface ICardProps {
  key?: string;
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
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    // top: 0,
    // backgroundColor: "rgba(255, 255, 255, 0.1)",
    // width: height * 0.26,
    height: height * 0.13,
    ...StyleSheet.absoluteFillObject,
    ...globalStyles.roundedBottomCorner,
    width: height * 0.26,
    overflow: "hidden",
    borderBottomRightRadius: 45,
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
    marginBottom: StyleGuide.spacing / 3,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    left: StyleGuide.spacing / 3,
    top: 5,
  },
  wholeTextContainer: {
    marginVertical: StyleGuide.spacing / 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(245, 245, 245, 0.7)",
    flex: 1,
  },
  darkTextArea: {
    color: "white",
    ...StyleGuide.typography.body,
  },
  darkTitle: {
    ...StyleGuide.typography.footnoteBold,
    color: StyleGuide.palette.dark,
  },
  darkSubtitle: {
    color: StyleGuide.palette.dark,
    ...StyleGuide.typography.footnoteBold,
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
    marginVertical: StyleGuide.spacing / 3,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  activity: {
    ...globalStyles.roundedTopCorner,
    width: height * 0.38,
    height: height * 0.28,
    marginHorizontal: (width - height * 0.38) / 3,
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    bottom: 0,
    borderBottomRightRadius: 45,
  },
  mission: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  review: {},
  special: {},
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
          <View>
            <Text style={[styles.darkSubtitle]}>{hotelName}</Text>
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
    case CardTypes.mission:
      return (
        <View style={styles.wholeTextContainer}>
          <Text style={styles.darkTextArea}>loren ipsun</Text>
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
    [CardTypes.mission]: styles.mission,
    [CardTypes.activity]: styles.activity,
    [CardTypes.review]: styles.review,
    [CardTypes.special]: styles.special,
  };

  const overlaySet = {
    [CardTypes.city]: styles.fullOverlay,
    [CardTypes.hotel]: styles.halfOverlay,
    [CardTypes.mission]: {},
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
        {type === CardTypes.hotel && (
          <LinearGradient
            colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.6)"]}
            locations={[0.1, 0.7]}
            style={[styles.linearGradient]}
          >
            {_renderContent(
              type,
              card.name,
              card.hotelName,
              card.city,
              card.country
            )}
          </LinearGradient>
        )}

        {_renderContent(
          type,
          card.name,
          card.hotelName,
          card.city,
          card.country
        )}
      </View>
    </View>
  );
};

export default Card;
