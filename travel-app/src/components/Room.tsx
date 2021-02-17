import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import StyleGuide from "../styles/StyleGuide";
import { IRoom } from "../store/search/models/Hotel";

interface IRoomProps {
  room: IRoom;
  navigation: any;
}

const spacing = StyleGuide.spacing;
const styles = StyleSheet.create({
  container: {
    marginVertical: spacing / 3,
  },
  typeRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing / 3,
    paddingVertical: spacing / 3,
  },
  type: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
  guestsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "50%",
  },
  image: { width: 350, height: 170, borderRadius: 5 },
});

const Room = (props: IRoomProps) => {
  const { room, navigation } = props;
  const { type, images, price } = room;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RoomScreen", { room });
        }}
      >
        <Image style={styles.image} source={images[0]} />
      </TouchableOpacity>
      <View>
        <View style={styles.typeRowContainer}>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.price}>${price} / night</Text>
        </View>
        <View style={styles.guestsContainer}>
          <Text style={{ flex: 1 }}>Max guests: 3</Text>
          <Text style={{ flex: 1 }}>Max kids: 1</Text>
        </View>
      </View>
    </View>
  );
};

export default Room;
