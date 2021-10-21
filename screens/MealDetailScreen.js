import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  console.log(mealId);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log(selectedMeal);
  return (
    <View style={styles.screen}>
      <Text>Meal title is {selectedMeal.title}</Text>
    </View>
  );
};
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="star"
          iconName="ios-star"
          onPress={() => {
            console.log("right icon");
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
