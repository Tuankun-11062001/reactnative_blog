import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import Categories from "../components/Categories";
import Post from "../components/Post";

const { Width, Height } = Dimensions.get("window");

const Featured = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <Text
          style={{
            paddingVertical: 20,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Featured
        </Text>

        <ScrollView
          style={{ padding: 20 }}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        >
          <View>
            <Categories data={navigation} />
          </View>
          <View style={{ marginTop: 20, position: "relative", width: 90 }}>
            <Text
              style={{ fontSize: 17, fontWeight: "500", textAlign: "center" }}
            >
              New Post{" "}
            </Text>
            <Text
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: 1,
                backgroundColor: "lightgray",
              }}
            ></Text>
          </View>
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Featured;

const styles = StyleSheet.create({});
