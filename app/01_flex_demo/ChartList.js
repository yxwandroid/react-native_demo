/**
 * 聊天列表
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Button,
    Text,
    Image,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window')

export default class ChartList extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    refreshing() {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('刷新成功')
        }, 1500)
    }

    _onload() {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('加载成功')
        }, 1500)
    }


    render() {

      //  const {navigate} = this.props.navigation;
        let data = [];

        let user1 = {
            head: require('../imgs/demo.jpg'),
            userName: 'yangxuewu'
        };
        // let user2 = {
        //     head: require('../../../images/user2.jpeg'),
        //     userName: 'wilson'
        // };
        // let user3 = {
        //     head: require('../../../images/user3.jpeg'),
        //     userName: '乔布斯'
        // };
        // let user4 = {
        //     head: require('../../../images/user4.jpeg'),
        //     userName: '库克'
        // };
        // let user5 = {
        //     head: require('../../../images/user5.jpeg'),
        //     userName: '马云'
        // };

        data.push(user1);
        // data.push(user2);
        // data.push(user3);
        // data.push(user4);
        // data.push(user5);
        // // for (let i = 0; i < 10; i++) {
        //     data.push({key: i, title: i + ''})
        // }
        return (
            <View style={styles.container}>
                <Button title='聊天列表'/>
                <FlatList
                    // ref={(flatList) => this._flatList = flatList}
                    // ListHeaderComponent={this._header}
                    // ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}  //行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后。
                    ListEmptyComponent={this._empty}
                    renderItem={this._renderItem}
                    // onRefresh={this.refreshing}
                    // refreshing={false}
                    // onEndReachedThreshold={0}
                    // onEndReached={
                    //     this._onload
                    // }
                    // numColumns={1}
                    // columnWrapperStyle={{borderWidth: 2, borderColor: 'black', paddingLeft: 20}}
                    // horizontal={false}
                    // getItemLayout={(data, index) => (
                    //           {length: 100, offset: (100 + 2) * index, index}
                    // )}

                    data={data}>
                </FlatList>

            </View>
        );
    };

    _renderItem = (item) => {
        return
        <View style={styles.itemContainer}>
            <Image style={styles.itemImage} source={item.item.head}/>
            <Text style={styles.itemText}>{item.item.userName}</Text>
        </View>

    }

    _header = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是尾部</Text>;
    }

    _separator = () => {
        return <View style={{height: 1, backgroundColor: '#B0C4DE'}}/>;
    }
    _empty = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>数据为空的时候显示的内容</Text>;
    };

    // //跳转界面到 chatRoom
    // onPress = (navigate) => {
    //     Alert.alert(I18n.t('hint'), '点击了')
    //     // navigate('ChatRoom', {isCalling: false, userName: this.state.userName, chatRoomID: this.state.charRoom})
    // }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    itemContainer: {
        padding: 10,
        backgroundColor: '#F5FCFF',
        flexDirection: "row",
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    itemText: {
        marginLeft: 20,
        marginTop: 10,
        textAlign: 'center',
        color: '#333333',
    },
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
        color: 'black',
        fontSize: 30,
    }

})
