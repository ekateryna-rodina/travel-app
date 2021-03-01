import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../../actions/search";
import { SearchModalSettingsTypes } from "../../../helpers/enums";
import {
  openModal,
  setModalContent,
} from "../../../store/common/modal/ModalAction";
import { AppState } from "../../../store/rootStore";
import StyleGuide from "../../../styles/StyleGuide";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "55%",
  },
  input: {
    opacity: 0.5,
    marginStart: StyleGuide.spacing,
    marginVertical: 1,
    fontSize: 20,
    color: StyleGuide.palette.black,
  },
});

const _renderSearchPlaceholder = () => {
  return (
    <View>
      <Text
        style={[
          { ...styles.input, ...StyleGuide.typography.body },
          { flex: 1 },
        ]}
      >
        Hi Kateryna!
      </Text>
      <Text
        style={[
          { ...styles.input, ...StyleGuide.typography.body },
          { flex: 1 },
        ]}
      >
        Where are you going next?
      </Text>
    </View>
  );
};

const SearchBar = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();
  const modalState = useSelector((state: AppState) => state.modal);
  const searchState = useSelector((state: AppState) => state.search);
  const navigation = useNavigation();
  const { isOpened } = modalState;
  const { location, loading } = searchState;
  const textInputFocusHandler = () => {
    dispatch(setModalContent(SearchModalSettingsTypes.destination));
    if (!isOpened) {
      dispatch(openModal());
    }
  };
  const [locationName, setLocationName] = useState("");

  const searchHandle = () => {
    dispatch(search());
  };

  useEffect(() => {
    setLocationName(location.locationKey ? location.city : location.country);
  }, [searchState]);
  useEffect(() => {
    if (searchState.hotels) {
      navigation.navigate("SeachResults");
    }
  }, [searchState]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={textInputFocusHandler}>
        {location && !location.locationKey && location.country === "" ? (
          _renderSearchPlaceholder()
        ) : (
          <Text
            style={[
              { ...styles.input, ...StyleGuide.typography.body },
              { flex: 1, opacity: 1, fontSize: 22, padding: 5 },
            ]}
          >
            {locationName}
          </Text>
        )}
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          backgroundColor: StyleGuide.palette.primaryTransparent,
          justifyContent: "center",
          alignItems: "center",
          marginEnd: StyleGuide.spacing / 3,
        }}
        onPress={() => searchHandle()}
      >
        <Entypo
          name="magnifying-glass"
          size={30}
          color={"rgba(0, 0, 0, 0.5)"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
