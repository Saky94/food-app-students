import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
const renderGridItemFunction = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};
const CategoriesScreen = (props) => {
  console.log(props);
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItemFunction}
      numColumns={2}
    />
    // <View style={styles.screen}>
    //   <Text>Categories screen</Text>
    //   <Text>Surround me, it's easy</Text>
    //   <Button
    //     title="Go on Meals"
    //     onPress={() => {
    //       props.navigation.navigate({ routeName: "CategoryMeals" });
    //       // .push tehnicki refreshuje screen
    //       // .goBack nas vraca korak nazad .pop valjda isto
    //       // .popToTop vraca nas na root screen
    //       // .replace nam ne daje opciju da se vratimo strelicom (uzima samo string do skrina definisanog u mealNavigator)
    //     }}
    //   />
    // </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
