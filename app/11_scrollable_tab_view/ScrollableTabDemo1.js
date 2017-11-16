import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import TabViewList from "./TabViewList";

export default class ScrollableTabDemo1 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            MyList: {0: '0', 1: '1', 2: '2', 3: '3'},
        };
    }

    render() {
        return (
            <ScrollableTabView
                style={{marginTop: 20,}}
                initialPage={1}
                renderTabBar={() => <ScrollableTabBar/>}>
                {/*//传递数据到子控件*/}
                <TabViewList tabLabel='Tab1'
                             title='tab1'
                             image='image'>
                </TabViewList>
                <TabViewList tabLabel='Tab2'
                             title='tab2'
                             image='image2'>
                </TabViewList>


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

