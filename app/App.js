import {StackNavigator, TabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen'
import React_NavigationDemo1 from "./09_react_navigation/React_NavigationDemo1";
import HomePage from "./09_react_navigation/HomePage";
import MinePage from "./09_react_navigation/MinePage";
import ChatScreen from "./09_react_navigation/ChatScreen";


const MainScreenNavigator = TabNavigator({

        Home: {
            screen: HomePage,
        },
        Certificate: {
            screen: MinePage,
        },
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#3e9ce9',
            inactiveTintColor: '#999999',
            showIcon: true,
            style: {
                backgroundColor: '#fff'
            },
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {
                padding: 0
            }
        }
    }
);
export const App = StackNavigator({
    //首页 添加新的功能的时候就在这个界面添加跳转逻辑
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },

    // Demo1 界面之间传递数据 使用
    NavigationDemo1: {
        screen: React_NavigationDemo1,
        navigationOptions: {
            headerTitle: 'Navigation传递数据',
        },
    },

    //Tab 跳转 stack 使用
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            headerTitle: 'Tab 跳转 stack 使用',
        },
    },

    // stack 嵌套 tab 进行页面跳转
    HomePage: {
        screen: MainScreenNavigator,
        navigationOptions: {

            headerTitle: 'TabStackDrawer 使用',
        },
    },


});
