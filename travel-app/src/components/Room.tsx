import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { IRoom } from "../store/search/models/Hotel";
import StyleGuide from "../styles/StyleGuide";

interface IRoomProps {
  room: IRoom;
}

const spacing = StyleGuide.spacing;
const { width, height } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    marginVertical: spacing / 3,
    marginHorizontal: (width - 350) / 2,
    height: height * 0.3,
  },
  typeRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing / 2,
    paddingVertical: spacing / 3,
  },
  type: {
    ...StyleGuide.typography.body,
  },
  price: {
    ...StyleGuide.typography.body,
    marginEnd: 3,
  },
  guestsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "50%",
    // height: 200,
  },
  guests: {
    flex: 1,
    ...StyleGuide.typography.footnoteBold,
  },
  image: { width: undefined, aspectRatio: 3 / 2, height: 170 },
});

const Room = (props: IRoomProps) => {
  const { room } = props;
  const { type, images, price, key } = room;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Room", { room });
        }}
      >
        <SharedElement id={`room.${key}`}>
          <Image style={styles.image} source={images[0]} />
        </SharedElement>
      </TouchableOpacity>
      <View>
        <View style={styles.typeRowContainer}>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.price}>
            ${price} /{" "}
            <View style={{}}>
              <MaterialIcons name="nightlight-round" size={16} color="black" />
            </View>
          </Text>
        </View>
        <View style={styles.guestsContainer}>
          <Text style={styles.guests}>Max guests: 3</Text>
          <Text> {""}</Text>
          <Text style={styles.guests}>Max kids: 1</Text>
        </View>
      </View>
    </View>
  );
};

export default Room;
