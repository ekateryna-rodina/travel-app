import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getIcon } from "../helpers/containers";
import globalStyles from "../styles/GlobalStyles";
import StyleGuide from "../styles/StyleGuide";

interface IAmenity {
  key?: string;
  name: string;
  icon: any;
}

interface IAmenitiesProps {
  amenities: IAmenity[];
  title?: string;
  isRoom?: boolean;
}
const { height, width } = StyleGuide.size;
const colorGuide = StyleGuide.palette;
const styles = StyleSheet.create({
  hotelContainer: {
    ...globalStyles.roundedTopCorner,
    backgroundColor: colorGuide.dark,
    marginTop: Platform.OS === "ios" ? -45 : 0,
    paddingHorizontal: StyleGuide.spacing,
    flexDirection: "column",
    height: height * 0.266,
  },
  roomContainer: {
    flexDirection: "column",
    height: height * 0.2,
  },
  titleContainer: {
    marginVertical: StyleGuide.spacing,
  },
  title: {
    ...StyleGuide.typography.title3,
  },
  expandLink: {
    marginVertical: StyleGuide.spacing / 3,
    ...StyleGuide.typography.footnoteBold,
  },
});

const Amenities = (props: IAmenitiesProps) => {
  const { amenities, title, isRoom } = props;

  return (
    <View style={isRoom ? styles.roomContainer : styles.hotelContainer}>
      <View style={styles.titleContainer}>
        <Text
          style={[
            styles.title,
            { color: isRoom ? StyleGuide.palette.dark : colorGuide.white },
          ]}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {amenities.map((amenity, index) => {
          return (
            <View style={{ width: "45%", marginEnd: 5 }} key={index.toString()}>
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
                    color: isRoom
                      ? StyleGuide.palette.dark
                      : StyleGuide.palette.light,
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
        <Text
          style={[
            styles.expandLink,
            {
              color: isRoom
                ? StyleGuide.palette.dark
                : StyleGuide.palette.white,
            },
          ]}
        >
          Show all amenities
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Amenities;
