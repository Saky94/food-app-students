import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform, Text } from "react-native";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "yellow" : colors.accentColor,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
};
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
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: "Categories", ovo moze ali ne dozvoljava return ili tako nesto
    defaultNavigationOptions: defaultStackNavOptions,
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
      tabBarLabel: <Text style={{ fontFamily: "open-sans-bold" }}>Mealss</Text>,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "red",
      tabBarLabel: (
        <Text style={{ fontFamily: "open-sans-bold" }}>Favoritess</Text>
      ),
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
          labelStyle: {
            fontFamily: "open-sans",
          },
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    navigationOptions: {
      drawerLabel: "filters",
    },
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsTabNavigator,
      navigationOptions: { drawerLabel: "favorite meals" },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: "yellow",
      labelStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
      },
    },
  }
);
export default createAppContainer(MainNavigator);
