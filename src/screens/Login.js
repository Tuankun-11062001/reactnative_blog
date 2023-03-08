import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import register from "../assets/register.png";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const Login = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          onPress={goBack}
          style={{
            padding: 10,
            backgroundColor: "#f6f6f6",
            borderRadius: Platform.OS === "ios" ? 30 : "none",
            position: "absolute",
            left: 20,
            top: 45,
            zIndex: 9,
          }}
        >
          <IconIonicons name="chevron-back" size={20} color={"gray"} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Image
            source={register}
            resizeMode="contain"
            style={{
              position: "relative",
              top: -200,
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: "20%",
            left: 20,
            right: 20,
            gap: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "#08b1bd",
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            Login
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#f6f6f6",
              padding: 10,
              borderRadius: Platform.OS === "ios" ? 20 : "none",
              marginVertical: 10,
            }}
          >
            <IconAntDesign
              name="user"
              size={16}
              color={"gray"}
              style={{ marginRight: 10 }}
            />
            <TextInput
              placeholder="Your User Name"
              placeholderTextColor={"gray"}
              style={{ flex: 1 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#f6f6f6",
              padding: 10,
              borderRadius: Platform.OS === "ios" ? 20 : "none",
              marginVertical: 10,
            }}
          >
            <IconAntDesign
              name="lock"
              size={16}
              color={"gray"}
              style={{ marginRight: 10 }}
            />
            <TextInput
              secure={true}
              placeholder="Your Password"
              placeholderTextColor={"gray"}
              style={{ flex: 1 }}
            />
          </View>
          <TouchableOpacity
            style={{
              // position: "relative",
              // left: "50%",
              // transform: "translateX(-50%)",

              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
              paddingHorizontal: 35,
              borderRadius: Platform.OS === "ios" ? 20 : "none",
              backgroundColor: "#08b1bd",
              marginVertical: 10,

              // alignSelf: "flex-start",
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Login</Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "gray",
              marginVertical: 10,
            }}
          >
            Login With
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity style={{ marginHorizontal: 10 }}>
              <IconAntDesign name="facebook-square" size={16} color={"gray"} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10 }}>
              <IconAntDesign name="instagram" size={16} color={"gray"} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10 }}>
              <IconAntDesign name="twitter" size={16} color={"gray"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({});
