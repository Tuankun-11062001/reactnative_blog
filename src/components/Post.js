import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Post = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("Read")}
    >
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2.62,
          elevation: 4,
        }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 170,
            borderRadius: 20,
          }}
        />
        <View style={{ marginTop: 5 }}>
          <Text
            style={{
              marginTop: 5,
              fontSize: 14,
              color: "gray",
              fontWeight: "500",
            }}
          >
            18 - 11 - 2022
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 19,
              fontWeight: "600",
              color: "#222",
            }}
          >
            What is Colour in the Leaf
          </Text>
          <Text style={{ marginTop: 5, color: "gray", fontSize: 14 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
