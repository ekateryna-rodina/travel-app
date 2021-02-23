// import React, { useState, useRef, useEffect } from "react";
// import { View, StyleSheet } from "react-native";
// import Animated from "react-native-reanimated";
// import BasicInfoBanner from "../components/BasicInfoBanner";
// import ShowcaseList from "../components/shared/showCase/ShowcaseList";
// import data from "../data";
// import StyleGuide from "../styles/StyleGuide";
// import Rooms from "../components/Rooms";
// import Amenities from "../components/Amenities";
// import Location from "../components/Location";
// import Activities from "../components/Activities";
// import { AntDesign } from "@expo/vector-icons";
// import BackHeader from "../components/shared/BackHeader";
// import { onScroll, useValues } from "react-native-redash/lib/module/v1";

// const { height, width } = StyleGuide.size;
// let styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: StyleGuide.palette.light,
//   },
//   showcaseContainer: {
//     marginTop: -1000,
//     paddingTop: 1000,
//     alignItems: "center",
//     overflow: "hidden",
//   },
//   contentContainer: {
//     width: "100%",
//     height: "100%",
//   },
//   labelPosition: {
//     top: 0,
//     left: 15,
//     right: 0,
//     bottom: 70,
//   },
//   navigationContainer: {
//     width: "100%",
//     position: "absolute",
//     zIndex: 100,
//     backgroundColor: StyleGuide.palette.white,
//     height: 90,
//     top: 0,
//     left: 0,
//     right: 0,
//   },
// });
// //   animatedShowcase: (scrollA, showcaseHeight) => ({
// //     height: height * 0.45,
// //     transform: [
// //       {
// //         translateY: scrollA,
// //       },
// //       {
// //         scale: scrollA.interpolate({
// //           inputRange: [-showcaseHeight, 0, showcaseHeight, showcaseHeight + 1],
// //           outputRange: [2.8, 1, 1, 1],
// //         }),
// //       },
// //     ],
// //   }),
// // });
// const HotelScreen = ({ navigation }) => {
//   const hotelData = data.hotels[0];
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const activities = data.activities.filter((a) => a.location === 1);
//   const {
//     images,
//     name,
//     rating,
//     reviews,
//     description,
//     rooms,
//     amenities,
//     geoLocation,
//   } = hotelData;
//   console.warn(images);
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const { height, width } = StyleGuide.size;

//   const showcaseHeight = height * 0.2;
//   let animatedValue = scrollY.interpolate({
//     inputRange: [0, 80],
//     outputRange: [1, 0.8],
//   });
//   const [headerOpacity, setHeaderOpacity] = useState(0.5);

//   let headerColor = "rgba(255, 255, 255, 1)";
//   useEffect(() => {
//     setHeaderOpacity(scrollPosition > 240 ? 1 : 0);
//     console.warn(scrollPosition);
//   }, [scrollPosition]);

//   return (
//     <View>
//       {/* <NavigationBar /> */}
//       {/* <View
//         style={[styles.navigationContainer, { opacity: headerOpacity }]}
//       ></View> */}
//       <BackHeader {...{ scrollY }} />
//       <Animated.ScrollView
//         showsVerticalScrollIndicator={false}
//         nestedScrollEnabled={true}
//         scrollEventThrottle={16}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           {
//             useNativeDriver: true,
//           }
//         )}
//       >
//         <Animated.View>
//           <Animated.View
//             style={{
//               opacity: animatedValue,
//               height: height * 0.45,
//               transform: [
//                 {
//                   translateY: scrollY,
//                 },
//                 {
//                   scale: scrollY.interpolate({
//                     inputRange: [
//                       -showcaseHeight,
//                       0,
//                       showcaseHeight,
//                       showcaseHeight + 1,
//                     ],
//                     outputRange: [2.8, 1, 1, 1],
//                   }),
//                 },
//               ],
//             }}
//           >
//             <ShowcaseList
//               images={images}
//               labelPosition={styles.labelPosition}
//             />
//           </Animated.View>
//         </Animated.View>
//         <View style={styles.contentContainer}>
//           <BasicInfoBanner
//             name={name}
//             rating={rating}
//             reviews={reviews}
//             description={description}
//             // {...{ scrollY }}
//           />
//           <Rooms
//             rooms={rooms}
//             navigation={navigation}
//             // amenities={amenities}
//           />
//           <Amenities amenities={amenities} />
//           {/* <Location geoLocation={geoLocation} /> */}
//           <Activities activities={activities} />
//         </View>
//       </Animated.ScrollView>
//     </View>
//   );
// };

// export default HotelScreen;

import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import BasicInfoBanner from "../components/BasicInfoBanner";
import ShowcaseList from "../components/shared/showCase/ShowcaseList";
import data from "../data";
import StyleGuide from "../styles/StyleGuide";
import Rooms from "../components/Rooms";
import Amenities from "../components/Amenities";
import Location from "../components/Location";
import Activities from "../components/Activities";
import { AntDesign } from "@expo/vector-icons";
import BackHeader from "../components/shared/BackHeader";
import { onScroll, useValues } from "react-native-redash/lib/module/v1";

const { height, width } = StyleGuide.size;
let styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: StyleGuide.palette.light,
  },
  showcaseContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: "center",
    overflow: "hidden",
  },
  contentContainer: {
    width: "100%",
    height: "100%",
  },
  labelPosition: {
    top: 0,
    left: 15,
    right: 0,
    bottom: 70,
  },
  navigationContainer: {
    width: "100%",
    position: "absolute",
    zIndex: 100,
    backgroundColor: StyleGuide.palette.white,
    height: 90,
    top: 0,
    left: 0,
    right: 0,
  },
});
//   animatedShowcase: (scrollA, showcaseHeight) => ({
//     height: height * 0.45,
//     transform: [
//       {
//         translateY: scrollA,
//       },
//       {
//         scale: scrollA.interpolate({
//           inputRange: [-showcaseHeight, 0, showcaseHeight, showcaseHeight + 1],
//           outputRange: [2.8, 1, 1, 1],
//         }),
//       },
//     ],
//   }),
// });
const HotelScreen = ({ navigation }) => {
  const hotelData = data.hotels[0];
  const [scrollPosition, setScrollPosition] = useState(0);
  const activities = data.activities.filter((a) => a.location === 1);
  const {
    images,
    name,
    rating,
    reviews,
    description,
    rooms,
    amenities,
    geoLocation,
  } = hotelData;
  const scrollY = new Animated.Value(0);
  const { height, width } = StyleGuide.size;

  const showcaseHeight = height * 0.2;
  let animatedValue = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [1, 0.65],
  });
  const [headerOpacity, setHeaderOpacity] = useState(0.5);

  let headerColor = "rgba(255, 255, 255, 1)";
  //   useEffect(() => {
  //     // setHeaderOpacity(scrollPosition > 240 ? 1 : 0);
  //     // console.warn(scrollPosition);
  //     console.error(scrollY);
  //   }, []);

  return (
    <View>
      {/* <NavigationBar /> */}
      {/* <View
        style={[styles.navigationContainer, { opacity: headerOpacity }]}
      ></View> */}
      <BackHeader {...{ scrollY }} />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            // listener: (event) =>
            //   console.error(event.nativeEvent.contentOffset.y),
            useNativeDriver: true,
          }
        )}
      >
        <Animated.View
          style={{
            opacity: animatedValue,
            height: height * 0.45,
            transform: [
              {
                translateY: scrollY,
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [
                    -showcaseHeight,
                    0,
                    showcaseHeight,
                    showcaseHeight + 1,
                  ],
                  outputRange: [2.8, 1, 1, 1],
                }),
              },
            ],
          }}
        >
          <ShowcaseList images={images} labelPosition={styles.labelPosition} />
        </Animated.View>
        <View style={styles.contentContainer}>
          <BasicInfoBanner
            name={name}
            rating={rating}
            reviews={reviews}
            description={description}
            scrollY={scrollY}
          />
          <Rooms
            rooms={rooms}
            navigation={navigation}
            // amenities={amenities}
          />
          <Amenities amenities={amenities} />
          {/* <Location geoLocation={geoLocation} /> */}
          <Activities activities={activities} />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default HotelScreen;
