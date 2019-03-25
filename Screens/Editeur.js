import React, { Component } from 'react';
import { View, Text, PanResponder, AsyncStorage, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Speech } from 'expo';
import AdaptativeText from '../Components/AdaptativeText';
import { NavigationEvents } from 'react-navigation';

import styles from './Styles/ListeEditeurStyles';

var rate = 12

export default class Editeur extends Component {
	static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
				<TouchableOpacity
					onPress={async () => {
							if(await Speech.isSpeakingAsync()){
								Speech.stop()
							} else {
								Speech.speak(navigation.getParam('text', ''), {language: "fr", rate: rate * 3})
							}
						}
					}
				>
					<MaterialCommunityIcons name="ear-hearing" size={30} style={{margin: 10}}/>
				</TouchableOpacity>)
    };
  };

  constructor(props) {
    super(props)
    this.state = {
			settings: {
				teacherMode: false,
				spaceWords: 0.5,
				spaceLetters: 0.4,
				spaceLines: 0.5,
				rate: 1,
				separationSyllabique: false,
				font: "openDyslexic",
				fonts: ["openDyslexic", "calibri", "comic"],
				size: 0.4,
				colors: ["black", "white", "red", "blue"],
				selectedColor: 0,
				colorPicker: false
			}
		};
  }

  async componentWillMount(){
		var text = this.props.navigation.getParam('text', '');
		this.setState({text})
		try {
			const settings = await AsyncStorage.getItem('settings');
			if (settings !== null) {
				settings = await JSON.parse(settings)
				this.setState({settings})
				rate = settings.rate
			}
		} catch (error) {}
	}
	
	async willFocus(){
		try {
			const settings = await AsyncStorage.getItem('settings');
			if (settings !== null) {
				settings = await JSON.parse(settings)
				if (settings.time != this.state.settings.time) {
					this.setState({settings})
					rate = settings.rate
				}
			}
		} catch (error) {}
	}

  render() {
		var { colors, size, spaceLetters, spaceWords, spaceLines, font, separationSyllabique } = this.state.settings
    return (
      <ScrollView>
				<NavigationEvents
      onWillFocus={this.willFocus.bind(this)}
    />
        <AdaptativeText text={this.state.text} options={{
						backgroundColor: colors[1],
						color: colors[0],
						size: size * 10 + 10,
						colors: [colors[2], colors[3]],
						spaceLetters: spaceLetters * 15,
						spaceWords: spaceLetters * 15 + spaceWords * 40 + 10,
						spaceLines: size * 10 + 10 + spaceLines * 30,
						font: font,
						separationSyllabique: separationSyllabique
					}} />
      </ScrollView>
    );
  }
}
