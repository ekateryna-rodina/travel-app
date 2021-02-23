import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Dimensions, ScrollView } from "react-native";
import SearchResults, { HotelCard } from "../components/SearchResults";
import SearchBarContainer from "../components/shared/search/SearchBarContainer";
import Animated from "react-native-reanimated";
import { IHotelBase } from "../store/search/models/Hotel";
import data from "../data";
import StyleGuide from "../styles/StyleGuide";
import Menu from "../components/Menu";
const { width, height } = Dimensions.get("screen");

const SearchResultsScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const height = StyleGuide.size.height;
  const headerHeight = height * 0.2;
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, headerHeight);
  const headerY = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
  });
  const topAnimated = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, headerHeight],
    outputRange: [height * 0.2 + 15, 0],
  });
  const [hotels, setHotels] = useState<IHotelBase[] | []>([]);
  useEffect(() => {
    setHotels(data.hotels);
  }, []);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Animated.View
        style={{
          position: "absolute",
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0,
          elevation: 1000,
          transform: [{ translateY: headerY }],
        }}
      >
        <SearchBarContainer />
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          //   bottom: 0,
          transform: [{ translateY: topAnimated }],
        }}
      >
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          alwaysBounceVertical={false}
          bounces={false}
        >
          {hotels.map((item, index) => {
            // console.warn(item);
            return (
              <HotelCard key={index.toString()} item={item} index={index} />
            );
          })}
        </Animated.ScrollView>
      </Animated.View>
      {/* <Menu /> */}
    </View>
  );
};

export default SearchResultsScreen;
