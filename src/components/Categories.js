import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Category from "./Category";

const Categories = ({}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Category />
      <Category />
      <Category />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
