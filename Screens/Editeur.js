import React, { Component } from 'react';
import { View, Text, PanResponder, AsyncStorage } from 'react-native';
import AdaptativeText from '../Components/AdaptativeText';
import { NavigationEvents } from 'react-navigation';

export default class Editeur extends Component {
  constructor(props) {
    super(props)
    this.state = {
			settings: {
				teacherMode: false,
				spaceWords: 0.5,
				spaceLetters: 0.4,
				spaceLines: 0.5,
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
				console.log("Settings loaded")
				settings = await JSON.parse(settings)
				this.setState({settings})
			}
		} catch (error) {}
	}
	
	async willFocus(){
		try {
			const settings = await AsyncStorage.getItem('settings');
			if (settings !== null) {
				settings = await JSON.parse(settings)
				if (settings.time != this.state.settings.time) {
					console.log("new version !")
					this.setState({settings})
				}
			}
		} catch (error) {}
	}

  render() {
		var { colors, size, spaceLetters, spaceWords, spaceLines, font, separationSyllabique } = this.state.settings
    return (
      <View>
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
      </View>
    );
  }
}
