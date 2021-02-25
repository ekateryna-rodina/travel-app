import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import StyleGuide from "../styles/StyleGuide";
import globalStyles from "../styles/GlobalStyles";
import { getIcon } from "../helpers/containers";
// import { ICONS } from "../helpers/containers";

interface IAmenity {
  key: string;
  name: string;
  icon: any;
}

interface IAmenitiesProps {
  amenities: IAmenity[];
  title?: string;
}

const colorGuide = StyleGuide.palette;
const styles = StyleSheet.create({
  container: {
    ...globalStyles.roundedTopCorner,
    backgroundColor: colorGuide.dark,
    marginTop: -45,
    paddingHorizontal: StyleGuide.spacing,
    height: 215,
  },
  titleContainer: {
    marginVertical: StyleGuide.spacing,
  },
  title: {
    color: colorGuide.white,
    ...StyleGuide.typography.title3,
  },
  expandLink: {
    marginVertical: StyleGuide.spacing / 3,
    color: colorGuide.white,
    ...StyleGuide.typography.footnoteBold,
  },
});

const restaurant = () => {
  return (
    <FontAwesome5
      name="swimming-pool"
      size={20}
      color={StyleGuide.palette.light}
    />
  );
};

const Amenities = (props: IAmenitiesProps) => {
  const { amenities, title } = props;
  const ICONS = { hey: () => {} };

  const allAmenities = [
    { name: "A la carte restaurant", icon: "restaurant" },
    { name: "Always fresh water in swimming pool", icon: "swimming-pool" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Featured amenities</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {allAmenities.map((amenity) => {
          return (
            <View style={{ width: "45%", marginEnd: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: StyleGuide.spacing / 3,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <View style={{ flex: 1 }}>{getIcon(amenity.icon)}</View>
                <Text
                  style={{
                    flex: 4,
                    alignSelf: "center",
                    color: StyleGuide.palette.light,
                    ...StyleGuide.typography.callout,
                  }}
                >
                  {amenity.name}
                </Text>
              </View>
            </View>
          );
        })}
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
