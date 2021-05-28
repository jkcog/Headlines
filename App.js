import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";

import ReadArticle from "./src/Screens/ReadArticle";
import Tabs from "./src/components/Tabs";

const Stack = createStackNavigator();

function ReaderIcon() {
  return <Entypo name="open-book" size={24} color="white" />;
}

function App() {
  return (
    <NavigationContainer style={styles.readerScreen}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#ffffff",
          headerStyle: { backgroundColor: "#222831" },
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Tabs}
        />
        <Stack.Screen
          options={{ headerTitle: (props) => <ReaderIcon /> }}
          name="ReadArticle"
          component={ReadArticle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  readerScreen: {
    flex: 1,
    backgroundColor: "#222831",
  },
});
