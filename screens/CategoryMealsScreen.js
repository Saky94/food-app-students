import React from "react";
import { View, StyleSheet } from 'react-native';
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = (props) => {

  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeal = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if(displayedMeal.length === 0) {
    return (<View style={styles.content}>
      <DefaultText>No meals found!</DefaultText>
    </View>);
  }
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
