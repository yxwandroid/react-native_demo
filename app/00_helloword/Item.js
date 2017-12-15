/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
export default class Item extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Image style={styles.img} source={require('../imgs/demo.jpg')}/>
                <Text style={styles.text}>wilson</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:30,
        backgroundColor: '#F5FCFF',
        flexDirection: "row",
    },
    img: {
        width:50,
        height:50,
        borderRadius: 25
    },
    text: {
        marginLeft:20,
        marginTop:10,
        textAlign: 'center',
        color: '#333333',
    },
});
