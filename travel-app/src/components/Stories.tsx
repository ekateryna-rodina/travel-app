import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CardTypes } from "../helpers/enums";
import StyleGuide from "../styles/StyleGuide";

const { height, width } = StyleGuide.size;
const styles = StyleSheet.create({
  missionContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: "65%",
    width: width - StyleGuide.spacing * 2,
    borderRadius: 45,
  },
  missionText: {
    padding: StyleGuide.spacing,
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.dark,
    textAlign: "center",
  },
  reviewContainer: {
    flexDirection: "row",
  },
  reviewImage: {
    borderRadius: 23,
    width: width / 2 - 45,
    height: undefined,
    aspectRatio: 3 / 2,
    alignSelf: "center",
  },
});
const _renderStoryCard = (item: IStory) => {
  if (item.type === CardTypes.mission) {
    return (
      <View style={styles.missionContainer}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text adjustsFontSizeToFit={true} style={styles.missionText}>
            {item.description}
          </Text>
        </ScrollView>
      </View>
    );
  } else if (item.type === CardTypes.review) {
    return (
      <View style={styles.missionContainer}>
        <Text
          style={{
            color: StyleGuide.palette.darkTransparent,
            ...StyleGuide.typography.subhead,
            marginTop: StyleGuide.spacing / 2,
            marginBottom: StyleGuide.spacing / 3,
            marginHorizontal: StyleGuide.spacing,
            textAlign: "center",
          }}
        >
          Review from {item.author} on {item.date}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ margin: StyleGuide.spacing / 3, flex: 1 }}>
            <Image style={styles.reviewImage} source={item.image} />
          </View>
          <View
            style={{
              flex: 1,
              height: height / 8,
              marginEnd: 20,
              marginBottom: 15,
              marginTop: 15,
            }}
          >
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
              <Text
                style={{
                  ...StyleGuide.typography.footnote,
                  color: StyleGuide.palette.dark,
                }}
              >
                {item.description}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  } else if (item.type === CardTypes.special) {
    return (
      <Text>
        <View
          style={{ width: 400, height: 100, flex: 1, flexDirection: "row" }}
        >
          <Image style={styles.reviewImage} source={item.image} />
          <Text>{item.description}</Text>
        </View>
      </Text>
    );
  } else {
    return <></>;
  }
};
export interface IStory {
  header?: string;
  subheader?: string;
  image?: number | null;
  description?: string;
  type: CardTypes;
  author?: string;
  date?: string;
}

interface IStoriesProps {
  items: IStory[];
}

export const Stories = (props: IStoriesProps) => {
  const { items } = props;
  return (
    <View style={{ flex: 2, height: height / 3 }}>
      <FlatList
        data={items}
        horizontal
        bounces={false}
        keyExtractor={(i, index) => index.toString()}
        renderItem={({ item, index }) => {
          return <View style={{ width }}>{_renderStoryCard(item)}</View>;
        }}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={width}
      />
    </View>
  );
};
export default Stories;
