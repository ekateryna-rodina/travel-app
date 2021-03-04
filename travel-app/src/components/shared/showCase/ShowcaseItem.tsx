import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/rootStore";
import StyleGuide from "../../../styles/StyleGuide";

interface IShowcaseItem {
  image: number;
  total: number;
  current: number;
  labelPosition: {};
  navigation: any;
  hotelKey: number;
  isShared: boolean;
}

const { width } = StyleGuide.size;
const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: StyleGuide.palette.white,
    ...StyleGuide.typography.headline,
  },
  grayContainer: {
    width: 60,
    height: 36,
    backgroundColor: StyleGuide.palette.dark,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: StyleGuide.spacing / 3,
    paddingHorizontal: StyleGuide.spacing / 3,
    borderRadius: 10,
  },
});
const { height } = StyleGuide.size;
const ShowcaseItem = (props: IShowcaseItem) => {
  const { image, total, current, labelPosition, isShared, hotelKey } = props;
  const state = useSelector((state: AppState) => state.search);
  const { activeHotel } = state;
  // console.error(`act ${activeHotel}`);
  // const navigation = useNavigation();

  // const hotelKey = navigation.getParam("key");
  console.warn(hotelKey);
  return (
    <View style={{ flex: 1, width: width }}>
      {isShared ? (
        <SharedElement id={`hotel.${hotelKey}.${image}`}>
          <Image
            style={{
              height: height * 0.45,
              width: undefined,
              aspectRatio: 3 / 2,
            }}
            source={image}
          />
        </SharedElement>
      ) : (
        <Image
          style={{
            height: height * 0.45,
            width: undefined,
            aspectRatio: 3 / 2,
          }}
          source={image}
        />
      )}

      <View style={[styles.labelContainer, labelPosition]}>
        <View style={styles.grayContainer}>
          <Text style={styles.label}>
            {current + 1} of {total}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ShowcaseItem;
