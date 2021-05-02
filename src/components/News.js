import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";


import { getNews } from "../services/newsAPI";
import Article from "./Article";
import TabStyles from "./PageStyles";


class News extends Component {

	state = {
		articles: [],
		refreshing: true
	};

	componentDidMount = () => {
		this.fetchNews();
	};

	fetchNews = () => {
		getNews("general")
			.then(articles => {
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
  			centerComponent={{ text: 'Headlines', style: TabStyles.headerComponent  
				   }}
			/>
			<FlatList
				data={this.state.articles}
				renderItem={({ item }) => <Article article={item} />}
				keyExtractor={item => item.url}
				refreshing={this.state.refreshing}
				onRefresh={this.handleRefresh}
			/>
			</SafeAreaProvider>
		);
	}
}

export default News;


