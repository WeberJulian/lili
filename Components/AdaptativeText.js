import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const syl = require('gl-syllabler');

export default class AdaptativeText extends Component {

    render() {
        const options = processOptions(this.props.options);
        return (
            <View style={{
                margin: 10,
                padding: 10,
                backgroundColor: options.backgroundColor,
                borderRadius: 10,
            }}>
                {generateText(this.props.text, options, this.props.indexRead)}
            </View>
        )
    }
}

const processOptions = (options) => ({
    backgroundColor: options.colors[1],
    color: options.colors[0],
    size: options.size * 10 + 10,
    colors: [options.colors[2], options.colors[3]],
    spaceLetters: options.spaceLetters * 15,
    spaceWords: options.spaceLetters * 15 + options.spaceWords * 40 + 10,
    spaceLines: options.size * 10 + 10 + options.spaceLines * 30,
    font: options.font,
    separationSyllabique: options.separationSyllabique,
    bold: options.bold ? "bold" : "normal"
})

const generateText = (text, options, indexRead) => {
    return <Text
        style={{
            fontFamily: options.font,
            color: options.color,
            fontSize: options.size,
            letterSpacing: options.spaceLetters,
            lineHeight: options.spaceLines,
        }}>
        {generateWords(text, options, indexRead)}
    </Text>
}

const generateWords = (text, options, indexRead) => {
    var words = text.split(" ")
    var renWords = []
    var wordCounter = 0
    for(var i = 0; i < words.length; i++){
        if(options.separationSyllabique && !words[i] == " "){
            let textDecorationLine = (i == indexRead) ? "underline" : "none"
            var syllables = syl(words[i]).syllables
            var renSyl = []
            if(syllables.length == 1){
                renSyl.push(<Text key={0} style={{textDecorationLine, fontWeight: options.bold}}>{syllables[0]}</Text>)
            }
            else{
                for(var j = 0; j < syllables.length; j++){
                    renSyl.push(<Text key={j} style={{color: j%2==0 ? options.colors[0] : options.colors[1], textDecorationLine, fontWeight: options.bold}}>{syllables[j]}</Text>)
                }
            }
            renWords.push(<Text key={i}>{renSyl}<Text style={{fontSize: options.spaceWords}}> </Text></Text>)
        }
        else{
            let textDecorationLine = (i == indexRead) ? "underline" : "none"
            renWords.push(<Text key={i}><Text style={{textDecorationLine, fontWeight: options.bold}}>{words[i]}</Text><Text style={{fontSize: options.spaceWords}}> </Text></Text>)
        }
    }
    return renWords
}