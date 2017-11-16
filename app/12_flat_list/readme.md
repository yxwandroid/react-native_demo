flatList 使用总结




````import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Button,
    Text,
    Dimensions,
} from 'react-native';

const {width,height}=Dimensions.get('window')
export default class FlatListDemo extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    refreshing(){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            alert('刷新成功')
        },1500)
    }
    _onload(){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            alert('加载成功')
        },1500)
    }


    render() {

        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({key: i, title: i + ''})
        }
        return (
            <View style={{flex: 1}}>
                <Button title='滚动到指定位置' onPress={() => {
                    this._flatList.scrollToOffset({animated: true, offset: 2000});
                }}/>
                <View style={{flex: 1}}>
                    <FlatList
                        ref={(flatList) => this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        ListEmptyComponent={this._empty}
                        renderItem={this._renderItem}
                        onRefresh={this.refreshing}
                        refreshing={false}
                        onEndReachedThreshold={0}
                        onEndReached={
                            this._onload
                        }
                        numColumns={3}
                        columnWrapperStyle={{borderWidth: 2, borderColor: 'black', paddingLeft: 20}}

                        //horizontal={true}

                        getItemLayout={(data, index) => (
                            {length: 100, offset: (100 + 2) * index, index}
                        )}

                        data={data}>
                    </FlatList>
                </View>

            </View>
        );
    };

    _renderItem = (item) => {
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return <Text style={[{flex: 1, height: 100, backgroundColor: bgColor}, styles.txt]}>{txt}</Text>
    }

    _header = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是尾部</Text>;
    }

    _separator = () => {
        return <View style={{height: 2, backgroundColor: 'yellow'}}/>;
    }
    _empty=()=>{
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>数据为空的时候显示的内容</Text>;
    };

}
const styles = StyleSheet.create({
    container: {},
    content: {
        width: width,
        height: height,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell: {
        height: 100,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ececec',
        borderBottomWidth: 1

    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }

})


````



参考 
https://juejin.im/post/5978647d51882517905f652e


