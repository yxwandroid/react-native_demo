import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class HelloWord extends Component {


    static  staticObjec="静态成员变量"  //使用类名进行调用
    static staticMethod () {  //定义类的静态成员函数
        console.log("欢迎访问hangge.com");
      //  alert('静态成员方法')
    }
    constructor(props) {
      super(props);
      this.name='成员变量'; // 成员变量   访问使用 this 进行访问
      this.state = {};
    }

    componentDidMount() {
        // console.log(this.name)
        // console.log(HelloWord.staticObjec)
        // console.log(HelloWord.staticMethod())
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.name}</Text>
                <Text style={styles.text}>{HelloWord.staticObjec}</Text>
                <Text style={styles.text}>{HelloWord.staticMethod()}</Text>
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

