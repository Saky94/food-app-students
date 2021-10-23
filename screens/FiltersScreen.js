import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: "yellow" }}
        thumbColor="blue"
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};
const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(changeValue) => setIsGlutenFree(changeValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(changeValue) => setIsLactoseFree(changeValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(changeValue) => setIsVegan(changeValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(changeValue) => setIsVegetarian(changeValue)}
      />
    </View>
  );
};

export default FiltersScreen;
FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters!",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center" },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});
