import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import colors from "../constants/colors";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
export default CategoryMealsScreen;

const styles = StyleSheet.create({});
