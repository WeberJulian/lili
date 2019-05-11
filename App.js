import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Font, Asset } from "expo"

import Editeur from './Screens/Editeur';
import Settings from './Screens/Settings';
import Liseuse from './Screens/Liseuse';
import ClasseVirtuelle from './Screens/ClasseVirtuelle';
import ListeEditeur from './Screens/ListeEditeur';
import PhotoEditeur from './Screens/PhotoEditeur';
import TextSelector from './Screens/TextSelector';

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			loading: true,
			settings: {
				teacherMode: false,
				spaceWords: 0.2,
				spaceLetters: 0,
				spaceLines: 0.1,
				separationSyllabique: false,
				font: "openDyslexic",
				fonts: ["openDyslexic", "calibri", "comic"],
				size: 0.1,
				colors: ["black", "white", "red", "blue"],
				selectedColor: 0,
				colorPicker: false
			}
		}
	}
	async componentWillMount() {
		await Font.loadAsync({
			'calibri': require('./assets/Calibri.ttf'),
			'openDyslexic': require('./assets/OpenDyslexic.ttf'),
			'comic': require('./assets/Comic.ttf'),
		});
		await Asset.loadAsync([
		]),
			this.setState({ loading: false })
	}
	updateSettings(settings){
		this.setState({settings})
	}
	render() {
		return (this.state.loading ? <Expo.AppLoading /> : <PaperProvider><Navigator settings={this.state.settings} updateSettings={this.updateSettings.bind(this)}/></PaperProvider>)
	}
}

var NavigatorEditor = createStackNavigator(
	{
		ListeEditeur: { screen: ListeEditeur },
		Editeur: { screen: Editeur },
		PhotoEditeur: { screen: PhotoEditeur },
		TextSelector: { screen: TextSelector }
	},
	{
		initialRouteName: 'ListeEditeur'
	}
);

var NavigatorLiseuse = createStackNavigator(
	{
		Liseuse: { screen: Liseuse }
	},
	{
		initialRouteName: 'Liseuse'
	}
);

var NavigatorClasseVirtuelle = createStackNavigator(
	{
		ClasseVirtuelle: { screen: ClasseVirtuelle }
	},
	{
		initialRouteName: 'ClasseVirtuelle'
	}
);

var NavigatorSettings = createStackNavigator(
	{
		Settings: { screen: Settings }
	},
	{
		initialRouteName: 'Settings'
	}
);

var Navigator = createMaterialBottomTabNavigator(
	{
		NavigatorEditor: {
			screen: NavigatorEditor,
			navigationOptions: {
				tabBarLabel: 'Editeur',
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-create" size={24} color={tintColor} />
			}
		},
		Liseuse: {
			screen: NavigatorLiseuse,
			navigationOptions: {
				tabBarLabel: 'Liseuse',
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-bookmarks" size={24} color={tintColor} />
			}
		},
		ClasseVirtuelle: {
			screen: NavigatorClasseVirtuelle,
			navigationOptions: {
				tabBarLabel: 'Classe Virtuelle',
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-school" size={24} color={tintColor} />
			}
		},
		Settings: {
			screen: NavigatorSettings,
			navigationOptions: {
				tabBarLabel: 'Paramètres',
				tabBarIcon: ({ tintColor }) => <Ionicons name="md-settings" size={24} color={tintColor} />
			}
		}
	},
	{
		initialRouteName: 'NavigatorEditor',
		activeColor: 'white',
		inactiveColor: 'orange',
		barStyle: { backgroundColor: 'brown', height: 55, justifyContent: 'center' }
	}
);
