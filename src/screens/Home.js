import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from "react-native";
import React from "react";
import menuIcon from "../assets/menu.png";
import searchIcon from "../assets/search.png";
import filterIcon from "../assets/filter.png";
import Card from "../components/Card";
import Cards from "../components/Cards";

const Home = ({ navigation }) => {
  const handleDrawer = () => {
    navigation.openDrawer();
  };
  const gotoUser = () => {
    navigation.navigate("User");
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        padding: 10,
      }}
    >
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity onPress={handleDrawer}>
            <Image
              source={menuIcon}
              style={{
                width: 35,
                height: 35,
                tintColor: "gray",
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={gotoUser}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1668342448695-1e5256d149d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                width: 35,
                height: 35,
                borderRadius: Platform.OS === "ios" ? 50 : 50.0,
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Blogs
        </Text>
        <View
          style={{
            backgroundColor: "#f6f6f6",
            borderRadius: Platform.OS === "ios" ? 30 : 30.0,
          }}
        >
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          >
            <Image
              source={searchIcon}
              style={{
                width: 25,
                height: 25,
                marginRight: 10,
                tintColor: "gray",
              }}
              resizeMode="contain"
            />
            <TextInput
              placeholder="Search Here"
              placeholderTextColor={"gray"}
              style={{ flex: 1 }}
            />
            <TouchableOpacity>
              <Image
                source={filterIcon}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Cards navigation={navigation} />
    </View>
  );
};

export default Home;
