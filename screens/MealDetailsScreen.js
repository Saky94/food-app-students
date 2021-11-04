import React, { useEffect, useCallback } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = props => {
    return <View style={styles.listItem}><DefaultText>{props.children}</DefaultText></View>;
}

const MealDetailsScreen = (props) => {
  const availableMeals = useSelector(state=>state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  },[dispatch, mealId]);

  useEffect(()=>{
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]) 

  useEffect(() => {
    props.navigation.setParams({isFav: currentMealIsFavorite});
  }, [currentMealIsFavorite]);

  const redElement = (selectedMeal.duration >= 15) ? <View style={styles.redElem}><DefaultText style={{color: 'white', textAlign: 'center'}}>{selectedMeal.duration}m</DefaultText></View> : <View><DefaultText>{selectedMeal.duration}m</DefaultText></View>;
  return (
    <ScrollView>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
        <View style={styles.details}>
            {redElement}
            <DefaultText style={{ width: '33%', height: '100%', paddingVertical: 10, textAlign: 'center' }}>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText style={{ width: '33%', height: '100%', paddingVertical: 10, textAlign: 'center' }}>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  // const mealId = navigationData.navigation.getParam("mealId");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const toggleFavorite =navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  image: {
      width: '100%',
      height: 200
  },
  details: {
      flexDirection: 'row',
      //padding: 15,
      justifyContent: 'center',
      alignItems: 'center'
  },
  title: {
      fontFamily: 'open-sans-bold',
      textAlign: 'center'
  },
  redElem:{
      backgroundColor: 'red',
      width: '34%',
      height: '100%',
      paddingVertical: 10
  },
  listItem: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10
      
  }
});

export default MealDetailsScreen;
