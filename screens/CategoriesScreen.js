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
const CategoriesScreen = (props) => {
  const renderGridItemFunction = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  console.log(props);
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
CategoriesScreen.navigationOptions = {
  headerTitle: "Categories screen",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.accentColor,
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
