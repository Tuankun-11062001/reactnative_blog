import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  LastestStackRouter,
  FeaturedStackRouter,
  PremiumStackRouter,
} from "./Stack";
const Tabs = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          position: "absolute",
          bottom: -30,
        },
        tabBarLabelStyle: {
          position: "absolute",
          top: "50%",
          fontSize: 16,
        },
        // labelStyle: {
        //   position: "absolute",
        //   top: 0,
        //   bottom: 0,
        //   left: 0,
        //   right: 0,
        //   textAlignVertical: "center",
        // },
      }}
    >
      <Tabs.Screen name="Home" component={LastestStackRouter} />
      <Tabs.Screen name="Featured" component={FeaturedStackRouter} />
      <Tabs.Screen name="Premium" component={PremiumStackRouter} />
    </Tabs.Navigator>
  );
};

export default BottomTab;
