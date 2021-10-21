import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
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
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "blue",
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "blue",
    },
  },
};
const MealsTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "yellow",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: "yellow",
        },
      });

export default createAppContainer(MealsTabNavigator);
