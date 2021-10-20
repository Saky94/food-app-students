import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import colors from "../constants/colors";
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

export default createAppContainer(MealsNavigator);
