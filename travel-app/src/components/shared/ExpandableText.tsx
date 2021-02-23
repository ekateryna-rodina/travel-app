import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import StyleGuide from "../../styles/StyleGuide";

interface IExpandableTextProps {
  text: string;
  isExpanded: boolean;
  setIsExpanded: Function;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.white,
    lineHeight: 20,
    flex: 1,
    flexWrap: "wrap",
  },
  expandLink: {
    marginVertical: StyleGuide.spacing / 3,
    color: StyleGuide.palette.white,
    fontWeight: "bold",
  },
  scrollView: { paddingEnd: StyleGuide.spacing },
});

const ExpandandableText = (props: IExpandableTextProps) => {
  const { text, isExpanded, setIsExpanded } = props;
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef?.current?.scrollTo({
      y: 0,
      animated: true,
    });
  });
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          <Text numberOfLines={isExpanded ? 50 : 4} style={styles.text}>
            {text}
          </Text>
        </ScrollView>
      </View>
      <TouchableOpacity onPress={toggleText}>
        <Text style={styles.expandLink}>
          {isExpanded ? "Read less" : "Read more"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpandandableText;
