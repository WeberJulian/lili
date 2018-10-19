import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';


import Editeur from  "./Screens/Editeur"
import Settings from "./Screens/Settings"
import Liseuse from "./Screens/Liseuse"
import ClasseVirtuelle from "./Screens/ClasseVirtuelle"

export default class App extends React.Component {
  render() {
    return (
  
      <PaperProvider>
            <Navigator/>
      </PaperProvider>
          
    );
  }
}


var Navigator = createMaterialBottomTabNavigator({
  Editeur: { screen: Editeur },
  Liseuse: { screen: Liseuse },
  ClasseVirtuelle: { screen: ClasseVirtuelle },
  Settings: { screen: Settings },
}, {
  initialRouteName: 'Editeur',
  activeColor: 'white',
  inactiveColor: 'orange',
  barStyle: { backgroundColor: 'brown', height: 55, justifyContent: 'center' },
});