import React from "react";
import { Platform, Text } from "react-native";
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

const defaultStackOptions = {  
  headerStyle: {
backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",},
headerTitlesStyle: {
  fontFamily: 'open-sans'
},
headerBackTitleStyle:{

},
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
        tabBarColor: colors.primaryColor,
        tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
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
    tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Favorites',
    tabBarOptions: {
      activeColor: colors.accentColor,
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
          labelStyle: {
            fontFamily: 'open-sans-bold'
          },
          activeTintColor: colors.accentColor,
        },
      });
//override title
const FilterNavigator=createStackNavigator({
    Filters: FiltersScreen

    },{
      
      defaultNavigationOptions: defaultStackOptions,
    });
    
const MainNavigator = createDrawerNavigator({
    MealsFavs: { 
      screen: MealsTabNavigator,
    navigationOptions:{ drawerLabel: 'Meals'} },
    Filters: FilterNavigator
}, {
    contentOptions:{
      activeTintColor: colors.primaryColor,
      labelStyle:{
        fontFamily: 'open-sans'
      }
    }
});

export default createAppContainer(MainNavigator);
