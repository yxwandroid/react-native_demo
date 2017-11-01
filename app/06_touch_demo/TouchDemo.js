import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';
//reference  https://race604.com/react-native-component-lifecycle/

// noinspection JSAnnotator
export default class LifeCycleDemo extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {};
        console.log('constructor');
    }

    getInitialState() {
        console.log('getInitialState');
    }

    getDefaultProps() {
        console.log('getDefaultProps');
    }

    //准备加载组件  整个生命周期就调用一次
    componentWillMount() {
        console.log('componentWillMount');
    }


    //组件第一次绘制之后 调用 通知组件加载完成
    componentDidMount() {
        console.log('componentDidMount');
    }


    //当组件收到新的属性 pros 调用
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps' + nextProps);
    }


    //当组件收到新的属性和状态变化的时候触发
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate' + nextProps + '----' + nextProps);
    }

    //如果组件属性和状态发生变化  并且shouldComponentUpdate() 返回是 true 的时候调用
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }


    //调用 render 更新完界面之后 会执行  得到更新界面完成的通知
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }


    //当组件从界面移除的时候调用
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <View style={styles.container}>

                <Button
                    style={styles.btn}
                    onPress={onButtonPress}
                    title="Learn More"
                />
                <Text style={styles.text}>wilson1</Text>
                <TouchableOpacity onPress={this.onClickMy}>
                    <Image style={styles.image} source={require('../imgs/demo.jpg')}/>
                </TouchableOpacity>

            </View>
        );
    };


    onClickMy = () => {
        console.log('_onPressButton');
        alert('TouchableOpacity');
    }

}

const onButtonPress = () => {
    Alert.alert('点击了Button按钮');
};


const styles = StyleSheet.create({

        container: {
            backgroundColor: 'red',
        },
        image: {
            height: 200,
            width: 200,
        },
        text: {
            margin: 20,
            fontSize:
                30,
            textAlign:
                'center',

        },

        btn: {
            paddingTop:100,
            marginTop:60,
            margin: 70,
        }
    })
;

