import React, { Component } from "react";
import { FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";

import { getNews } from "../services/newsAPI";
import Article from "../components/Article";
import TabStyles from "../components/PageStyles";

class Health extends Component {
  state = {
    articles: [],
    refreshing: true,
  };

  componentDidMount = () => {
    this.fetchNews();
  };

  fetchNews = () => {
    getNews("health")
      .then((articles) => {
        this.setState({ articles, refreshing: false });
      })
      .catch(() => this.setState({ refreshing: false }));
  };

  handleRefresh = () => {
    this.setState({ refreshing: true }, () => this.fetchNews());
  };

  render() {
    return (
      <SafeAreaProvider>
        <Header
          backgroundColor="white"
          placement="left"
          centerComponent={{ text: "Health", style: TabStyles.headerComponent }}
        />
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={(item) => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </SafeAreaProvider>
    );
  }
}

export default Health;
