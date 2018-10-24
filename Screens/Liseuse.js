import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';

export default class Liseuse extends Component {
	static navigationOptions = {
		title: 'Bibliothèque en ligne'
	};

	constructor(props) {
		super(props);
		this.state = {
      firstQuery: '',
    };
	}

	render() {
    const { firstQuery } = this.state;
		return (
			<View>
				<Searchbar
        placeholder="Search"
        style={{margin: 10,}}
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={firstQuery}
      />
			</View>
		);
	}
}
