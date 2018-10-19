import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Liseuse extends Component {
  static navigationOptions = {
    tabBarLabel: 'Liseuse',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="ios-bookmarks" size={24} color={tintColor}/>
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
        <Text> Liseuse </Text>
      </View>
    );
  }
}
