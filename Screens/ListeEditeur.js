import React, { Component } from 'react';
import { View, Text, ActivityIndicator, AsyncStorage, Clipboard, Button } from 'react-native';
import { List } from 'react-native-paper';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
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
			liste: [],
			liste: [
				{
					title: '1ere note',
					preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				},
				{
					title: '2eme note',
					preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				},
				{
					title: '3eme note',
					preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				}
			]
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
								{ 	icon: 'add', 
									label: 'Vide', 
									onPress: () => this.props.navigation.push('Editeur')								
								},
								{
									icon: 'photo-camera',
									label: 'Scan',
									onPress: () => this.props.navigation.push('PhotoEditeur')
								},
								{
									icon: 'input',
									label: 'Coller',
									onPress: async () => {var content = await Clipboard.getString();this.props.navigation.push('Editeur', {text: content})}
								}
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
			ListeComponent.push(<Note key={i*2+1} title={props.liste[i].title} preview={props.liste[i].preview} />);
			ListeComponent.push(<Separator key={i*2}/>);
		}
		ListeComponent.pop();
		return <View style={styles.listeContainer}>{ListeComponent}</View>;
	}
};

const Note = (props) => (
	<View style={{ flexDirection: 'row', marginVertical: 5 }}>
		<View style={styles.icon}>
			<Entypo name="text" size={40} color="white"/>
		</View>
		<View style={{justifyContent: "center"}}>
			<Text style={styles.title}>{props.title}</Text>
			<Text style={styles.preview}>{props.preview}</Text>
		</View>
	</View>
);

const Separator = () => (
	<View style={styles.separator}/>
);

export default withNavigationFocus(ListeEditeur);
