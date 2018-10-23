import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

export default class Editeur extends Component {
	static navigationOptions = {
		title: 'Scanne un texte !'
	};

	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: null,
			type: Camera.Constants.Type.back
		};
	}

	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		} else {
			return (
				<View style={{ flex: 1 }}>
					<Camera style={{ flex: 1 }} type={this.state.type} flashMode="torch">
						<View
							style={{
								flex: 1,
								backgroundColor: 'transparent',
								flexDirection: 'row'
							}}
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
									<TouchableOpacity>
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
		}
	}
}
