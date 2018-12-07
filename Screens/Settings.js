import React, { Component } from 'react';
import { View, Text, Picker, Slider, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Switch, List } from 'react-native-paper';

import { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

import styles from './Styles/SettingsStyles';
import AdaptativeText from '../Components/AdaptativeText';


export default class Settings extends Component {
	static navigationOptions = {
		title: 'Paramètres'
	};

	constructor(props) {
		super(props);
		this.state = {
			teacherMode: false,
			spaceWords: 0.2,
			spaceLetters: 0,
			separationSyllabique: false,
			font: "openDyslexic",
			fonts: ["openDyslexic", "calibri", "comic"],
			size: 0.1,
			colors: ["black", "white", "red", "blue"],
			selectedColor: 0,
			colorPicker: false
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
							selectedValue={this.state.font}
							style={styles.picker}
							onValueChange={(itemValue, itemIndex) => this.setState({ font: itemValue })}
						>
							{GenerateFontList(this.state.fonts)}
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
					<Text style={styles.option}>Taille de la Police</Text>
					<Text style={styles.valueSlider}>{Math.round(this.state.size * 10) / 10}</Text>
					<Slider
						value={this.state.size}
						onValueChange={(size) => {
							this.setState({ size });
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
					<Text style={styles.option}>Espacement mots</Text>
					<Text style={styles.valueSlider}>{Math.round(this.state.spaceWords * 10) / 10}</Text>
					<Slider
						value={this.state.spaceWords}
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
						value={this.state.spaceLetters}
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

				<View style={{ flexDirection: 'row', paddingRight: 10, paddingVertical: 10 }}>
					<View style={{ justifyContent: 'center' }}>
						<Text style={styles.option}>Couleurs</Text>
					</View>
					<View style={{ flex: 1, flexDirection: 'row-reverse', marginVertical: 5 }}>
						<TouchableOpacity>
							<ColorViewer color={this.state.colors[3]}/>
						</TouchableOpacity>
						<TouchableOpacity>
							<ColorViewer color={this.state.colors[2]}/>
						</TouchableOpacity>
						<TouchableOpacity>
							<ColorViewer color={this.state.colors[1]}/>
						</TouchableOpacity>
						<TouchableOpacity>
							<ColorViewer color={this.state.colors[0]}/>
						</TouchableOpacity>
					</View>
				</View>

				<View>
					<AdaptativeText text="ceci est une phrase de test non ésotérique" options={{
						backgroundColor: this.state.colors[1],
						color: this.state.colors[0],
						size: this.state.size * 10 + 10,
						colors: [this.state.colors[2], this.state.colors[3]],
						spaceLetters: this.state.spaceLetters * 15,
						spaceWords: this.state.spaceWords * 20 + 2,
						font: this.state.font,
						separationSyllabique: this.state.separationSyllabique
					}} />
				</View>
			</View>
		);
	}
}

const Separator = () => <View style={styles.separator} />;

const GenerateFontList = (fonts) => {
	var list = []
	for (var i = 0; i < fonts.length; i++){
		list.push(<Picker.Item label={fonts[i]} value={fonts[i]} key={i}/>)
	}
	return list
}

const ColorViewer = (props) => {
	return <View style={{ height: 35, width: 35, backgroundColor: props.color, borderRadius: 5, borderColor: "white", borderWidth: 3, margin: 5 }}></View>
}