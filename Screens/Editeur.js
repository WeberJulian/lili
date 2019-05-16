import React, { Component } from 'react';
import { View, Text, PanResponder, AsyncStorage, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Speech } from 'expo';
import AdaptativeText from '../Components/AdaptativeText';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux'

import styles from './Styles/ListeEditeurStyles';
import { settingsActions } from "../redux/action"

var rate = 12
var text = ""

class Editeur extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerRight: (
				<TouchableOpacity
					onPress={
						async () => {
							if (await Speech.isSpeakingAsync()) {
								Speech.stop()
							} else {
								Speech.speak(this.props.text, { language: "fr", rate: rate * 3 })
							}
						}
					}
				>
					<MaterialCommunityIcons name="ear-hearing" size={30} style={{ margin: 10 }} />
				</TouchableOpacity>)
		};
	};

	componentWillMount() {
		this.props.updateText(this.props.navigation.getParam('text', ''))
	}

	render() {
		return (
			<ScrollView>
				<AdaptativeText text={this.props.text} options={this.props.settings} />
			</ScrollView>
		);
	}
}

const mapStateToProps = (state) => ({...state})
const mapDispatchToProps = (dispatch) => {
	return {
		updateText: (text) => dispatch(settingsActions.updateText(text)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Editeur)
