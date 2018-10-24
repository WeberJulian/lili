import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Camera, Permissions } from 'expo';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default class Editeur extends Component {
	static navigationOptions = {
		title: 'Scanne un texte !'
	};

	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: null,
			type: Camera.Constants.Type.back,
			flash: false,
			photo: ''
		};
	}

	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	switchFlash() {
		this.setState((state) => ({ flash: !state.flash }));
	}

	snap = async () => {
		if (this.camera) {
			let photo = await this.camera.takePictureAsync();
			this.setState({ photo: photo.uri });
		}
	};

	retake(){
		this.setState({photo: ""})
	}

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		} else if (this.state.photo == '') {
			return (
				<View style={{ flex: 1 }}>
					<Camera
						style={{ flex: 1 }}
						type={this.state.type}
						flashMode={this.state.flash ? 'torch' : 'off'}
						ref={(ref) => {
							this.camera = ref;
						}}
					>
						<View
							style={{
								flex: 1,
								backgroundColor: 'transparent',
								flexDirection: 'row'
							}}
						>
							<View style={{ flex: 1, justifyContent: 'space-between' }}>
								<View
									style={{
										flex: 1,
										flexDirection: 'row-reverse',
										alignItems: 'center'
									}}
								>
									<View>
										<TouchableOpacity onPress={this.switchFlash.bind(this)}>
											<View
												style={{
													height: 40,
													width: 40,
													backgroundColor: 'orange',
													justifyContent: 'center',
													alignItems: 'center',
													borderRadius: 30,
													margin: 10
												}}
											>
												{this.state.flash ? (
													<MaterialIcons name="flash-on" size={20} color="white" />
												) : (
													<MaterialIcons name="flash-off" size={20} color="white" />
												)}
											</View>
										</TouchableOpacity>
									</View>
								</View>
								<View style={{ flex: 6 }} />
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<TouchableOpacity onPress={this.snap.bind(this)}>
										<View
											style={{
												height: 60,
												width: 60,
												backgroundColor: 'orange',
												justifyContent: 'center',
												alignItems: 'center',
												borderRadius: 30,
												marginBottom: 10
											}}
										>
											<FontAwesome name="camera" size={30} color="white" />
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</Camera>
				</View>
			);
		} else {
			return (
				<ImageBackground source={{ uri: this.state.photo }} style={{ flex: 1 }}>
					<View style={{ flex: 1, justifyContent: 'space-between' }}>
						<View style={{ flex: 1 }} />
						<View style={{ flex: 6 }} />
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<TouchableOpacity onPress={this.retake.bind(this)}>
								<View
									style={{
										height: 60,
										width: 60,
										backgroundColor: 'orange',
										justifyContent: 'center',
										alignItems: 'center',
										borderRadius: 30,
										marginBottom: 10,
										marginRight: 10
									}}
								>
									<MaterialIcons name="cached" size={30} color="white" />
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View
									style={{
										height: 60,
										width: 60,
										backgroundColor: 'orange',
										justifyContent: 'center',
										alignItems: 'center',
										borderRadius: 30,
										marginBottom: 10,
										marginLeft: 10
									}}
								>
									<FontAwesome name="check" size={30} color="white" />
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			);
		}
	}
}
