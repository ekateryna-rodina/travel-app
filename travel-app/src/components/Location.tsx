import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Region } from "react-native-maps";
import globalStyles from "../styles/GlobalStyles";
import StyleGuide from "../styles/StyleGuide";

interface IMapSettings {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface ILocationProps {
  geoLocation: {
    latitude: string;
    longitude: string;
  };
}

const { height, width } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    height: height * 0.3,
    backgroundColor: StyleGuide.palette.light,
    marginTop: -45,
    justifyContent: "flex-start",
    ...globalStyles.roundedTopCorner,
  },
  titleContainer: {
    marginBottom: StyleGuide.spacing,
  },
  title: {
    color: StyleGuide.palette.dark,
    fontSize: 18,
    fontWeight: "bold",
  },
  mapContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    ...globalStyles.roundedTopCorner,
  },
  map: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    paddingBottom: StyleGuide.spacing * 3,
    ...globalStyles.roundedTopCorner,
  },
});

export const Location = (props: ILocationProps) => {
  const {
    geoLocation: { latitude, longitude },
  } = props;
  // initial state, todo: predefined boundingBoxCalculation
  const mapSettings = {
    centroid: {
      latitude: latitude,
      longitude: longitude,
    },
    boundingBox: {
      southWest: {
        longitude: "14.591324",
        latitude: "40.626956",
      },
      northEast: {
        longitude: "14.598556",
        latitude: "40.632110",
      },
    },
  };
  const [region, setRegion] = useState<IMapSettings>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const regionChangeHandler = () => {
    getInitialState();
  };

  const getInitialState = () => {
    const ASPECT_RATIO = width / height;
    const lat = parseFloat(mapSettings.centroid.latitude);
    const lng = parseFloat(mapSettings.centroid.longitude);
    const northeastLat = parseFloat(mapSettings.boundingBox.northEast.latitude);
    const southwestLat = parseFloat(mapSettings.boundingBox.southWest.latitude);
    const latDelta = northeastLat - southwestLat;
    const lngDelta = latDelta * ASPECT_RATIO;
    const coordinates = {
      region: {
        latitude: lat,
        longitude: lng,
        latitudeDelta: latDelta,
        longitudeDelta: lngDelta,
      },
    };

    setRegion(coordinates.region);
  };

  useEffect(() => {
    getInitialState();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          region={region}
          onRegionChange={regionChangeHandler}
          style={styles.map}
        />
      </View>
    </View>
  );
};

export default Location;