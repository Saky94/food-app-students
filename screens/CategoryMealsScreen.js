import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Button title="Read more..." onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'})
            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.goBack();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;