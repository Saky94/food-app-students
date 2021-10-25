import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import DefaultText from "./DefaultText";
const MealItem = (props) => {
  return (
    <View style={styles.mealItemWrap}>
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
          <View>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
              <ImageBackground
                source={{ uri: props.image }}
                style={styles.bgImage}
              >
                <View style={styles.titleContainer}>
                  <Text numberOfLines={1} style={styles.title}>
                    {props.title}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
              <DefaultText>{props.duration}min</DefaultText>
              <DefaultText>{props.complexity}</DefaultText>
              <DefaultText>{props.afford}</DefaultText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItemWrap: {
    margin: 10,
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    overflow: "hidden",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "90%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
