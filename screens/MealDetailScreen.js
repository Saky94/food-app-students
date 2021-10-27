import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { MEALS } from "../data/dummy-data";
import {Item, HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

//back
const MealDetailScreen = props => {
    const mealId= props.navigation.getParam('mealId');
    const selectedMeal= MEALS.find(meal => meal.id === mealId);
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop();
            }}/>
        </View>
    );
};

//dugmici u tabBottom-u
MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId= navigationData.navigation.getParam('mealId');
    const selectedMeal= MEALS.find(meal => meal.id === mealId);
    return{
        headerTitle: selectedMeal.title,
        headerRight: () => 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
         <Item tatle='Favorite' iconName='ios-star' 
         onPress={() => {
             console.log('Mark is favorite!');
         }} 
         /> 
        </HeaderButtons>
    };
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
export default MealDetailScreen;