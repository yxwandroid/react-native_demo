/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

export default class MySeResponder extends Component {


    constructor(props) {
        super(props);
        this.state = {
            bg: 'white',
            bg2: 'white',
            top: 0,
            left: 0,
        };
    }

    componentWillMount() {
        this._gestureHandlers = {
            onStartShouldSetResponder: () => true,  //对触摸进行响应
            onMoveShouldSetResponder: () => true,  //对滑动进行响应
            onResponderGrant: () => {
                console.log("parent onResponseGrant");
                this.setState({bg: 'red'});
            }, //激活时做的动作
            onResponderMove: () => {
                console.log("parent onResponderMove");
            },  //移动时作出的动作
            onResponderRelease: () => {
                console.log("parent onResponseRelease");
                this.setState({bg: 'white'})
            }, //动作释放后做的动作
        }

        this._gestureHandlers2 = {
            onStartShouldSetResponder: () => true,
            onMoveShouldSetResponder: () => true,
            onResponderTerminationRequest: () => false,
            onResponderGrant: () => {
                console.log("child onResponseGrant");
                this.setState({bg2: 'green'});
            },
            onResponderMove: () => {
                console.log("child onResponseMove");
            },
            onResponderRelease: () => {
                console.log("child onResponseRelease");
                this.setState({bg2: 'white'});
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    {...this._gestureHandlers}
                    style={[styles.rect, {
                        "backgroundColor": this.state.bg
                    }]}>
                    <View
                        {...this._gestureHandlers2}
                        style={[styles.rect2, {
                            "backgroundColor": this.state.bg2
                        }]}>
                    </View>
                </View>

            </View>
        );
    }

}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        rect: {
            width: 200,
            height: 200,
            borderWidth: 1,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
        },
        rect2: {
            width: 100,
            height: 100,
            borderWidth: 1,
            borderColor: 'black'
        },
        rect3: {
            width: 100,
            height: 100,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: '#223344',
            alignSelf: 'flex-end',
        }


    });
