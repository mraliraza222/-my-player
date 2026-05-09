import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import App from "./App";
import VideoPlayer from "./VideoPlayer";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen 
          name="Home" 
          component={App} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="VideoPlayer" 
          component={VideoPlayer} 
          options={{ title: "My Player" }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
