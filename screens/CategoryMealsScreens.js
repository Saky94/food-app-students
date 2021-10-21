import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { CATEGORIES } from "../data/dummy-data";



const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text>The Categories Meal Screen!</Text>
            <Text>{selectCategory.title}</Text>
            <Button title="See Meals Details" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail' });
            }}/>
             <Button title="BACK" onPress={() => {
                props.navigation.goBack();
            }}/>
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
      const catId = navigationData.navigation.getParam('categoryId');
      const selectCategory = CATEGORIES.find(cat => cat.id === catId);
      return {
        headerTitle: selectCategory.title
        
      };
};
    

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
export default CategoryMealsScreen;