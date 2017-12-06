/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight
} from 'react-native';

export default class MyTouchableHighlight extends Component {

    _onPressIn() {
        this.start = Date.now()
        console.log("press in")
    }

    _onPressOut() {
        console.log("press out")
    }

    _onPress() {
        console.log("press")
    }

    _onLonePress() {
        console.log("long press " + (Date.now() - this.start))
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.touchable}
                    onPressIn={this._onPressIn}
                    onPressOut={this._onPressOut}
                    onPress={this._onPress}
                    onLongPress={this._onLonePress}>
                    <View style={styles.button}>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button:{
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'red'
    },
    touchable: {
        borderRadius: 100
    }
});
