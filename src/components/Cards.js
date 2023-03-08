import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";
const data = [
  {
    time: 5,
    title: "Make Design System People want to use",
    claps: 20.5,
    chat: 10.7,
    image:
      "https://images.unsplash.com/photo-1664575599730-0814817939de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    time: 10,
    title: "Hello this is World",
    claps: 10.5,
    chat: 2.7,
    image:
      "https://images.unsplash.com/photo-1668463876833-339717e58c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    time: 2,
    title: "What Song is this?",
    claps: 10.5,
    chat: 14.7,
    image:
      "https://images.unsplash.com/photo-1668462503626-1309916ca702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    time: 20,
    title: "What is Bluetooth Interface",
    claps: 53.5,
    chat: 56.7,
    image:
      "https://images.unsplash.com/photo-1668437688194-897cf6d82161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    time: 20,
    title: "What is Bluetooth Interface",
    claps: 53.5,
    chat: 56.7,
    image:
      "https://images.unsplash.com/photo-1668493468254-597d540e28a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const Cards = ({ navigation }) => {
  return (
    <FlatList
      key={data.title}
      data={data}
      renderItem={({ item, index }) => (
        <Card data={{ item, navigation }} key={index} />
      )}
    />
  );
};

export default Cards;

const styles = StyleSheet.create({});
