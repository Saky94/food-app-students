import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DefaultText = (props) => {
  return <Text style={{ fontFamily: "open-sans" }}>{props.children}</Text>;
};

export default DefaultText;

const styles = StyleSheet.create({});
