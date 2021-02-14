import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import StyleGuide from "../styles/StyleGuide";
import globalStyles from "../styles/GlobalStyles";

interface IAmenity {
  key: string;
  name: string;
  icon: any;
}

interface IAmenitiesProps {
  amenities: IAmenity[];
  title: string;
}

const colorGuide = StyleGuide.palette;
const styles = StyleSheet.create({
  container: {
    ...globalStyles.roundedTopCorner,
    backgroundColor: colorGuide.dark,
    marginTop: -45,
    paddingHorizontal: StyleGuide.spacing,
  },
  titleContainer: {
    marginVertical: StyleGuide.spacing,
  },
  title: {
    color: colorGuide.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  expandLink: {
    marginVertical: StyleGuide.spacing / 3,
    color: colorGuide.white,
    fontWeight: "bold",
  },
});

const Amenities = (props: IAmenitiesProps) => {
  const { amenities, title } = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Featured amenities</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <View style={{ flex: 1 }}>
              <Ionicons name="restaurant" size={20} color={colorGuide.light} />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ color: colorGuide.light }}>
                A la carte restaurant
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <View style={{ flex: 1 }}>
              <FontAwesome5
                name="swimming-pool"
                size={20}
                color={colorGuide.light}
              />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ color: colorGuide.light }}>Heated pool</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <View style={{ flex: 1 }}>
              <MaterialIcons
                name="sports-tennis"
                size={20}
                color={colorGuide.light}
              />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ color: colorGuide.light }}>Play courts</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <View style={{ flex: 1 }}>
              <MaterialIcons
                name="sports-tennis"
                size={20}
                color={colorGuide.light}
              />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ color: colorGuide.light }}>Play courts</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <View style={{ flex: 1 }}>
              <Fontisto name="persons" size={22} color={colorGuide.light} />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ color: colorGuide.light }}>Reception 24H</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <View style={{ flex: 1 }}>
              <MaterialIcons
                name="fitness-center"
                size={20}
                color={colorGuide.light}
              />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ color: colorGuide.light }}>Fitness facility</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => console.warn("show all amenities")}
        style={{
          marginTop: 2,
          flexGrow: 1,
        }}
      >
        <Text style={styles.expandLink}>Show all amenities</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Amenities;
