import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

export default class ClasseVirtuelle extends Component {
	static navigationOptions = {
		title: 'Classe Virtuelle'
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Button icon="group-add" mode="contained" color="orange" onPress={() => alert("Entre un code")}>
					Entre un code
				</Button>
        <View style={{ height: 20, width: 20}}/>
				<Button icon="add-a-photo" mode="contained" color="orange" onPress={() => alert("Scanne un code QR")}>
					Scanne un QR
				</Button>
			</View>
		);
	}
}
