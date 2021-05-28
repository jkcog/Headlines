import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import ReaderView from "react-native-reader";

export default function ReadArticle({ route, navigation }) {
  const { title, url } = route.params;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#222831" />
      <ReaderView
        url={url}
        title={title}
        containerStyle={{ backgroundColor: "#eeeeee" }}
        titleStyle={{
          marginBottom: 20,
          textAlign: "center",
          fontWeight: "bold",
          color: "#393e46",
        }}
      />
    </>
  );
}
