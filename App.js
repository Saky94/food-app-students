import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, StatusBar } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./navigaton/MealsNavigator";
import mealsReducer from "./store/reducers/meals";
import { enableScreens } from "react-native-screens";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from "react-native-safe-area-context";

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App(props) {
  enableScreens();
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor="blue" {...props} />
      <SafeAreaView style={styles.container}>
        <MealsNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
