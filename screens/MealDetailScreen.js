import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meal detail screen</Text>
      <Text>Come on buddy</Text>
      <Button
        title="Go on Meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "" });
        }}
      />
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
