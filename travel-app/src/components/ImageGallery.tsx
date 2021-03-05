import { AntDesign } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import StyleGuide from "../styles/StyleGuide";

const { width, height } = StyleGuide.size;
const IMAGE_SIZE = 80;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: 75,
    zIndex: 100,
    backgroundColor: StyleGuide.palette.dark,
    paddingEnd: StyleGuide.spacing,
    paddingBottom: StyleGuide.spacing,
  },
  images: {
    flex: 1,
    backgroundColor: StyleGuide.palette.dark,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ImageGalleryProps {
  images: number[];
  galleryOpened: boolean;
  setGalleryOpened: () => void;
}
const ImageGallery = (props) => {
  const { images, galleryOpened, setGalleryOpened } = props;
  const [aIndex, setAIndex] = useState<number>(0);
  // declare before loading
  const topRef = useRef();
  const bottomRef = useRef();
  if (!images) {
    return <Text>Loading...</Text>;
  }

  React.useEffect(() => {
    topRef?.current?.scrollToOffset({
      offset: width * aIndex,
      animated: true,
    });
    if (
      aIndex * (IMAGE_SIZE + StyleGuide.spacing / 3) - IMAGE_SIZE / 2 >
      width / 2
    ) {
      bottomRef?.current?.scrollToOffset({
        offset:
          aIndex * (IMAGE_SIZE + StyleGuide.spacing / 3) -
          width / 2 +
          IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      offset: 0;
      animated: true;
    }
  }, [aIndex]);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={galleryOpened}>
        <View style={styles.header}>
          <TouchableWithoutFeedback
            onPress={() => setGalleryOpened(!galleryOpened)}
          >
            <AntDesign name="close" size={22} color="white" />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.images}>
          <FlatList
            data={images}
            ref={topRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment={"start"}
            decelerationRate={"fast"}
            snapToInterval={StyleGuide.size.width}
            keyExtractor={(item, index) => index.toString()}
            onMomentumScrollEnd={(ev) => {
              const index = ev.nativeEvent.contentOffset.x / width;
              setAIndex(Math.floor(index));
            }}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    width,
                    height,
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 75,
                    backgroundColor: StyleGuide.palette.dark,
                  }}
                >
                  <Image
                    style={[
                      {
                        width,
                        height: undefined,
                        aspectRatio: 3 / 2,
                      },
                    ]}
                    source={item}
                  />
                </View>
              );
            }}
          />

          <FlatList
            data={images}
            ref={bottomRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              position: "absolute",
              bottom: IMAGE_SIZE,
              paddingHorizontal: StyleGuide.spacing / 3,
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={() => setAIndex(index)}>
                  <Image
                    style={[
                      {
                        width: IMAGE_SIZE,
                        height: IMAGE_SIZE,
                        borderRadius: 10,
                        marginRight: StyleGuide.spacing / 3,
                        borderWidth: 2,
                        borderColor:
                          index === aIndex
                            ? StyleGuide.palette.primary
                            : "transparent",
                      },
                    ]}
                    source={item}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ImageGallery;
