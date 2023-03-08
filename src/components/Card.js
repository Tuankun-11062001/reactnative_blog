import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import clap from "../assets/clap.png";
import chat from "../assets/chat.png";

const Card = ({ data }) => {
  const goToRead = () => {
    data.navigation.navigate("Read");
  };
  return (
    <TouchableOpacity onPress={goToRead}>
      <View
        style={{ flexDirection: "row", alignItems: "stretch", marginTop: 20 }}
      >
        <Image
          source={{
            uri: data.item.image,
          }}
          resizeMode="cover"
          style={{
            flex: 1,
            marginRight: 5,
            borderRadius: 10,
          }}
        />
        <View style={{ flex: 1, marginLeft: 5, paddingVertical: 10 }}>
          <Text
            style={{ fontSize: 13, fontWeight: "bold", color: "lightgray" }}
          >
            {data.item.time} mins Read
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              lineHeight: 25,
              paddingTop: 10,
              paddingBottom: 15,
            }}
          >
            {data.item.title}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <Text>{data.item.claps}k</Text>
              <Image
                source={clap}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 5,
                }}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>{data.item.chat}k</Text>
              <Image
                source={chat}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 5,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
