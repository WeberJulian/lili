import React, { Component } from 'react';
import { View, Text, Picker, Slider } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Switch, List } from 'react-native-paper';

import { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

import styles from './Styles/SettingsStyles';

export default class Settings extends Component {
	static navigationOptions = {
		title: 'Paramètres'
	};

	constructor(props) {
		super(props);
		this.state = {
			teacherMode: false,
			spaceWords: 0,
      spaceLetters: 0,
      separationSyllabique: false,
		};
	}

	render() {
		return (
			<View>
				<View style={{ flexDirection: 'row', paddingRight: 10, paddingVertical: 10 }}>
					<View style={{ justifyContent: 'center' }}>
						<Text style={styles.option}>Mode Professeur</Text>
					</View>
					<View style={{ flex: 1, flexDirection: 'row-reverse', marginVertical: 5 }}>
						<Switch
							value={this.state.teacherMode}
							onValueChange={() => {
								this.setState((prev) => ({ teacherMode: !prev.teacherMode }));
							}}
						/>
					</View>
				</View>

				<View
					style={{
						flexDirection: 'row',
						paddingRight: 10,
						paddingVertical: 10,
						justifyContent: 'space-between'
					}}
				>
					<Text style={styles.option}>Police</Text>
					<View style={styles.pickerContainer}>
						<Picker
							selectedValue={this.state.language}
							style={styles.picker}
							onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
						>
							<Picker.Item label="Roboto" value="Roboto" />
							<Picker.Item label="Arial" value="Arial" />
						</Picker>
					</View>
				</View>

				<View
					style={{
						flexDirection: 'row',
						paddingRight: 10,
						paddingVertical: 10,
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<Text style={styles.option}>Espacement mots</Text>
					<Text style={styles.valueSlider}>{Math.round(this.state.spaceWords * 10) / 10}</Text>
					<Slider
						onValueChange={(spaceWords) => {
							this.setState({ spaceWords });
						}}
						style={{ width: width / 2 }}
					/>
				</View>

				<View
					style={{
						flexDirection: 'row',
						paddingRight: 10,
						paddingVertical: 10,
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<Text style={styles.option}>Espacement lettres</Text>
					<Text style={styles.valueSlider}>{Math.round(this.state.spaceLetters * 10) / 10}</Text>
					<Slider
						onValueChange={(spaceLetters) => {
							this.setState({ spaceLetters });
						}}
						style={{ width: width / 2 }}
					/>
				</View>
				<View style={{ flexDirection: 'row', paddingRight: 10, paddingVertical: 10 }}>
					<View style={{ justifyContent: 'center' }}>
						<Text style={styles.option}>Séparation syllabique</Text>
					</View>
					<View style={{ flex: 1, flexDirection: 'row-reverse', marginVertical: 5 }}>
						<Switch
							value={this.state.separationSyllabique}
							onValueChange={() => {
								this.setState((prev) => ({ separationSyllabique: !prev.separationSyllabique }));
							}}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const Separator = () => <View style={styles.separator} />;
