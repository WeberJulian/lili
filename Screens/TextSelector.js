import React, { Component } from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';

export default class TextSelector extends Component{
    static navigationOptions = {
		title: 'Selectionne ton texte !'
	};

	constructor(props) {
		super(props);
		this.state = {
            ocr: null,
			photo: null,
		};
    }

    componentWillMount(){
        const { navigation } = this.props;
        const ocr = navigation.getParam('ocr');
        const photo = navigation.getParam('photo');
        this.setState({ocr})
        this.setState({photo})
    }

    drawBoxes(){
        let { photo, ocr } = this.state
        let regions = ocr.regions
        let factor = Dimensions.get('window').width / photo.width 
        let boxes = []
        for (let i = 0; i < regions.length; i++){
            let box = []
            for (let j = 0; j < regions[i].boundingBox.split(",").length; j++){
                box.push(Math.floor(regions[i].boundingBox.split(",")[j] * factor))
            }
            boxes.push(box)
        }
        console.log(boxes)
        let boxViews = []
        for (let i = 0; i < boxes.length; i++){
            boxViews.push(<View key={i}
                                style={{position: "absolute", 
                                        left: boxes[i][0], 
                                        top: boxes[i][1] + 45,
                                        width: boxes[i][2],
                                        height: boxes[i][3],
                                        backgroundColor: 'rgba(239, 145, 0, 0.49)'
                                    }}/>)
        }
        return <View>{boxViews}</View>
    }
    
    render(){
        return (
            <ImageBackground 
                source={{ uri: this.state.photo.uri }}
                style={{ flex: 1 }}
                resizeMode='contain'
            >
                {this.drawBoxes()}
            </ImageBackground>
        );
    }
}