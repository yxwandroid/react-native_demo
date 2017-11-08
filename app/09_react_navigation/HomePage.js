import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';


export  default  class HomePage extends React.Component {

    static navigationOptions = {
        title: '首页',//设置标题内容
        // header: {
        //     backTitle: ' ',//返回按钮标题内容（默认为上一级标题内容）
        // }
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{padding: 10}}>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Chat', {user: 'Sybil'})}
                    title="点击跳转"/>
            </View>
        )
    }
}
//
// const MainScreenNavigator = TabNavigator({
//         Home: {
//             screen: HomePage,
//         },
//         Certificate: {
//             screen: MinePage,
//         },
//     },
//     {
//         lazy: true,
//         tabBarPosition: 'bottom',
//         tabBarOptions: {
//             activeTintColor: '#3e9ce9',
//             inactiveTintColor: '#999999',
//             showIcon: true,
//             style: {
//                 backgroundColor: '#fff'
//             },
//             indicatorStyle: {
//                 opacity: 0
//             },
//             tabStyle: {
//                 padding: 0
//             }
//         }
//     }
// );
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});
//
// const SimpleApp = StackNavigator({
//     Home: {screen: MainScreenNavigator},
//     Chat: {screen: ChatScreen},
//
// });
//
// export default SimpleApp;
//
