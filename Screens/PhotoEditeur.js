import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { Camera, Permissions } from 'expo';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { ImageManipulator } from 'expo';

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
			photo: null,
			loading: false
		};
	}

	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	switchFlash() {
		this.setState((state) => ({ flash: !state.flash }));
	}

	async ocr() {
		const params = {
			method: 'POST',
			headers: {
				'Ocp-Apim-Subscription-Key': '47f0aa062f974f31ba6f79c7ec156bd4',
				'Content-Type': 'multipart/form-data'
			}
		};
		let formdata = new FormData();
		formdata.append('picture', { uri: this.state.photo.uri, name: 'document.jpg', type: 'image/jpg' })
		var res = await fetch('https://northeurope.api.cognitive.microsoft.com/vision/v2.0/ocr?language=fr&detectOrientation=true"', {
			...params,
			body: formdata
		})
		res = await res.json()
		if(res.regions){
			this.props.navigation.navigate('TextSelector', {
				ocr: res,
				photo: this.state.photo,
			});
		}
	}

	snap = async () => {
		if (this.camera) {
			this.setState({ loading: true });
			let photo = await this.camera.takePictureAsync();
			photo = await ImageManipulator.manipulate(photo.uri, [], { compress: 0.8 })
			this.setState({ photo: photo });
			this.setState({ loading: false });
		}
	};

	retake() {
		this.setState({ photo: null })
	}

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		}
		else if (!this.state.photo) {
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
						{this.state.loading ?
							<View style={{ flex: 1, backgroundColor: "black", alignContent: 'center', justifyContent: "center" }}>
								<ActivityIndicator size="large"></ActivityIndicator>
							</View>
							:
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
										<TouchableOpacity onPress={() => { this.snap() }}>
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
						}

					</Camera>
				</View>
			);
		} else {
			return (
				<ImageBackground
					source={{ uri: this.state.photo.uri }}
					style={{ flex: 1 }}
				>
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
							<TouchableOpacity onPress={this.ocr.bind(this)}>
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
