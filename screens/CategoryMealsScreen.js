import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import colors from "../constants/colors";
import MealItem from "../components/MealItem";
const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        afford={itemData.item.affordability}
        complexity={itemData.item.complexity}
        onSelectMeal={() => {}}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
      {/* <Text>Category meals screen</Text>
      <Text>Hello darkness my old friend</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go on detail"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      /> */}
    </View>
  );
};
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
