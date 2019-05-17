import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
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
			loading: false
    };
	}

	handleSearch(query){
		if(query == ""){
			this.setState({ loading: false });
		}
		else{
			this.setState({ firstQuery: query });
			this.setState({ loading: true });
		}
	}

	stopLoading(){
		this.setState({ loading: false });
	}

	render() {
    const { firstQuery } = this.state;
		return (
			<View>
				<Searchbar
        placeholder="Search"
        style={{margin: 10,}}
        onChangeText={this.handleSearch.bind(this)}
        value={firstQuery}
      />
			{
				this.state.loading ?
				<ActivityIndicator/> :
				<View/>
			}
			</View>
		);
	}
}
