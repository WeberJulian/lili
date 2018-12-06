import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AdaptativeText extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
            <Text>{this.props.text}</Text>
        )
    }
}