import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AdaptativeText extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    generateText(text, options){
        return <View>
            {this.renderListWords(text, options, options.spaceWords)}
        </View>
    }

    renderListWords(text, options, spaceWords){
        words = text.split(" ")
        var ren = []
        for (var i = 0; i < words.lengh - 1; i++){
            ren.push(<View><Text style={{
                fontFamily: options.font, 
                color: options.color,
                fontSize: options.size}}>{words[i]}</Text></View>)
        }
        ren.push(<Text style={{
            fontFamily: options.font, 
            color: options.color,
            fontSize: options.size}}>{words[i+1]}</Text>)
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