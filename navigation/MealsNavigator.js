import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreens";
import MealDetailScreen from "../screens/MealDetailScreen";
import colors from "../constants/colors";
import FavoritesSceen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackOptions = {  headerStyle: {
backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",},
headerTintColor: Platform.OS === "android" ? "white" : colors.primaryColor,};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: { headerTitle: "Meal Categories" },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackOptions,
  }
);

//stackNavigatorForFavorite

const FavoriteStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesSceen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackOptions,
  }
);

//BottomNavigator with icon
const tabScreenConfig = {       
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoriteStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
    },
    
    tabBarOptions: {
      activeTintColor: colors.accentColor,
    }
}};

const MealsTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: false,
        barStyle: {
          backgroundColor: colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: colors.accentColor,
        },
      });

const FilterNavigator=createStackNavigator({
    Filters: FiltersScreen

    });
    
const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsTabNavigator,
    Filters: FilterNavigator
});

export default createAppContainer(MainNavigator);
