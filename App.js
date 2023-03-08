import React from "react";
import { WelcomeStackRouter } from "./src/routes/Stack";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./src/routes/Drawer";
export default function App() {
  return (
    <NavigationContainer>
      <WelcomeStackRouter />
      {/* <Drawer /> */}
    </NavigationContainer>
  );
}
