import React from "react";
import {View, Text, Image , StyleSheet, Button, ScrollView} from 'react-native';
import { MEALS } from "../data/dummy-data";
import {Item, HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from "../components/DefaultText";

const ListItem = props =>{
    return (
    <View style={styles.listItemStyle}>
    <DefaultText>{props.children}</DefaultText>
    </View>
    );
}

//back
const MealDetailScreen = props => {
    const mealId= props.navigation.getParam('mealId');
    const selectedMeal= MEALS.find(meal => meal.id === mealId);
    return (
        <ScrollView>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <View style={styles.datails}>
            <DefaultText>{selectedMeal.duration}m</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.titleText}>Ingredients</Text>
        {selectedMeal.ingradients.map(ingradientElem => 
        <ListItem key={ingradientElem}>{ingradientElem}</ListItem>)}
        <Text style={styles.titleText}>Steps</Text>
        {selectedMeal.steps.map(stepElem => 
        <ListItem key={stepElem}>{stepElem}</ListItem>)}
        </ScrollView>
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
    titleText:{
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 18
    },
    datails:{
        flexDirection: 'row',
        padding:15,
        justifyContent: 'space-around'
    },
    image:{
        width: '100%',
        height: 200
    },
    listItemStyle:{
        marginVertical: 10,
        marginHorizontal:20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding:10
    }
});
 
export default MealDetailScreen;