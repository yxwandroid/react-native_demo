import React, {Component} from "react";
import {
    Text,
    Image,
    View,
    StyleSheet,
    ToastAndroid,

}from 'react-native';
import Frisbee from 'frisbee';

const api=new Frisbee({
    baseURI:'https://api.github.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Charset': 'utf-8',
        'Method': 'GET',
    }
});

fetchFrisbeeData();
const  mydata='';
async function fetchFrisbeeData(){
    let data= await api.get('/users/mralexgray/repos');
    console.log(data)
    // noinspection JSAnnotator
    mydata=data;
}
/**
 * Created by wilson
 * Desc:从网络获取数据，并展示到UI上
 */
export default class FetchNetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }




    //发起网络请求，获取数据
    fetchUserList() {
        const url = 'https://api.github.com/users/mralexgray/repos';
        fetch(url)
            .then((response)=>response.json())
            .then(
                (responseJson)=> {
                    var users = responseJson;
                    ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT)

                    var firstUser = users[0].owner;
                    console.log(responseJson);
                    this.setState({
                        user: firstUser,
                    })
                }
            )
            .catch((error)=>console.error(error))
    }



    //页面渲染完成后会主动回调该方法
    componentDidMount() {
        this.fetchUserList();
    }

    //绘制界面
    render() {
        let item = this.state.user;
        //这里需要判断网络请求完成与否，如果item为空时，会发生空指针
        if (item) {
            return this.renderItem(item);
        }
        return (
            <Text style={{textAlign: "center", fontSize: 16, padding: 20}}>加载中...</Text>
        )
    }

    //绘制展示数据的界面
    renderItem(item) {
        return (
            <View style={UserItemStyle.container_out}>
                <Image style={UserItemStyle.image_UserAvatar} source={{uri: item.avatar_url}}/>
                <View style={UserItemStyle.container_right}>
                    <Text style={UserItemStyle.text_UserID}>{item.id}</Text>
                    <Text style={UserItemStyle.text_UserType}>{item.type}</Text>
                </View>

                {/*<Text style={UserItemStyle.text_UserType}>{mydata}</Text>*/}
            </View>
        )
    }
}

const UserItemStyle = StyleSheet.create({
    container_out: {
        backgroundColor: "white",
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    container_right: {
        flexDirection: "column",
        height: 80,
        flexGrow: 1,
    },
    image_UserAvatar: {
        borderRadius: 80,
        width: 80,
        height: 80,
        resizeMode: "cover",
        marginHorizontal: 12
    },
    text_UserID: {
        color: "black",
        fontSize: 16,
        lineHeight: 24,
    },
    text_UserType: {
        color: "gray",
        fontSize: 12,
        lineHeight: 20,
    },
})
