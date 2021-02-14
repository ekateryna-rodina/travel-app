import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import StyleGuide from "../styles/StyleGuide";
import { LinearGradient } from "expo-linear-gradient";
import SearchBarContainer from "../components/shared/search/SearchBarContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import Button from "../components/shared/Button";
import { connect, useSelector, useDispatch } from "react-redux";
import { AppState } from "../store/rootStore";
import {
  incrementCount,
  decrementCount,
} from "../store/counter/CounterActions";

/*Styles*/
const styles = {
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.light,
  },
  linearGradient: {
    flex: 1,
    bottom: 0,
  },
  contentContainer: {
    paddingStart: 15,
  },
};

// type RootStackParamList = {
//   Home: undefined;
//   // Profile: { userId: string };
//   // Feed: { sort: 'latest' | 'top' } | undefined;
// };

// type HomeScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>
// interface HomeScreenProps {

//   navigation : StackNavigationProp
// }

const HomeScreen = (): JSX.Element => {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  const counter = useSelector((state: AppState) => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "rgba(45, 62, 82, 0.4)"]}
        locations={[0.6, 0.8]}
        style={styles.linearGradient}
      >
        <SearchBarContainer />
        <Text>{counter.count}</Text>
        <Button
          title={"increment"}
          width={150}
          height={30}
          backgroundColor={"blue"}
          handler={() => dispatch(incrementCount())}
        >
          Increase
        </Button>
        <Button
          // children={React.Children}
          title={"decrement"}
          width={150}
          height={30}
          backgroundColor={"orange"}
          handler={() => dispatch(decrementCount())}
        >
          Decrease
        </Button>
        {/* <View style={styles.contentContainer}>
          <Title text="15 cities to explore" />
          <CardList items={cities} type="city" />
          <Title text="Tranding stays" />
          <CardList items={cities} type="hotel" />
          <Title text="What people say" />
          <CardList items={cities} type="text" />
        </View>
        <Footer /> */}
      </LinearGradient>
    </View>
  );
};

// const mapStateToProps = (state) => {
//   const { counter } = state;
//   return { counter };
// };

export default HomeScreen;
