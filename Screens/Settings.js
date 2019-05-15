import React, { Component } from 'react';
import { View, Text, Picker, Slider, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Switch, List } from 'react-native-paper';
import { connect } from 'react-redux'
import { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

import styles from './Styles/SettingsStyles';
import AdaptativeText from '../Components/AdaptativeText';
import ColorPicker from '../Components/ColorPicker';
import { settingsActions } from "../redux/action"


class Settings extends Component {
	static navigationOptions = {
		title: 'Paramètres'
	};

	closePicker(){
		this.setState({colorPicker: false})
	}

	changeColor(color, index){
		var colors = [...this.props.colors]
		colors[index] = color
		this.setState({colors})		
	}

	// async componentWillMount(){
	// 	this.init = this.props.settings
	// 	try {
	// 		const settings = await AsyncStorage.getItem('settings');
	// 		if (settings !== null) {
	// 			settings = await JSON.parse(settings)
	// 			this.setState(settings)
	// 			this.init = settings
	// 		}
	// 	} catch (error) {}
	// }

	async componentWillUpdate(){
		try {
			await AsyncStorage.setItem('settings', JSON.stringify({...this.props, time: Date.now()}));
		  } catch (error) {
			// Error saving data
		  }
	}

	render() {
		return (
			<ScrollView>
				<ColorPicker 
					visible={this.props.colorPicker} 
					onRequestClose={this.closePicker.bind(this)} 
					color={this.props.colors[this.props.selectedColor]}
					colorIndex={this.props.selectedColor}
					changeColor={this.changeColor.bind(this)}
				/>
				<View style={{ flexDirection: 'row', paddingRight: 10, paddingVertical: 10 }}>
					<View style={{ justifyContent: 'center' }}>
						<Text style={styles.option}>Mode Professeur</Text>
					</View>
					<View style={{ flex: 1, flexDirection: 'row-reverse', marginVertical: 5 }}>
						<Switch
							value={this.props.teacherMode}
							onValueChange={() => {
								this.props.updateSwitchTeacherMode()
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
							selectedValue={this.props.font}
							style={styles.picker}
							onValueChange={(itemValue, itemIndex) => this.setState({ font: itemValue })}
						>
							{GenerateFontList(this.props.fonts)}
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
					<Text style={styles.valueSlider}>{Math.round(this.props.size * 10) / 10}</Text>
					<Slider
						value={this.props.size} 
						onValueChange={(size) => {
							this.props.updateFontSize(size)
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
					<Text style={styles.valueSlider}>{Math.round(this.props.spaceWords * 10) / 10}</Text>
					<Slider
						value={this.props.spaceWords}
						onValueChange={(spaceWords) => {
							this.props.updateSpaceWords(spaceWords);
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
					<Text style={styles.valueSlider}>{Math.round(this.props.spaceLetters * 10) / 10}</Text>
					<Slider
						value={this.props.spaceLetters}
						onValueChange={(spaceLetters) => {
							this.props.updateSpaceLetters(spaceLetters);
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
					<Text style={styles.option}>Espacement lignes</Text>
					<Text style={styles.valueSlider}>{Math.round(this.props.spaceLines * 10) / 10}</Text>
					<Slider
						value={this.props.spaceLines}
						onValueChange={(spaceLines) => {
							this.props.updateSpaceLines(spaceLines);
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
					<Text style={styles.option}>Vitesse de lecture</Text>
					<Text style={styles.valueSlider}>{Math.round(this.props.rate * 10) / 10}</Text>
					<Slider
						value={this.props.rate}
						onValueChange={(rate) => {
							this.props.updateRate(rate);
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
						<TouchableOpacity onPress={()=>{this.setState({selectedColor: 3});this.setState({colorPicker: true})}}>
							<ColorViewer color={this.props.colors[3]}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{this.setState({selectedColor: 2});this.setState({colorPicker: true})}}>
							<ColorViewer color={this.props.colors[2]}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{this.setState({selectedColor: 1});this.setState({colorPicker: true})}}>
							<ColorViewer color={this.props.colors[1]}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{this.setState({selectedColor: 0});this.setState({colorPicker: true})}}>
							<ColorViewer color={this.props.colors[0]}/>
						</TouchableOpacity>
					</View>
				</View>

				<View>
					<AdaptativeText text="ceci est une phrase de test non ésotérique" options={this.props} />
				</View>
			</ScrollView>
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

const mapStateToProps = (state) => ({...state.settings})
const mapDispatchToProps = (dispatch) => {
	return {
		updateFontSize: (size) => dispatch(settingsActions.updateFontSize(size)),
		updateSwitchTeacherMode: () => dispatch(settingsActions.updateSwitchTeacherMode()),
		updateSpaceWords: (spaceWords) => dispatch(settingsActions.updateSpaceWords(spaceWords)),
		updateSpaceLetters: (spaceLetters) => dispatch(settingsActions.updateSpaceLetters(spaceLetters)),
		updateSpaceLines: (spaceLines) => dispatch(settingsActions.updateSpaceLines(spaceLines)),
		updateRate: (rate) => dispatch(settingsActions.updateRate(rate)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)