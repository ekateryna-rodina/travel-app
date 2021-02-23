import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import StyleGuide from "../../../styles/StyleGuide";
import ShowcaseItem from "./ShowcaseItem";
import { AntDesign } from "@expo/vector-icons";
// import ShowcaseItem from "./ShowCaseItem";

interface IShowcaseList {
  images: number[];
  labelPosition: {};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ShowcaseList = (props: IShowcaseList) => {
  const { images, labelPosition } = props;
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
