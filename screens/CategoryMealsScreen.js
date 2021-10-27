import React from "react";
import { StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {

  const catId = props.navigation.getParam("categoryId");
  const displayedMeal = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealList listData={displayedMeal} navigation={props.navigation} />
  );
};
//it will pass an object with some data that should help you
//returns object
CategoryMealsScreen.navigationOptions = (navigationData) => {
  //console.log(navigationData)
  //we see that we have prop getParam and then we will use it
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((elem) => elem.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
