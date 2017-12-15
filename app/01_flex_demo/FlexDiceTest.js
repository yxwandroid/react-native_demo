import React, {Component} from "react";
import {StyleSheet, Image, ScrollView, View, Text} from "react-native";

export default class FlexDiceTest extends Component {
    render() {
        return (
            <ScrollView>
                <View style={FlexDiceTestStyle.container}>
                <Text style={FlexDiceTestStyle.item1}>1</Text>
                <Text style={FlexDiceTestStyle.item2}>2</Text>
                <Text style={FlexDiceTestStyle.item3}>3</Text>
                <Text style={FlexDiceTestStyle.item4}>4</Text>
                <Text style={FlexDiceTestStyle.item5}>5</Text>
                </View>

                {/*<View style={FlexTestStyle.container}>*/}
                {/*<Text style={FlexTestStyle.item}>1</Text>*/}
                {/*<Text style={FlexTestStyle.item}>2</Text>*/}
                {/*<Text style={FlexTestStyle.item}>3</Text>*/}
                {/*<View style={FlexTestStyle.item4}>*/}
                {/*<Image style={FlexTestStyle.image} source={require('../imgs/demo.jpg')}/>*/}
                {/*<Text style={FlexTestStyle.item4text}>4</Text>*/}
                {/*</View>*/}
                {/*<Text style={FlexTestStyle.item_flex_end}>5</Text>*/}
                {/*</View>*/}


                {/*<View style={MyStyles.container}>*/}
                    {/*<Image style={MyStyles.image} source={require('../imgs/demo.jpg')}>*/}
                        {/*<Text style={MyStyles.text}>4</Text>*/}
                    {/*</Image>*/}

                {/*</View>*/}
            </ScrollView>
        )
    }
}

//设置控件居中属性  嵌套布局
const MyStyles = StyleSheet.create({
    container: {
        height:200,
        justifyContent: 'center',
        backgroundColor :'red',
        flex:1,
        alignItems:'center'
    },
    image: {
        justifyContent: 'center',
        //alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
        height: 80,
        width: 80,
    },
    text: {
        color:'#FF7700',
        backgroundColor:'transparent',
        alignSelf: "center",
    }


})
const FlexDiceTestStyle = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: 500,
        //height: 10000,
        //width: 10000,
        justifyContent: 'space-between',
        // justify-content:
        // flex-start   左对齐
        // flex-end     右对齐
        // center       居中
        // space-between  两端对齐
        // space-around;  每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

        flexWrap: 'wrap',
        // flex-wrap:定义布局在排列满之后是否换行
        // nowrap   不使用换行
        // wrap  使用换行
        // wrap-reverse; 貌似废弃了
        flexDirection: "row",
        //  flex-direction:  定义布局的排列方向和顺序
        // row                  --->(右箭头)
        // row-reverse          <------(左箭头)
        // column               ↓(下箭头)
        // column-reverse ↑*(上箭头)


        // alignItems:'flex-end',
        //alignItems enum('flex-start', 'flex-end', 'center', 'stretch')
    },
    item1: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item2: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item3: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item4: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
        alignSelf: "flex-end"
    },
    item5: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },

})


const FlexTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "#0ff",
        flexDirection: "row",
        flex: 1,
    },
    image: {
        height: 30,
        width: 30,
        alignSelf: "center",
    },
    item: {
        backgroundColor: "#f0f",
        flexGrow: 1,//相当于Android控件中的weight属性
        margin: 4,
        height: 100,
    },
    item4text: {
        alignSelf: "center",
    },
    item4: {
        justifyContent: 'center',
        backgroundColor: "#f0f",
        flexGrow: 1,//相当于Android控件中的weight属性
        margin: 4,
        height: 100,
    },
    item_flex_end: {
        backgroundColor: "#f0f",
        flexGrow: 1,//相当于Android控件中的weight属性
        margin: 4,
        height: 100,
        alignSelf: "flex-end",
    }
})
