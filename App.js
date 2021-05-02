import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Tabs from './src/components/Tabs';


export default class App extends Component {
	render() {
		return (
    <Tabs />
    )
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
