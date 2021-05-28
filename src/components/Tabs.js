import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { SafeAreaView, Platform, StatusBar, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import News from "../Screens/News";
import Tech from "../Screens/Tech";
import Health from "../Screens/Health";
import Business from "../Screens/Business";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <News />
    </SafeAreaView>
  );
}

function TechScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Tech />
    </SafeAreaView>
  );
}

function HealthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Health />
    </SafeAreaView>
  );
}

function BusinessScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Business />
    </SafeAreaView>
  );
}

const Tab = createMaterialBottomTabNavigator();
const tabColour = "#222831";

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Headlines"
        component={HomeScreen}
        options={{
          tabBarLabel: "Headlines",
          tabBarColor: tabColour,
          tabBarIcon: ({ color }) => (
            <Icon name="newspaper" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Technology"
        component={TechScreen}
        options={{
          tabBarLabel: "Technology",
          tabBarColor: tabColour,
          tabBarIcon: ({ color }) => (
            <Icon name="laptop-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Health"
        component={HealthScreen}
        options={{
          tabBarLabel: "Health",
          tabBarColor: tabColour,
          tabBarIcon: ({ color }) => (
            <Icon name="heart-circle-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Business"
        component={BusinessScreen}
        options={{
          tabBarLabel: "Business",
          tabBarColor: tabColour,
          tabBarIcon: ({ color }) => (
            <Icon name="trending-up" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Tabs() {
  return <MyTabs />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
