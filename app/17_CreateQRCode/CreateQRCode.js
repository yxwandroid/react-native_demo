import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import QRCode from 'react-native-qrcode';

/**
 * 生成二维码
 */
export default class CreateQRCode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'wilson', //用户名
        };
    }

    render() {

        return (
            <View style={styles.container}>
                {/*<TextInput*/}
                    {/*style={styles.input}*/}
                    {/*onChangeText={(text) => this.setState({text: text})}*/}
                    {/*value={this.state.text}*/}
                {/*/>*/}
                <QRCode
                    value={this.state.userName}
                    size={200}
                    bgColor='purple'
                    fgColor='white'/>
            </View>
        );
    };


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        width:200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }

    })
;

