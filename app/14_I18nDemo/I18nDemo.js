import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import I18n from '../language/i18n';
export default class I18nDemo extends Component {


    constructor(props) {
        super(props);

    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{I18n.t('greeting')}</Text>

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

