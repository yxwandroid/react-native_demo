import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

//接收 外部传递进来的数据   单向传递  props
class Hello extends Component {
    render() {

        const {title, text} = this.props;
        return (
            <View>
                <Text>{title}</Text>
                <Text>{text}</Text>
            </View>
        );
    }
}


// 内部状态的改变使用的是 state   更新 state 界面就会随着更新
class HelloComponent extends React.Component {
    constructor(props) {
        super(props);
        // 初始化 state 参数
        this.state = {
            appendText: ''
        };
    }

    onButtonPress = () => {
        this.setState(
            {
                appendText: ' Native!'
            });
    };

    _setText() {
        this.setState({appendText: ' Native!'});
    }

    render() {


        const { text}=this.props;
        return (
            <View>
                {/*遇到一个小问题  就是this.onButtonPress() 带上() 应该是代表 执行  导致死循环*/}
                <Button title='点击' onPress={this.onButtonPress}/>
                {/*_setText()的方式也是一样的 有() 代表就是智执行了  */}
                <Button title='点击' onPress={this._setText.bind(this)}/>
                <Text>{text+this.state.appendText}</Text>
            </View>
        );
    }
}

export default class PropStateDemo extends Component {

    render() {
        // Props 参数
        const pros = {
            text: 'hi',
            title: 'title'
        }
        return (
            <View>
                <View style={{height: 30}}/>
                <Hello {...pros} />
                <HelloComponent text="React"/>
            </View>
        );
    };
}
