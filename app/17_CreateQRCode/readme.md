
#### react-native 生成二维码 
先上效果 
![2](http://oo0vme8mf.bkt.clouddn.com/2.gif)


##### 使用的开源库

[react-native-qrcode](https://github.com/cssivision/react-native-qrcode)


##### 配置方式 

Installation

    npm install react-native-qrcode --save


Usage


    
    import React, { Component } from 'react'
    import QRCode from 'react-native-qrcode';
    
    import {
        AppRegistry,
        StyleSheet,
        View,
        TextInput
    } from 'react-native';
    
    class HelloWorld extends Component {
      state = {
        text: 'http://facebook.github.io/react-native/',
      };
    
      render() {
        return (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text: text})}
              value={this.state.text}
            />
            <QRCode
              value={this.state.text}
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
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            borderRadius: 5,
            padding: 5,
        }
    });
    
    AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
    
    module.exports = HelloWorld;
    
    











关注公众号获取更多内容

![](https://raw.githubusercontent.com/yxwandroid/question/master/%E5%85%AC%E4%BC%97%E5%8F%B78cm.jpg)

