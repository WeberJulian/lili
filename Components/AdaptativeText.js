import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AdaptativeText extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    generateText(text, options){
        <Text>{text}</Text>
    }

    render(){
        return(
            <View>
                {this.generateText(this.props.text, this.props.options)}
            </View>
        )
    }
}