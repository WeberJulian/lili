import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const syl = require('gl-syllabler');

export default class AdaptativeText extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{
                margin: 10,
                padding: 10,
                backgroundColor: this.props.options.backgroundColor,
                borderRadius: 10,
            }}>
                {generateText(this.props.text, this.props.options)}
            </View>
        )
    }
}

const generateText = (text, options) => {
    return <Text
        style={{
            fontFamily: options.font,
            color: options.color,
            fontSize: options.size,
            letterSpacing: options.spaceLetters,
            lineHeight: options.spaceLines,
        }}>
        {generateWords(text, options)}
    </Text>
}

const generateWords = (text, options) => {
    var words = text.split(" ")
    var renWords = []
    for(var i = 0; i < words.length; i++){
        if(options.separationSyllabique){
            var syllables = syl(words[i]).syllables
            var renSyl = []
            if(syllables.length == 1){
                renSyl.push(<Text key={0}>{syllables[0]}</Text>)
            }
            else{
                for(var j = 0; j < syllables.length; j++){
                    renSyl.push(<Text key={j} style={{color: j%2==0 ? options.colors[0] : options.colors[1]}}>{syllables[j]}</Text>)
                }
            }
            renWords.push(<Text key={i}>{renSyl}<Text style={{fontSize: options.spaceWords}}> </Text></Text>)
        }
        else{
            renWords.push(<Text key={i}>{words[i]}<Text style={{fontSize: options.spaceWords}}> </Text></Text>)
        }  
    }
    return renWords
}