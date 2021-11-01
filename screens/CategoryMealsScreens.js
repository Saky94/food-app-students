import React from "react";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import meals from "../store/Reducers/meals";
import DefaultText from "../components/DefaultText";
import { View, StyleSheet } from "react-native";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filters);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryId.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.textStyle}>
        <DefaultText>No meals found!</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectCategory.title,
  };
};
const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
