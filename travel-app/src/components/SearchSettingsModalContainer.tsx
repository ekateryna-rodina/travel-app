// import React from "react";
// import { View, FlatList, StyleSheet } from "react-native";
// import DestinationsModalContent from "./DestinationsModalContent";
// import GuestsModalContent from "./GuestsModalContent";
// import { useSelector } from "react-redux";
// import { AppState } from "../store/rootStore";
// import StyleGuide from "../styles/StyleGuide";
// import { IDestination } from "../store/search/models/Hotel";

// interface SearchSettingsModalContainer {
//   destinations: IDestination[];
// }

// const { width, height } = StyleGuide.size;
// const styles = StyleSheet.create({
//   modalContainer: {
//     width: width,
//     marginHorizontal: StyleGuide.spacing,
//   },
// });
// const SearchSettingsModalContainer = (props: SearchSettingsModalContainer) => {
//   const { destinations } = props;
//   const { selectedIndex } = useSelector((state: AppState) => state.modal);
//   const flatListRef = React.useRef<FlatList>(null);
//   const renderSearchDestinations = () => {
//     return (
//       <View style={styles.modalContainer}>
//         {<DestinationsModalContent destinations={destinations} />}
//       </View>
//     );
//   };
//   const renderGuestCountPicker = () => {
//     return <View style={styles.modalContainer}>{<GuestsModalContent />}</View>;
//   };
//   const modalComponents = [renderSearchDestinations, renderGuestCountPicker];

//   React.useEffect(() => {
//     flatListRef.current?.scrollToOffset({
//       offset: StyleGuide.size.width * selectedIndex,
//       animated: false,
//     });
//   }, [selectedIndex]);
//   return (
//     <View>
//       <FlatList
//         ref={flatListRef}
//         data={modalComponents}
//         scrollEnabled={false}
//         extraData={2}
//         horizontal
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={(item) => item.item()}
//       />
//     </View>
//   );
// };

// export default SearchSettingsModalContainer;
