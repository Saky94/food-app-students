import React from "react";
import { Text, View, StyleSheet, Button, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const ListItem = props => {
    return <View style={styles.listItem}><DefaultText>{props.children}</DefaultText></View>;
}

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

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
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as a favorite!");
          }}
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
