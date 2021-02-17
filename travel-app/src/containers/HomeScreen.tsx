import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
import StyleGuide from "../styles/StyleGuide";
import { LinearGradient } from "expo-linear-gradient";
import SearchBarContainer from "../components/shared/search/SearchBarContainer";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store/rootStore";
import Menu from "../components/Menu";
import data from "../data";
import Cities from "../components/Cities";
import Trending from "../components/Trending";
import { IRoom } from "../store/search/models/Hotel";
import TModal from "../components/shared/TModal";
import DestinationsModalContent from "../components/DestinationsModalContent";

const styles = {
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.light,
  },
  linearGradient: {
    flex: 1,
    bottom: 0,
  },
  contentContainer: {
    paddingHorizontal: StyleGuide.spacing,
  },
};

let { cities, hotels } = data;
cities = cities.filter((c) => c.isHero);
const trending = hotels
  .filter((h) => h.popularity.isTrending)
  .map((h) => {
    let location = data.cities.filter((c) => c.key == h.location)[0];
    let hotelInfo = {
      hotelName: h.name,
      hotelKey: h.id,
      city: location.name,
      country: location.country,
    };
    const roomKeys = h.popularity.roomKeys;
    for (let r of roomKeys) {
      let room = h.rooms.filter((j) => j.key == r)[0];
      let roomInfo = { type: room.type, image: room.images[0] };
      return { ...hotelInfo, ...roomInfo };
    }
  });

// let animated = new Animated.Value(0);
const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "rgba(45, 62, 82, 0.4)"]}
        locations={[0.6, 0.8]}
        style={styles.linearGradient}
      >
        <SearchBarContainer />
        <View style={styles.contentContainer}>
          <Cities items={cities} />
          <Trending items={trending} />
        </View>
        <Menu />
        <TModal>
          <DestinationsModalContent />
        </TModal>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
