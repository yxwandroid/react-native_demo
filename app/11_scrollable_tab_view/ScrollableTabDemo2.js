import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ScrollableTabView ,{DefaultTabBar,ScrollableTabBar,}from 'react-native-scrollable-tab-view';

export default class ScrollableTabDemo1 extends Component {

    render() {
        return (
            <ScrollableTabView
                style={{marginTop: 20, }}
                initialPage={1}
                renderTabBar={() => <ScrollableTabBar />}>
                <Text tabLabel='Tab #1'>My</Text>
                <Text tabLabel='Tab #2'>favorite</Text>
                <Text tabLabel='Tab #3'>project</Text>
            </ScrollableTabView>
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

