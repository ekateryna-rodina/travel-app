import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import BasicInfoBanner from "../components/BasicInfoBanner";
import ShowcaseList from "../components/shared/showCase/ShowcaseList";
import data from "../data";
import StyleGuide from "../styles/StyleGuide";
import Rooms from "../components/Rooms";
import Amenities from "../components/Amenities";
import Location from "../components/Location";
import Activities from "../components/Activities";
import { AntDesign } from "@expo/vector-icons";
import BackHeader from "../components/shared/BackHeader";
import { onScroll, useValues } from "react-native-redash/lib/module/v1";

const { height, width } = StyleGuide.size;
let styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: StyleGuide.palette.light,
  },
  showcaseContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: "center",
    overflow: "hidden",
  },
  contentContainer: {
    // width: "100%",
    // height: "100%",
  },
  labelPosition: {
    top: 0,
    left: 15,
    right: 0,
    bottom: 70,
  },
  navigationContainer: {
    width: "100%",
    position: "absolute",
    zIndex: 100,
    backgroundColor: StyleGuide.palette.white,
    height: 90,
    top: 0,
    left: 0,
    right: 0,
  },
});
const HotelScreen = ({ navigation }) => {
  const hotelData = data.hotels[0];
  const [scrollPosition, setScrollPosition] = useState(0);
  const activities = data.activities.filter((a) => a.location === 1);
  const {
    images,
    name,
    rating,
    reviews,
    description,
    rooms,
    // amenities,
    geoLocation,
  } = hotelData;
  const scrollY = new Animated.Value(0);
  const { height, width } = StyleGuide.size;

  const showcaseHeight = height * 0.2;
  let animatedValue = scrollY.interpolate({
    inputRange: [0, 70],
    outputRange: [1, 0.65],
  });
  const amenities = [
    { name: "A la carte restaurant", icon: "restaurant" },
    { name: "Always fresh water in swimming pool", icon: "swimming-pool" },
  ];
  return (
    <View>
      <BackHeader {...{ scrollY }} />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        scrollEventThrottle={1}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
      >
        <Animated.View
          style={{
            opacity: animatedValue,
            height: height * 0.45,
            transform: [
              {
                translateY: scrollY,
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [
                    -showcaseHeight,
                    0,
                    showcaseHeight,
                    showcaseHeight + 1,
                  ],
                  outputRange: [2.8, 1, 1, 1],
                }),
              },
            ],
          }}
        >
          <ShowcaseList images={images} labelPosition={styles.labelPosition} />
        </Animated.View>
        <View style={styles.contentContainer}>
          <BasicInfoBanner
            name={name}
            rating={rating}
            reviews={reviews}
            description={description}
            scrollY={scrollY}
          />
          <Rooms rooms={rooms} navigation={navigation} amenities={amenities} />
          <Amenities title="Hotel amenities" amenities={amenities} />
          <Location geoLocation={geoLocation} />
          <Activities activities={activities} />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default HotelScreen;
