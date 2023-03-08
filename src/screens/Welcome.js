import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import IconEntypo from "react-native-vector-icons/Entypo";
import Login from "../assets/login.png";
import { useNavigation } from "@react-navigation/native";

const Welcome = ({ navigation }) => {
  const navigation1 = useNavigation();

  const NavigateToRegister = () => {
    navigation.navigate("Register");
  };

  const NavigateToLogin = () => {
    navigation.navigate("Login");
  };

  const NavigateToHome = () => {
    navigation1.navigate("Home");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <Image
          source={Login}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            top: -100,
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "10%",
          left: 35,
        }}
      >
        <Text style={{ fontSize: 15, color: "gray" }}>Get Started</Text>
        <Text
          style={{
            fontSize: 23,
            color: "#222",
            width: 250,
            fontWeight: "bold",
            marginVertical: 20,
          }}
        >
          Publish Your Passion in Own Way It's Free
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={NavigateToRegister}
            style={{
              backgroundColor: Platform.OS === "ios" ? "#08b1bd" : "lightgray",
              paddingVertical: 10,
              paddingHorizontal: 35,
              borderRadius: Platform.OS === "ios" ? 30 : "none",
              overflow: "hidden",
              // width: "max-content",
              alignSelf: "flex-start",
              marginRight: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={NavigateToLogin}
            style={{
              borderWidth: 1,
              borderColor: "#222",
              paddingVertical: 10,
              paddingHorizontal: 40,
              borderRadius: Platform.OS === "ios" ? 30 : "none",
              // overflow: "hidden",

              // width: "max-content",
              alignSelf: "flex-start",
            }}
          >
            <Text style={{ color: "#222", fontSize: 15 }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#f6f6f6",
              padding: 10,
              borderRadius: Platform.OS === "ios" ? "50%" : "none",
              marginRight: 10,
            }}
          >
            <IconEntypo name="phone" size={15} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontSize: 15, marginRight: 5 }}>Continue with</Text>
            <TouchableOpacity onPress={NavigateToHome}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Phone No.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
