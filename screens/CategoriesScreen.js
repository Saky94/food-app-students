import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import colors from "../constants/colors";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
const CategoriesScreen = (props) => {
  const renderGridItemFunction = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: itemData.item.id }, //id
          });
        }}
        color={itemData.item.color}
      />
    );
  };

  // console.log(props);
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItemFunction}
      numColumns={2}
    />
    // <View style={styles.screen}>
    //   <Text>Categories screen</Text>
    //   <Text>Surround me, it's easy</Text>
    //   <Button
    //     title="Go on Meals"
    //     onPress={() => {
    //       props.navigation.navigate({ routeName: "CategoryMeals" });
    //       // .push tehnicki refreshuje screen
    //       // .goBack nas vraca korak nazad .pop valjda isto
    //       // .popToTop vraca nas na root screen
    //       // .replace nam ne daje opciju da se vratimo strelicom (uzima samo string do skrina definisanog u mealNavigator)
    //     }}
    //   />
    // </View>
  );
};
CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Categories screen",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
  // headerStyle: {
  //   backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
  // },
  // headerTintColor: Platform.OS === "android" ? "white" : colors.accentColor,
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
