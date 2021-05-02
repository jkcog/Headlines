import React, { Component } from "react";
import { FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";

import { getNews } from "../services/newsAPI";
import Article from "./Article";
import TabStyles from "./PageStyles";


class Tech extends Component {
	state = {
		articles: [],
		refreshing: true
	};

	componentDidMount = () => {
		this.fetchNews();
	};

	fetchNews = () => {
		getNews("technology")
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
  					centerComponent={{ text: "Technology", style: TabStyles.headerComponent
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

export default Tech;
