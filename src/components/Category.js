import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Category = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PostForCategory")}
      style={{
        width: 150,
        height: 100,
        marginRight: 10,
      }}
    >
      <Image
        resizeMode="cover"
        source={{
          uri: "https://images.unsplash.com/photo-1668603486663-5fd96b778391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: Platform.OS === "ios" ? 10 : "none",
        }}
      />

      <Text
        style={{
          position: "absolute",
          top: "50%",
          translateY: "-50%",
          color: "white",
          alignSelf: "center",
          textAlignVertical: "center",
        }}
      >
        Healthy
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({});
