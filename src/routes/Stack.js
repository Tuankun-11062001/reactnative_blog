import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import User from "../screens/User";
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Featured from "../screens/Featured";
import Premium from "../screens/Premium";
import Drawer from "./Drawer";
import ReadPost from "../screens/ReadPost";
import PostForCategory from "../screens/PostForCategory";

const HomeStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const LastestStack = createNativeStackNavigator();
const FeaturedStack = createNativeStackNavigator();
const PremiumStack = createNativeStackNavigator();
const WelcomeStack = createNativeStackNavigator();

const WelcomeStackRouter = () => {
  return (
    <WelcomeStack.Navigator screenOptions={{ headerShown: false }}>
      <WelcomeStack.Screen name="welcome">
        {(props) => <Welcome {...props} />}
      </WelcomeStack.Screen>
      <WelcomeStack.Screen name="Register">
        {(props) => <Register {...props} />}
      </WelcomeStack.Screen>
      <WelcomeStack.Screen name="Login">
        {(props) => <Login {...props} />}
      </WelcomeStack.Screen>
      {/* <HomeStack.Screen name="Home">
        {(props) => <Home {...props} />}
      </HomeStack.Screen> */}
      <WelcomeStack.Screen name="Home">
        {(props) => <Drawer {...props} />}
      </WelcomeStack.Screen>
    </WelcomeStack.Navigator>
  );
};

// const HomeStackRouter = () => {
//   return (
//     <HomeStack.Navigator screenOptions={{ headerShown: false }}>
//       <HomeStack.Screen name="Home">
//         {(props) => <Home {...props} />}
//       </HomeStack.Screen>
//     </HomeStack.Navigator>
//   );
// };

const LastestStackRouter = () => {
  return (
    <LastestStack.Navigator screenOptions={{ headerShown: false }}>
      <LastestStack.Screen name="Home">
        {(props) => <Home {...props} />}
      </LastestStack.Screen>
      <LastestStack.Screen name="Read">
        {(props) => <ReadPost {...props} />}
      </LastestStack.Screen>
    </LastestStack.Navigator>
  );
};

const FeaturedStackRouter = () => {
  return (
    <FeaturedStack.Navigator screenOptions={{ headerShown: false }}>
      <FeaturedStack.Screen name="Featured">
        {(props) => <Featured {...props} />}
      </FeaturedStack.Screen>

      <FeaturedStack.Screen name="PostForCategory">
        {(props) => <PostForCategory {...props} />}
      </FeaturedStack.Screen>
      <FeaturedStack.Screen name="Read">
        {(props) => <ReadPost {...props} />}
      </FeaturedStack.Screen>
    </FeaturedStack.Navigator>
  );
};

const PremiumStackRouter = () => {
  return (
    <PremiumStack.Navigator screenOptions={{ headerShown: false }}>
      <PremiumStack.Screen name="Premium">
        {(props) => <Premium {...props} />}
      </PremiumStack.Screen>
    </PremiumStack.Navigator>
  );
};

const UserStackRouter = () => {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="user">
        {(props) => <User {...props} />}
      </UserStack.Screen>
    </UserStack.Navigator>
  );
};

export {
  UserStackRouter,
  WelcomeStackRouter,
  LastestStackRouter,
  FeaturedStackRouter,
  PremiumStackRouter,
};
