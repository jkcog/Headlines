import React, { Component } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Card, Text, Divider } from "react-native-elements";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

class Article extends Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url,
      content,
    } = this.props.article;
    const { navigation } = this.props;

    const time = moment(publishedAt || moment.now()).fromNow();

    const backupImg = "https://source.unsplash.com/WYd_PkCa1BY/640x426";

    return (
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate("ReadArticle", {
              title: title,
              url: url,
            })
          }
        >
          <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>{title}</Card.Title>

            <Card.Image source={{ uri: urlToImage || backupImg }} />
            <Text style={styles.descript}>{description || "Read more..."}</Text>
            <Divider style={styles.divider} />
            <View style={styles.spacer}>
              <Text style={styles.info}>{source.name}</Text>
              <Text style={styles.info}>{time}</Text>
            </View>
          </Card>
        </Pressable>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <Article {...props} navigation={navigation} />;
}

const lightColour = "#eeeeee";
const darkColour = "#222831";

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkColour,
    borderWidth: 0,
    flex: 1,
  },
  title: {
    marginHorizontal: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: lightColour,
  },
  descript: {
    marginBottom: 10,
    color: lightColour,
  },
  divider: {
    backgroundColor: lightColour,
  },
  spacer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    margin: 5,
    fontStyle: "italic",
    color: lightColour,
    fontSize: 10,
  },
});
