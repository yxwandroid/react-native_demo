import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

export default class FlexDiceTest extends Component {
    render() {
        return (
            <View style={FlexDiceTestStyle.container}>
                <Text style={FlexDiceTestStyle.item1}>1</Text>
                <Text style={FlexDiceTestStyle.item2}>2</Text>
                <Text style={FlexDiceTestStyle.item3}>3</Text>
                <Text style={FlexDiceTestStyle.item4}>4</Text>
                <Text style={FlexDiceTestStyle.item5}>5</Text>
                <Text style={FlexDiceTestStyle.item6}>6</Text>
                <Text style={FlexDiceTestStyle.item7}>7</Text>
                <Text style={FlexDiceTestStyle.item8}>8</Text>
                <Text style={FlexDiceTestStyle.item9}>9</Text>

                <View style={FlexTestStyle.container}>
                    <Text style={FlexTestStyle.item}>1</Text>
                    <Text style={FlexTestStyle.item}>2</Text>
                    <Text style={FlexTestStyle.item}>3</Text>
                    <Text style={FlexTestStyle.item}>4</Text>
                    <Text style={FlexTestStyle.item_flex_end}>5</Text>
                </View>
            </View>
        )
    }
}



const FlexTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "#0ff",
        flexDirection: "row",
        flex: 1,
    },
    item: {
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
const FlexDiceTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        height: 300,
        width: 300,
        justifyContent: "space-between",
        flexWrap: "wrap",
        flexDirection: "row",
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
    item6: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item7: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item8: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item9: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    }
})
