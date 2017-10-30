import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';


// noinspection JSAnnotator
export default class HelloWord extends Component<{}> {

    render() {
        return (
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    };
}

const styles = StyleSheet.create({

    container: {
        margin: 20,
    },
    text: {
        margin: 20,
        fontSize: 30,
        textAlign: 'center',

    }
});

// AppRegistry.registerComponent('rnMydemo', () => HelloWord);

