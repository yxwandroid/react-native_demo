import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
} from 'react-native';

// noinspection JSAnnotator
export default class ListViewDemo extends Component<{}> {


    constructor(props) {
        super(props);
        // 初始化数据源(rowHasChanged是优化的一种手段，只有当r1 !== r2的时候才会重新渲染)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            // 给dataSource传递一组 数组
            dataSource: ds.cloneWithRows(['内容0', '内容1', '内容2', '内容3', '内容4', '内容5'])

        };
    }


    render() {
        return (
            <View style={styles.container}>
                <ListView style={{backgroundColor: 'yellow'}}
                    // 获取数据源
                          dataSource={this.state.dataSource}
                    // / 根据数据源创建一个Item
                    // 注：这里的this.renderRow是隐式写法，系统会根据函数的需要，将对应的参数传递过去（共有4个参数：rowData, sectionID, rowID, highlightRow）

                          renderRow={this.renderRow}/>
            </View>
        );
    };

    // 返回一个Item
    renderRow(rowData, sectionID, rowID) {
        return (
            // 实例化Item
            <View>
                <Text style={{backgroundColor: 'red', height: 44}}>内容{rowData},在第{sectionID}组第{rowID}行</Text>
            </View>
        )
    }


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

