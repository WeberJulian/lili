import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from 'react-native-letter-spacing';

export default class AdaptativeText extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    generateText(text, options){
        return <Text 
        letterSpacing={options.spaceLetters}
        wordSpacing={options.spaceWords}
        style={{
            fontFamily: options.font, 
            color: options.color,
            fontSize: options.size
        }}>
            {text}
        </Text>
    }

    render(){
        return(
            <View style={{ 
                margin: 10, 
                padding: 10, 
                backgroundColor: this.props.options.backgroundColor, 
                borderRadius: 10
            }}>
                {this.generateText(this.props.text, this.props.options)}
            </View>
        )
    }
}