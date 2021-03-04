import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import StyleGuide from "../../../styles/StyleGuide";
import ShowcaseItem from "./ShowcaseItem";

interface IShowcaseList {
  images: number[];
  labelPosition: {};
  navigation: any;
  hotelKey: number;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ShowcaseList = (props: IShowcaseList) => {
  const { images, labelPosition, navigation, hotelKey } = props;
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={images}
        keyExtractor={(image, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ShowcaseItem
            image={item}
            total={images.length}
            current={index}
            labelPosition={labelPosition}
            navigation={navigation}
            hotelKey={hotelKey}
            isShared={index === 0}
          />
        )}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={StyleGuide.size.width}
      />
    </View>
  );
};

export default ShowcaseList;
