import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import RNIdle from 'react-native-idle'


export default class ScreenOn extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //启用屏幕常亮：
        RNIdle.disableIdleTimer()
        //关闭屏幕常亮：
      //  RNIdle.enableIdleTimer()
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    };
}

const styles = StyleSheet.create({

        container: {
            backgroundColor: 'red',
            margin: 20,
        },

    })
;

