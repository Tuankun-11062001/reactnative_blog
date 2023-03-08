import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import backIcon from "../assets/back.png";
import { useNavigation } from "@react-navigation/native";
import Post from "../components/Post";

const PostForCategory = () => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 20 }}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              left: 0,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={backIcon}
              style={{ width: 20, height: 20, marginRight: 5 }}
              resizeMode="contain"
            />
            <Text>Back</Text>
          </TouchableOpacity>
          <Text
            style={{ textAlign: "center", fontSize: 18, fontWeight: "600" }}
          >
            Category of Read
          </Text>
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
};

export default PostForCategory;

const styles = StyleSheet.create({});
