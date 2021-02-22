import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Easing,
  TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";
import { useSelector } from "react-redux";
import { AppState } from "../store/rootStore";
import { IHotelBase } from "../store/search/models/Hotel";
import data from "../data";
import StyleGuide from "../styles/StyleGuide";
import Button from "./shared/Button";
import Stars from "./Stars";
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  hotelName: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.dark,
    marginBottom: StyleGuide.spacing / 3,
  },
  locationName: {
    ...StyleGuide.typography.title3,
    color: StyleGuide.palette.dark,
    marginBottom: StyleGuide.spacing / 3,
  },
});

export const HotelCard = (props) => {
  const { item, index } = props;
  let { name, location, images, minPrice } = item;
  images = [require("../../assets/hotels/hotel_3/common/1.jpg")];
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
        onPress={() => console.error("go to hotel")}
        style={{ flex: 3 }}
        key={item.key}
      >
        <Image
          source={images[0]}
          style={{
            width: width - StyleGuide.spacing * 2,
            height: "100%",
          }}
        />
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
        <Text style={styles.hotelName}>
          Sun and see in Antalia in magic Turkey
        </Text>
        <Text style={styles.locationName}>Grand Royal</Text>
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
            <Text style={StyleGuide.typography.caption}>Price</Text>
            <Text style={StyleGuide.typography.headline}>$1,500</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text style={StyleGuide.typography.caption}>Rating</Text>
            {/* <Stars rating={4.5}> */}
            <Stars rating={5} size={16} />
          </View>
          <Button
            style={{
              height: 30,
              width: 90,
              backgroundColor: StyleGuide.palette.dark,
              color: StyleGuide.palette.white,
            }}
            handler={() => console.warn("inside")}
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
  const { scroll, handleScroll } = props;
  console.warn(handleScroll);
  const [hotels, setHotels] = useState<IHotelBase[] | []>([]);
  useEffect(() => {
    setHotels(data.hotels);
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

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   FlatList,
//   Text,
//   StyleSheet,
//   Image,
//   Dimensions,
//   Animated,
//   TouchableOpacity,
// } from "react-native";
// import { useSelector } from "react-redux";
// import { AppState } from "../store/rootStore";
// import { IHotelBase } from "../store/search/models/Hotel";
// import data from "../data";
// import StyleGuide from "../styles/StyleGuide";

// const styles = StyleSheet.create({
//   hotelName: {
//     ...StyleGuide.typography.subhead,
//     color: "white",
//     position: "absolute",
//   },
//   locationName: {
//     ...StyleGuide.typography.title3,
//     color: StyleGuide.palette.white,
//     position: "absolute",
//     // left: 15,
//     // bottom: 15,
//   },
//   priceContainer: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: StyleGuide.palette.dark,
//     position: "absolute",
//   },
// });

// const HotelCard = (props) => {
//   const { item, index, scrollY, middleIndex } = props;
//   console.warn(scrollY);
//   let { name, location, images, minPrice } = item;
//   images = [require("../../assets/hotels/hotel_3/common/1.jpg")];
//   const [imageWidth, imageHeight] = [Dimensions.get("screen").width, 150];
//   const itemHeight = 200 + 15;
//   // const inputRange = [
//   //   -1,
//   //   0,
//   //   index * itemHeight,
//   //   (index + 2) * itemHeight,
//   // ];
//   const inputRange = [
//     1,
//     //   1,
//     itemHeight,
//     (index + 1) * itemHeight,
//     // (index + 2) * itemHeight,
//   ];
//   const scale = scrollY.interpolate({
//     inputRange,
//     outputRange: [1, 1.5, 1],
//   });
//   // let offset = index*200
//   return (
//     <View
//       style={{
//         justifyContent: "center",
//         alignItems: "center",
//         height: 200,
//         flex: 1,
//         //   justifyContent: "center",
//         //   alignItems: "center",
//         marginBottom: StyleGuide.spacing,
//         borderRadius: 15,
//         marginHorizontal: StyleGuide.spacing,
//       }}
//     >
//       <View
//         style={[
//           StyleSheet.absoluteFillObject,
//           {
//             overflow: "hidden",
//             //   width: width - 50,
//           },
//         ]}
//       >
//         <TouchableOpacity
//           activeOpacity={0.9}
//           // delayPressIn={50}
//           onPress={() => console.error("jerre")}
//           key={item.key}
//           style={
//             {
//               //   width: 150,
//             }
//           }
//         >
//           <Animated.View
//             style={{
//               transform: [{ scale: index == middleIndex ? scale : 1 }],
//             }}
//           >
//             <Image
//               source={images[0]}
//               style={{
//                 //   width: "90%",
//                 // Without height undefined it won't work
//                 height: 200,
//                 // figure out your image aspect ratio
//                 aspectRatio: 3 / 2,
//                 //   transform: [{ scale }],
//               }}
//             />
//             <View
//               style={[
//                 StyleSheet.absoluteFillObject,
//                 { backgroundColor: "rgba(255, 255, 255, 0.1)" },
//               ]}
//             />
//           </Animated.View>
//           {/* </View> */}
//           {/* <Text style={styles.hotelName}>hotel name</Text>
//           <Text style={styles.locationName}>hotel name</Text>
//           <View style={styles.priceContainer}></View> */}
//           {/* <View>
//           <Text>{item.name}</Text>
//         </View>
//         <View>
//           <Text>{data.cities[item.location].name}</Text>
//         </View> */}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const { width, height } = Dimensions.get("screen");
// const middle = height / 2;
// const SearchResults = () => {
//   const searchState = useSelector((state: AppState) => state.search);
//   const { dates, location, loading } = searchState;
//   const [scroll, setScroll] = useState(0);
//   const [hotels, setHotels] = useState<IHotelBase[] | []>([]);
//   const scrollY = React.useRef(new Animated.Value(0)).current;
//   const [middleIndex, setMiddleIndex] = useState(null);
//   const onScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//     {
//       useNativeDriver: true,
//       listener: (event) => {
//         const offsetY = event.nativeEvent.contentOffset.y;
//       },
//     }
//   );
//   useEffect(() => {
//     setHotels(data.hotels);
//   }, [scrollY]);

//   const [inViewPort, setInViewPort] = useState(0);

//   //   const [scrollY] = useState(new Animated.Value(0));

//   const translateY = scrollY.interpolate({
//     inputRange: [0, 150],
//     outputRange: [0, 150],
//     extrapolate: "clamp",
//   });

//   const viewabilityConfig = React.useRef({
//     itemVisiblePercentThreshold: 50,
//     waitForInteraction: true,
//     minimumViewTime: 5,
//   });

//   const onViewableItemsChanged = React.useRef(({ viewableItems, changed }) => {
//     if (viewableItems && viewableItems.length > 0) {
//       //   setInViewPort(changed[0].index);
//       setMiddleIndex(viewableItems[0 + 1].index);
//     }
//   });

//   return loading ? (
//     <Text>Loading...</Text>
//   ) : (
//     <View style={{ justifyContent: "center" }}>
//       {
//         <Animated.FlatList
//           onScroll={onScroll}
//           data={hotels}
//           onViewableItemsChanged={onViewableItemsChanged.current}
//           viewabilityConfig={viewabilityConfig.current}
//           alwaysBounceVertical={false}
//           renderItem={({ item, index }) => {
//             return (
//               <HotelCard
//                 item={item}
//                 index={index}
//                 scrollY={scrollY}
//                 middleIndex={middleIndex}
//               />
//             );
//           }}
//         />
//       }
//     </View>
//   );
// };

// export default SearchResults;
