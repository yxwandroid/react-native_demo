import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class React_NavigationDemo1 extends Component {

    render() {

        const {params} = this.props.navigation.state;


        return (
            <View style={styles.container}>
                <Text style={styles.text}>接收的参数是: {params.user}</Text>
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

