import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/rootStore";
import { IHotelBase } from "../store/search/models/Hotel";
import StyleGuide from "../styles/StyleGuide";
import Button from "./shared/Button";
import Stars from "./Stars";
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  locationName: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.dark,
    marginBottom: StyleGuide.spacing / 3,
  },
  hotelName: {
    ...StyleGuide.typography.title3,
    color: StyleGuide.palette.dark,
    marginBottom: StyleGuide.spacing / 3,
  },
});

export const HotelCard = (props) => {
  const { item, index } = props;
  let { key, name, location, images, minPrice, city, country, rating } = item;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state.search);
  const { activeHotel } = state;

  const openHotelHandler = (e) => {
    // dispatch(setOpenHotel(key));
    // console.error(e.target);
    // console.error(item);
    navigation.navigate("Hotel", item);
  };

  return (
    <View
      style={{
        height: height / 2 + StyleGuide.spacing,
        width: width,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        style={{ flex: 3 }}
        key={item.key}
        onPress={openHotelHandler}
      >
        <SharedElement id={`hotel.${key}`}>
          {/* <ShowcaseList
            images={images}
            labelPosition={{ top: 0, left: 15, right: 0, bottom: 70 }}
            navigation={props.navigation}
            hotelKey={key}
          /> */}
          <Image
            source={images[0]}
            style={{
              width: width - StyleGuide.spacing * 2,
              height: "100%",
            }}
          />
        </SharedElement>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: "rgba(255, 255, 255, 0.2)" },
          ]}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          alignSelf: "flex-start",
          marginTop: StyleGuide.spacing,
          marginHorizontal: StyleGuide.spacing,
          width: width - StyleGuide.spacing * 2,
        }}
      >
        <Text style={styles.locationName}>{`${city}, ${country}`}</Text>
        <SharedElement id={`hotel.${key}.name`}>
          <Text style={styles.hotelName}>{name}</Text>
        </SharedElement>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text style={StyleGuide.typography.caption}>Price starts from</Text>
            <Text style={StyleGuide.typography.headline}>${minPrice}</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text style={StyleGuide.typography.caption}>Rating</Text>
            <Stars rating={rating} size={16} />
          </View>
          <Button
            style={{
              height: 30,
              width: 90,
              backgroundColor: StyleGuide.palette.dark,
              color: StyleGuide.palette.white,
            }}
            handler={() => navigation.navigate("Hotel", item)}
          >
            Book
          </Button>
        </View>
      </View>
    </View>
  );
};

const SearchResults = (props) => {
  const searchState = useSelector((state: AppState) => state.search);
  const { dates, location, loading } = searchState;
  const { scroll, handleScroll, navigation } = props;
  const [hotels, setHotels] = useState<IHotelBase[] | []>([]);
  useEffect(() => {
    setHotels(searchState.hotels);
  }, []);

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        <FlatList
          data={hotels}
          onScroll={handleScroll}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <HotelCard item={item} index={index} />;
          }}
        />
      }
    </View>
  );
};

export default SearchResults;
