import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    listeContainer: {
        flex: 1,
        padding: 10,
        paddingHorizontal: 40,
        alignItems: 'center',
    },
    noNotes: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    icon: {
      height: 40,
      width: 40,
      backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      marginHorizontal: 10,
    },
    option: {
      left: 10,
      fontSize: 15,
      fontWeight: 'bold',
    },
    valueSlider: {
      left: 5,
      fontSize: 10,
      color: "grey"
    },
    optionSlider: {
      left: 10,
      fontSize: 15,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    separator: {
      height: 1,
      width: width*0.8,
      backgroundColor: "grey",
      marginVertical: 10,
    },
    picker: {
      flex: 1
    },
    pickerContainer: {
      height: 40,
      width: 240,
      backgroundColor: "white",
    },
    optionContainer: {
      flex: 1,
      flexDirection: "row",
    }
  });

  