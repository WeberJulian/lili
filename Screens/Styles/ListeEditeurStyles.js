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
      height: 50,
      width: 50,
      backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      marginHorizontal: 10
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
    },
    separator: {
      height: 1,
      width: width*0.8,
      backgroundColor: "grey",
      marginVertical: 10,
    }
  });

  