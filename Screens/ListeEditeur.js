import React, { Component } from 'react';
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { FAB, Portal } from 'react-native-paper';
import { withNavigationFocus } from 'react-navigation';

import styles from './Styles/ListeEditeurStyles';

class ListeEditeur extends Component {
	static navigationOptions = {
		title: 'Liste des notes'
	};

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			loading: false,
			liste: []
			// liste: [
			// 	{
			// 		title: '1ere note',
			// 		content:
			// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			// 	},
			// 	{
			// 		title: '2eme note',
			// 		content:
			// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			// 	}
			// ]
		};
	}

	componentWillMount() {
		//this.setState({ loading: true });
		//this.loadListe();
	}

	async loadListe() {
		try {
			const liste = await AsyncStorage.getItem('liste');
			if (liste !== null) {
				this.setState({ liste: JSON.parse(liste) });
			} else {
				this.setState({ liste: [] });
			}
		} catch (error) {
			throw error;
		}
		this.setState({ loading: false });
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.loading ? <ActivityIndicator size="large" /> : <GenerateListe liste={this.state.liste} />}

				<Portal>
					{this.props.isFocused ? (
						<FAB.Group
							open={this.state.open}
							style={{ marginBottom: 55 }}
							color="white"
							theme={{ colors: { accent: 'orange' } }}
							icon={this.state.open ? 'cancel' : 'add'}
							actions={[
								{ icon: 'add', label: 'Vide', onPress: () => console.log('Pressed email') },
								{ icon: 'photo-camera', label: 'Scan', onPress: () => this.props.navigation.push('PhotoEditeur') }
							]}
							onStateChange={({ open }) => this.setState({ open })}
							onPress={() => {
								if (this.state.open) {
									// do something if the speed dial is open
								}
							}}
						/>
					) : (
						<View />
					)}
				</Portal>
			</View>
		);
	}
}

const GenerateListe = (props) => {
	if (props.liste.length == 0) {
		return (
			<View style={styles.container}>
				<FontAwesome name="folder-open-o" size={70} style={styles.icon} />
				<Text style={styles.oNotes}>Pas encore de notes !</Text>
			</View>
		);
	} else {
		var ListeComponent = [];
		for (var i = 0; i < props.liste.length; i++) {
			ListeComponent.push(
				<View key={i}>
					<Text>{props.liste[i].title}</Text>
				</View>
			);
		}
		return <View style={styles.listeContainer}>{ListeComponent}</View>;
	}
};
export default withNavigationFocus(ListeEditeur);
