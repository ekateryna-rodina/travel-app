import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Easing } from "react-native";
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
import Reviews from "../components/Reviews";

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
    // reviews,
    description,
    rooms,
    // amenities,
    geoLocation,
  } = hotelData;
  const [reviewsShown, setReviewsShown] = useState<0 | 1>(0);
  const scrollY = useRef(new Animated.Value(0)).current;
  const { height, width } = StyleGuide.size;

  let animatedValue = scrollY.interpolate({
    inputRange: [0, 70],
    outputRange: [1, 0.65],
  });
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const toggleReview = (reviewsShown) => {
    if (reviewsShown) {
      Animated.timing(animatedHeight, {
        duration: 500,
        toValue: height * 0.45,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        duration: 500,
        toValue: 0,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  };
  useEffect(() => {
    console.warn("fff");
    toggleReview(reviewsShown);
  }, [reviewsShown]);
  const amenities = [
    { name: "A la carte restaurant", icon: "restaurant" },
    { name: "Always fresh water in swimming pool", icon: "swimming-pool" },
  ];
  const reviews = [
    "This hotel is beautiful and was clean. I loved having a king balcony room. It was spacious and we enjoyed having the balcony and the opportunity to use it for pictures. This hotel is conveniently located by multiple trains and restaurants.",
    "Pleasantly surprised by overall room appearance and smart tv that was equipped with sufficient HDMI outputs for Fire and/or Apple TV needs.",
    "It was an extraordinary experience definitely recommend it the staff was very helpful, room was clean and smell good. Already planning my next stay",
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
          key="showcase"
          style={{
            opacity: animatedValue,
            height: height * 0.45,
            transform: [
              {
                translateY: scrollY,
              },
            ],
          }}
        >
          <ShowcaseList images={images} labelPosition={styles.labelPosition} />
          <Animated.View
            style={{
              flex: 1,
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: animatedHeight,
            }}
          >
            <Reviews reviews={reviews} />
          </Animated.View>
        </Animated.View>
        <View style={styles.contentContainer} key="content">
          <BasicInfoBanner
            name={name}
            rating={rating}
            reviews={reviews}
            description={description}
            scrollY={scrollY}
            reviewsShown={reviewsShown}
            setReviewsShown={setReviewsShown}
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
