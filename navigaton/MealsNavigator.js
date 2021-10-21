import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Platform } from "react-native";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      // navigationOptions: { // ovo je jace od defaultNavigationOptions, pa moze znaci ovde override
      //   headerStyle: {
      //     backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
      //   },
      //   headerTintColor:
      //     Platform.OS === "android" ? "yellow" : colors.accentColor,
      // }, moze ovako za svaki screen da se stavi default
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: "Categories", ovo moze ali ne dozvoljava return ili tako nesto
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "yellow" : colors.accentColor,
    },
  }
);
const MealsTabNavigator = createBottomTabNavigator(
  {
    Melas: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={20}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: "Favorites!",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={20} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "green",
    },
  }
);

export default createAppContainer(MealsTabNavigator);
