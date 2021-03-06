import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import Room from "../components/Room";
import { IRoom } from "../store/search/models/Hotel";
import GlobalStyles from "../styles/GlobalStyles";
import StyleGuide from "../styles/StyleGuide";

interface IRoomsProps {
  rooms: IRoom[];
}

const { height } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    height: height * 0.41,
    backgroundColor: StyleGuide.palette.light,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: -45,
    paddingHorizontal: StyleGuide.spacing,
    paddingTop: StyleGuide.spacing,
    ...GlobalStyles.roundedTopCorner,
  },
  titleContainer: {
    marginBottom: StyleGuide.spacing / 3,
    // flex: 1,
  },
  title: {
    ...StyleGuide.typography.title3,
    color: StyleGuide.palette.dark,
  },
});

const Rooms = (props: IRoomsProps) => {
  const { rooms } = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Available rooms</Text>
      </View>
      <FlatList
        contentContainerStyle={{
          justifyContent: "center",
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={rooms}
        keyExtractor={(image, index) => index.toString()}
        renderItem={({ item, index }) => <Room room={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").width}
      />
    </View>
  );
};

export default Rooms;
