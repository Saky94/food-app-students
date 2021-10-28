import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return(
        <MealList listData={favMeals} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites!'
};

FavoritesScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Favorite Meals',
    headerLeft: ()=> (
        
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="menu" iconName="ios-menu" onPress={()=>{
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
        
    )};
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;