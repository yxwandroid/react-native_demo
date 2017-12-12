##### react-native 二维码扫描 


###### 先看效果  
![](http://oo0vme8mf.bkt.clouddn.com/15130639689108.jpg)


###### 使用的开源库
[react-native-smart-barcode](https://link.jianshu.com/?t=https://github.com/react-native-component/react-native-smart-barcode)
[react-native-smart-timer-enhance](https://github.com/react-native-component/react-native-smart-timer-enhance)



###### 安装  

        
        npm install react-native-smart-barcode --save
        npm install react-native-smart-timer-enhance --save
        
        
IOS配置  

1.将\node_modules\react-native-smart-barcode\ios\RCTBarcode\RCTBarCode.xcodeproj 添加到Xcode项目中，如下图：
![](http://oo0vme8mf.bkt.clouddn.com/15130643488963.jpg)

2.添加依赖，Build Phases->Link Binary With Libraries 加入RCTBarCode.xcodeproj\Products\libRCTBarCode.a（直接拖）,如下图：
![](http://oo0vme8mf.bkt.clouddn.com/15130645853907.jpg)

3.确定一下Build Settings->Seach Paths->Header Search Paths是否有$(SRCROOT)/../../../react-native/React
若是没有就设置 并且设为recursive
![](http://oo0vme8mf.bkt.clouddn.com/15130646674868.jpg)


4.将\node_modules\react-native-smart-barcode\ios\raw 文件夹拖到到Xcode项目中（确保文件夹是蓝色的），如下图：
![](http://oo0vme8mf.bkt.clouddn.com/15130648120573.jpg)

5.在info.plist添加相机权限 Privacy - Camera Usage Description：
![](http://oo0vme8mf.bkt.clouddn.com/15130648872589.jpg)



react-native 代码 

    
    import React, {
        Component,
    } from 'react'
    import {
        View,
        StyleSheet,
        Alert,
    } from 'react-native'
    
    import Barcode from 'react-native-smart-barcode'
    import TimerEnhance from 'react-native-smart-timer-enhance'
    
    class BarcodeTest extends Component {
    
        // 构造
        constructor(props) {
            super(props);
            // 初始状态
            this.state = {
                viewAppear: false,
            };
        }
    
        render() {
    
            return (
                <View style={{flex: 1, backgroundColor: 'black',}}>
                    {this.state.viewAppear ? <Barcode style={{flex: 1,}}
                                                      ref={component => this._barCode = component}
                                                      onBarCodeRead={this._onBarCodeRead}/> : null}
                </View>
            )
        }
    
        componentDidMount() {
    
            this.setState({
                viewAppear: true,
            })
            // let viewAppearCallBack = (event) => {
            //     this.setTimeout(() => {
            //         this.setState({
            //             viewAppear: true,
            //         })
            //     }, 255)
            //
            // }
            // this._listeners = [
            //    // this.props.navigator.navigationContext.addListener('didfocus', viewAppearCallBack)
            // ]
    
        }
    
        componentWillUnmount() {
            this._listeners && this._listeners.forEach(listener => listener.remove());
        }
    
        _onBarCodeRead = (e) => {
            console.log(`e.nativeEvent.data.type = ${e.nativeEvent.data.type}, e.nativeEvent.data.code = ${e.nativeEvent.data.code}`)
            this._stopScan()
            Alert.alert(e.nativeEvent.data.type, e.nativeEvent.data.code, [
                {text: 'OK', onPress: () => this._startScan()},
            ])
        }
    
        _startScan = (e) => {
            this._barCode.startScan()
        }
    
        _stopScan = (e) => {
            this._barCode.stopScan()
        }
    
    }
    
    export default TimerEnhance(BarcodeTest)
    
>     
      
      
            
   附原文


-------

![](http://oo0vme8mf.bkt.clouddn.com/15130651274965.jpg)

-------

 

######    关注公众号获取更多内容
![](https://raw.githubusercontent.com/yxwandroid/question/master/%E5%85%AC%E4%BC%97%E5%8F%B78cm.jpg)

