import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native'

class GoodMorning extends Component {
    render() {
        return (
            <Text>Good morning, {this.props.name}!</Text>
        )
    }
}

const GoodEvening = (props) => {
    return (
        <Text>Good evening, {props.name}</Text>
    )
}

