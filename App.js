import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

import Editeur from './Screens/Editeur';
import Settings from './Screens/Settings';
import Liseuse from './Screens/Liseuse';
import ClasseVirtuelle from './Screens/ClasseVirtuelle';
import ListeEditeur from './Screens/ListeEditeur';

export default class App extends React.Component {
	render() {
		return (
			<PaperProvider>
				<Navigator />
			</PaperProvider>
		);
	}
}

var NavigatorEditor = createStackNavigator(
	{
		ListeEditeur: { screen: ListeEditeur },
		Editeur: { screen: Editeur }
	},
	{
		initialRouteName: 'ListeEditeur'
	}
);
var Navigator = createMaterialBottomTabNavigator(
	{
		NavigatorEditor: {
			screen: NavigatorEditor,
			navigationOptions: {
				tabBarLabel: 'Editor',
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-create" size={24} color={tintColor} />
			}
		},
		Liseuse: { screen: Liseuse },
		ClasseVirtuelle: { screen: ClasseVirtuelle },
		Settings: { screen: Settings }
	},
	{
		initialRouteName: 'NavigatorEditor',
		activeColor: 'white',
		inactiveColor: 'orange',
		barStyle: { backgroundColor: 'brown', height: 55, justifyContent: 'center' }
	}
);
