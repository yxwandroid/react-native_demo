import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// noinspection JSAnnotator
export default class HelloWord extends Component<{}> {

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.text}>wilson1</Text>
                <Image style={styles.image} source={require('../imgs/demo.jpg')}/>
            </View>
        );
    };
}

const styles = StyleSheet.create({

        container: {
            backgroundColor: 'red',
            margin: 20,
        },
        imaga: {
            height: 20,
            width: 20,
        },
        text: {
            margin: 20,
            fontSize:
                30,
            textAlign:
                'center',

        }
    })
;

