import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Easing,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Animated from "react-native-reanimated";
import { SharedElement } from "react-navigation-shared-element";
import Activities from "../components/Activities";
import Amenities from "../components/Amenities";
import BasicInfoBanner from "../components/BasicInfoBanner";
import ImageGallery from "../components/ImageGallery";
import Location from "../components/Location";
import Reviews from "../components/Reviews";
import Rooms from "../components/Rooms";
import BackHeader from "../components/shared/BackHeader";
import data from "../data";
import StyleGuide from "../styles/StyleGuide";

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
  contentContainer: {},
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
const HotelScreen = (props) => {
  const hotelData = props.route.params;
  const activities = data.activities.filter((a) => a.location === 1);
  const {
    key,
    images,
    name,
    rating,
    description,
    rooms,
    geoLocation,
  } = hotelData;
  const [reviewsShown, setReviewsShown] = useState<0 | 1>(0);
  const scrollY = useRef(new Animated.Value(0)).current;
  const { height, width } = StyleGuide.size;
  const [galleryOpened, setGalleryOpened] = useState<boolean>(false);

  let animatedValue = scrollY.interpolate({
    inputRange: [0, 70],
    outputRange: [1, 0.65],
  });
  const imageIconRef = useRef();
  const contentRef = useRef();
  const backIconRef = useRef();
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
    toggleReview(reviewsShown);
  }, [reviewsShown]);
  useEffect(() => {}, [galleryOpened]);
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
    <View style={{ backgroundColor: StyleGuide.palette.dark }}>
      <BackHeader {...{ scrollY, backIconRef }} />
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
          <SharedElement id={`hotel.${key}`}>
            <Image
              style={{
                height: height * 0.45,
                width: undefined,
                aspectRatio: 3 / 2,
              }}
              source={images[0]}
            />
            <TouchableWithoutFeedback
              onPress={() => setGalleryOpened(!galleryOpened)}
            >
              <Animatable.View
                ref={imageIconRef}
                animation="fadeIn"
                duration={3000}
                delay={100}
                useNativeDriver={true}
              >
                <Ionicons
                  style={{ position: "absolute", bottom: 60, left: 15 }}
                  name="camera-sharp"
                  size={30}
                  color="white"
                />
              </Animatable.View>
            </TouchableWithoutFeedback>
          </SharedElement>

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
        <Animatable.View
          style={styles.contentContainer}
          key="content"
          ref={contentRef}
          animation="slideInUp"
          duration={1000}
          delay={200}
        >
          <BasicInfoBanner
            name={name}
            rating={rating}
            reviews={reviews}
            description={description}
            scrollY={scrollY}
            reviewsShown={reviewsShown}
            setReviewsShown={setReviewsShown}
          />
          <Rooms
            rooms={rooms}
            // navigation={props.navigation}
            amenities={amenities}
          />
          <Amenities title="Hotel amenities" amenities={amenities} />
          <Location geoLocation={geoLocation} />
          <Activities activities={activities} />
        </Animatable.View>
      </Animated.ScrollView>
      <ImageGallery {...{ images, galleryOpened, setGalleryOpened }} />
    </View>
  );
};

export default HotelScreen;
