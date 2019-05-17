import React, { Component } from 'react';
import { View, Text, PanResponder, AsyncStorage, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Speech } from 'expo';
import AdaptativeText from '../Components/AdaptativeText';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux'
import { FAB, Portal } from 'react-native-paper';
import { withNavigationFocus } from 'react-navigation';

import styles from './Styles/ListeEditeurStyles';
import { settingsActions } from "../redux/action"


class Editeur extends Component {

	componentWillMount() {
		this.props.updateText(this.props.navigation.getParam('text', ''))
	}

	render() {
		return (
			<ScrollView>
				<Portal.Host>
					<AdaptativeText text={this.props.text} options={this.props.settings} />
				</Portal.Host>
				<Portal>
				{this.props.isFocused ? (
						<View style={{flex: 1, flexDirection: "column-reverse", alignItems: "flex-end", top: 65, margin: 20}}>
						<FAB
							style={{ height: 55, width: 55, alignItems: 'center', justifyContent: 'center',}}
							color="white"
							theme={{ colors: { accent: 'orange' } }}
							icon="speaker"
							onPress={
								async () => {
									if (await Speech.isSpeakingAsync()) {
										Speech.stop()
									} else {
										Speech.speak("ceci", { language: "fr", rate: this.props.settings.rate * 3 })
										Speech.speak("est", { language: "fr", rate: this.props.settings.rate * 3 })
										Speech.speak("un", { language: "fr", rate: this.props.settings.rate * 3 })
										Speech.speak("test", { language: "fr", rate: this.props.settings.rate * 3 })
									}
								}
							}
						/>
					</View>
					) : (
						<View />
					)}
				</Portal>
			</ScrollView>
		);
	}
}

const mapStateToProps = (state) => ({ ...state })
const mapDispatchToProps = (dispatch) => {
	return {
		updateText: (text) => dispatch(settingsActions.updateText(text)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(Editeur))
