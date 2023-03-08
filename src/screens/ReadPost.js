import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import back from "../assets/back.png";
import bookmark from "../assets/bookmark.png";

const ReadPost = ({ navigation }) => {
  const [bookmarkActive, setBookmarkActive] = useState(false);

  const handleBookmark = () => {
    setBookmarkActive((prev) => !prev);
    Alert.alert("insert bookmark");
  };

  const goToHome = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <SafeAreaView>
        <TouchableOpacity
          style={{
            paddingVertical: 20,
          }}
          onPress={goToHome}
        >
          <Image
            source={back}
            resizeMode="contain/"
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1668369411047-4161a6ea9a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 200,
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          onPress={handleBookmark}
          style={{
            position: "absolute",
            right: 30,
            bottom: -10,
            width: 35,
            height: 35,
            padding: 5,
            borderRadius: "50%",
            backgroundColor: "#f6f6f6",
          }}
        >
          <Image
            source={bookmark}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              alignSelf: "center",
              marginTop: 3,
              tintColor: bookmarkActive ? "orange" : "lightgray",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 14, color: "gray" }}>
          By{" "}
          <Text style={{ fontWeight: "bold", color: "#222" }}>Tuan Nguyen</Text>
        </Text>
        <Text style={{ marginTop: 20, fontSize: 25, fontWeight: "600" }}>
          How to become master in colour palette?
        </Text>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={{ paddingVertical: 10 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={{ marginVertical: 5, paddingVertical: 10 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Text style={{ paddingVertical: 10 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages
        </Text>
      </View>
    </ScrollView>
  );
};

export default ReadPost;
