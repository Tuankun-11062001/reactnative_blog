import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { WelcomeStackRouter, UserStackRouter } from "./Stack";
import BottomTab from "./BottomTab";

const DrawerRoute = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerRoute.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName="Welcome"
    >
      {/* <DrawerRoute.Screen name="Welcome" component={WelcomeStackRouter} /> */}
      <DrawerRoute.Screen name="Home" component={BottomTab} />
      <DrawerRoute.Screen name="User" component={UserStackRouter} />
    </DrawerRoute.Navigator>
  );
};

export default Drawer;
