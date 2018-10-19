import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FAB, Portal } from 'react-native-paper';
import { withNavigationFocus } from 'react-navigation';


import styles from "./Styles/ListeEditeurStyles"

class ListeEditeur extends Component {
	static navigationOptions = {
		title: "Liste des notes"
	};

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Pas encore de notes !</Text>
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
								{ icon: 'photo-camera', label: 'Scan', onPress: () => console.log('Pressed scan') }
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

export default withNavigationFocus(ListeEditeur);
