import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    TextInput,
    View,
} from 'react-native';

//外部注册必须使用 export  default
export  default class MyTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 50}}>
                <TextInput
                    style={{height: 40}}
                    placeholder='input content '
                    onChangeText={(text) => this.setState({text})}
                />

                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ')}
                </Text>

            </View>
        );

    };

}

