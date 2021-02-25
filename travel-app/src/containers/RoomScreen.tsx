import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import BackHeader from "../components/shared/BackHeader";
import Button from "../components/shared/Button";
import DatePicker from "../components/shared/DatePicker";
import PickerButton from "../components/shared/PickerButton";
import ShowcaseList from "../components/shared/showCase/ShowcaseList";
import { SearchModalSettingsTypes } from "../helpers/enums";
import StyleGuide from "../styles/StyleGuide";
import Amenities from "../components/Amenities";

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 15,
  },

  title: {
    color: StyleGuide.palette.dark,
    ...StyleGuide.typography.title3,
  },

  descriptionContainer: {
    flex: 1,
  },
  text: {
    color: StyleGuide.palette.dark,
    lineHeight: 20,
    flex: 1,
    flexWrap: "wrap",
    ...StyleGuide.typography.subhead,
  },
  showcaseLabelContainer: {
    top: 0,
    left: StyleGuide.spacing,
    right: 0,
    bottom: StyleGuide.spacing,
  },
  amenitiesTitle: {
    color: StyleGuide.palette.dark,
    ...StyleGuide.typography.title3,
  },
  primaryButton: {
    backgroundColor: StyleGuide.palette.dark,
    width: 175,
    height: 50,
    borderRadius: 10,
    color: StyleGuide.palette.white,
    textTransform: "uppercase",
    fontSize: 18,
  },
  price: {
    color: StyleGuide.palette.dark,
    // fontSize: 18,
    marginBottom: 5,
    ...StyleGuide.typography.callout,
  },
  totalPrice: {
    color: StyleGuide.palette.dark,
    ...StyleGuide.typography.calloutBold,
  },
});

const RoomScreen = (props) => {
  const {
    route: {
      params: { room },
    },
  } = props;
  const { type, images, description, price } = room;
  const { navigation } = props;
  // temp
  const amenities = [
    { name: "Complementary bottle", icon: "gift" },
    { name: "Satellite channels", icon: "tv" },
    { name: "Hand sanitizer", icon: "sanitizer" },
    { name: "Slippers", icon: "slippers" },
  ];
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2 }}>
        <BackHeader />
        <ShowcaseList
          images={images}
          labelPosition={styles.showcaseLabelContainer}
        />
      </View>
      <View
        style={{
          flex: 3,
          padding: StyleGuide.spacing,
          backgroundColor: StyleGuide.palette.light,
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{type}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <Amenities
            title="Room amenities"
            amenities={amenities}
            isRoom={true}
          />
        </View>
        <View
          style={{
            height: 135,
            position: "absolute",
            // top: 275,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: StyleGuide.palette.white,
            borderWidth: 0.1,
            paddingHorizontal: StyleGuide.spacing,
            paddingTop: StyleGuide.spacing,
            paddingBottom: StyleGuide.spacing,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <PickerButton type={SearchModalSettingsTypes.guests}>
                3 Guests
              </PickerButton>
              <DatePicker />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={styles.price}>
                Price: ${price} /{" "}
                <View style={{}}>
                  <MaterialIcons
                    name="nightlight-round"
                    size={16}
                    color="black"
                  />
                </View>
              </Text>
              <Text style={styles.totalPrice}>Total: $612.32</Text>
            </View>
            <View>
              <Button
                style={styles.primaryButton}
                handler={() => console.warn("book")}
              >
                Book
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RoomScreen;
