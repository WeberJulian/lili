import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Settings extends Component {
  static navigationOptions = {
		title: 'Paramètres'
	};

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Settings </Text>
      </View>
    );
  }
}
