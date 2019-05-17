import React, { Component } from 'react';
import { View, Button, Text, Modal, TouchableOpacity } from 'react-native';

export default class ColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorsAv: ["white", "black", "navy", "blue", "deepskyblue", "red", "darkred", "fuchsia", "green", "teal"]
        }
    }

    componentWillMount() {
    }

    render() {
        return <Modal visible={this.props.visible} onRequestClose={this.props.onRequestClose} transparent={true} animationType="slide">
            <View style={{ backgroundColor: "rgba(200,200,200,0.7)", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ backgroundColor: this.props.color, height: 100, width: 200, borderRadius: 20, borderWidth: 5, borderColor: "white" }} />
                <View style={{ borderRadius: 20, width: 300, height: 200, justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity onPress={() => { this.props.changeColor(this.state.colorsAv[0], this.props.colorIndex) }}>
                            <ColorViewer color={this.state.colorsAv[0]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.changeColor(this.state.colorsAv[1], this.props.colorIndex) }}>
                            <ColorViewer color={this.state.colorsAv[1]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.changeColor(this.state.colorsAv[2], this.props.colorIndex) }}>
                            <ColorViewer color={this.state.colorsAv[2]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.changeColor(this.state.colorsAv[3], this.props.colorIndex) }}>
                            <ColorViewer color={this.state.colorsAv[3]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.changeColor(this.state.colorsAv[4], this.props.colorIndex) }}>
                            <ColorViewer color={this.state.colorsAv[4]} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity onPress={() => { this.props.changeColor(this.state.colorsAv[5], this.props.colorIndex) }}>
                            <ColorViewer color={this.state.colorsAv[5]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.changeColor(this.state.colorsAv[6], this.props.colorIndex) }}>
                            <ColorViewer color={this.state.colorsAv[6]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.changeColor(this.state.colorsAv[7], this.props.colorIndex) }}>
                            <ColorViewer color={this.state.colorsAv[7]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.changeColor(this.state.colorsAv[8], this.props.colorIndex) }}>
                            <ColorViewer color={this.state.colorsAv[8]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.changeColor(this.state.colorsAv[9], this.props.colorIndex) }}>
                            <ColorViewer color={this.state.colorsAv[9]} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Button title="Enregistrer" onPress={() => { this.props.onRequestClose() }} />
            </View>
        </Modal>
    }
}

const ColorViewer = (props) => {
    return <View style={{ height: 45, width: 45, backgroundColor: props.color, borderRadius: 5, borderColor: "white", borderWidth: 3, margin: 5 }}></View>
}