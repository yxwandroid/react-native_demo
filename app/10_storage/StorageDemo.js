import React, {Component} from 'react';
import constants from '../utils/constants.js'
import {
    AsyncStorage,
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
} from 'react-native';

// 数据对应的key
var STORAGE_KEY = 'I_AM_KEY';
//AsyncStroage使用
export default class StorageDemo extends Component {

    // 获取
    async _get() {
        console.log('Demo._get()');
        try {// try catch 捕获异步执行的异常
            var value = await AsyncStorage.getItem(STORAGE_KEY);
            if (value !== null) {
                console.log('_get() success: ', value);
            } else {
                console.log('_get() no data');
            }
        } catch (error) {
            console.log('_get() error: ', error.message);
        }
    }

    // 保存
    async _save(value) {
        console.log('Demo._save()');
        try {
            await AsyncStorage.setItem(STORAGE_KEY, value);
            console.log('_save success: ', value);
        } catch (error) {
            console.log('_save error: ', error.message);
        }
    }

    // 删除
    async _remove() {
        console.log('Demo._remove()');
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            console.log('_remove() success');
        } catch (error) {
            console.log('_remove() error: ', error.message);
        }
    }

    render() {
        return (
            <View style={{flexDirection: 'column', flex: 1, marginTop: 50,}}>
                <TouchableOpacity style={{padding: 10, flex: 1, flexDirection: 'row',}}
                                  onPress={() => this._save('haha')
                                      .then(() => console.log('you can do something here when the setItem is starting'))
                                      .done(() => console.log('you can do something here when the setItem is done'))}>
                    <Text style={{fontSize: 16, color: '#333333'}}>保存数据</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{padding: 10, flex: 1, flexDirection: 'row',}}
                                  onPress={() => this._get().done()}>
                    <Text style={{fontSize: 16, color: '#333333'}}>获取数据</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 10, flex: 1, flexDirection: 'row',}} onPress={() => this._remove()}>
                    <Text style={{fontSize: 16, color: '#333333'}}>删除数据</Text>
                </TouchableOpacity>

                <View style={{padding: 10, flex: 1, flexDirection: 'column'}}>
                    <Text style={styles.instructions}>
                        {constants.name}
                    </Text>
                    <Text style={styles.instructions}>
                        {constants.website}
                    </Text>


                    <Text
                        style={styles.instructions}>
                        wilson {global.constants.name}
                    </Text>
                    <Text style={styles.instructions}>
                        wilson {global.constants.website}
                    </Text>
                </View>
            </View>);
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
