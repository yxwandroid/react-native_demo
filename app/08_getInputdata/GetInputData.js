import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet

} from 'react-native';


export default class GetInputData extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.TextInputContainer}>
                <TextInput style={{borderWidth: 1, borderColor: 'red', height: 40}}
                           onChangeText={(text) => this.setState({text})}
                />
                <Text>{this.state.text}</Text>
            </View>
        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    TextInputContainer: {
        marginTop: 20,
        marginLeft: 10,
        textAlign: 'center',
        marginRight: 10,
        backgroundColor: 'white'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
