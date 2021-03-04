import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { useSelector } from "react-redux";
import Cities from "../components/Cities";
import Menu from "../components/Menu";
import ModalContent from "../components/shared/ModalContent";
import SearchBarContainer from "../components/shared/search/SearchBarContainer";
import TModal from "../components/shared/TModal";
import Stories from "../components/Stories";
import Trending, { ITrending } from "../components/Trending";
import data from "../data";
import { AppState } from "../store/rootStore";
import { IDestination } from "../store/search/models/Hotel";
import StyleGuide from "../styles/StyleGuide";

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
    flex: 2,
  },
};

let { cities, hotels, destinations, stories } = data;
cities = cities.filter((c) => c.isHero);
const trending = hotels
  .filter((h) => h.popularity.isTrending)
  .map((h, index) => {
    let location = data.cities.filter((c) => c.key == h.location)[0];
    let hotelInfo: ITrending = {
      hotelKey: `${h.location}_${h.name}`,
      hotelName: h.name,
      city: location.name,
      country: location.country,
    };
    const roomKeys = h.popularity.roomKeys;
    for (let r of roomKeys) {
      let room = h.rooms.filter((j) => j.key == r)[0];
      let roomInfo = { type: room.type, image: room.images[0] };
      let trending: ITrending = { ...hotelInfo, ...roomInfo };
      return trending;
    }
  });

const destinationsModalData = (): IDestination[] => {
  let modalData: IDestination[] = [];
  destinations.map((item) => {
    const destination: IDestination = {
      locationKey: null,
      name: item.country,
      image: item.image,
      isCountry: true,
    };
    modalData.push(destination);
    for (let key of item.cityKeys) {
      const cities = data.cities.filter((city) => city.key === key);
      for (let city of cities) {
        let cityDestination: IDestination = {
          locationKey: city.key,
          name: city.name,
          image: city.image,
          isCountry: false,
        };
        modalData.push(cityDestination);
      }
    }
  });
  return modalData;
};

const HomeScreen = (): JSX.Element => {
  const state = useSelector((state: AppState) => state.modal);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "rgba(45, 62, 82, 0.4)"]}
        locations={[0.6, 0.8]}
        style={styles.linearGradient}
      >
        <SharedElement id="item.searchBarSharedElement">
          <SearchBarContainer />
        </SharedElement>
        <View style={styles.contentContainer}>
          <Cities items={cities} />
          <Trending items={trending} />
          <Stories items={stories} />
        </View>
        <Menu />
        <TModal>
          <ModalContent destinations={destinationsModalData()} />
        </TModal>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
