import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class ClasseVirtuelle extends Component {
  static navigationOptions = {
    tabBarLabel: 'Classe Virtuelle',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="ios-school" size={24} color={tintColor}/>
    ),
  }
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> ClasseVirtuelle </Text>
      </View>
    );
  }
}
