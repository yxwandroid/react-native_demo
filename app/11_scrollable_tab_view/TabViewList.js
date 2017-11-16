import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// noinspection JSAnnotator
export default class TabViewList extends Component {

    render() {

        const {tabLabel, title, image} = this.props;
        return (

            <View style={styles.container}>
                <Text style={styles.text}>{tabLabel + title + image}</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({

        container: {
            backgroundColor: 'red',
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

