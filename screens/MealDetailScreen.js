import React, { useEffect, useCallback } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/Actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItemStyle}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

//back
const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const currentMealsIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const taggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParam({mealTitle: selectedMeal.title});
    props.navigation.setParams({ toggFav: taggleFavoriteHandler });
  }, [taggleFavoriteHandler]);

  useEffect(() => {
      props.navigation.setParams({ isFav: currentMealsIsFavorite });
    },
    [currentMealsIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.datails}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.titleText}>Ingredients</Text>
      {selectedMeal.ingradients.map((ingradientElem) => (
        <ListItem key={ingradientElem}>{ingradientElem}</ListItem>
      ))}
      <Text style={styles.titleText}>Steps</Text>
      {selectedMeal.steps.map((stepElem) => (
        <ListItem key={stepElem}>{stepElem}</ListItem>
      ))}
    </ScrollView>
  );
};

//dugmici u tabBottom-u
MealDetailScreen.navigationOptions = (navigationData) => {
  // const mealId= navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggFav");
  const isFavorite = navigationData.navigation.getParam("isFav");
  // const selectedMeal= MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          tatle="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 18,
  },
  datails: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  listItemStyle: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
