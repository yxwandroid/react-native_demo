import {StackNavigator, TabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen'
import StackNavigator1 from "./09_react_navigation/StackNavigator1";
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
    //首页
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    //简单的 stackNavigator 使用
    Details: {
        screen: StackNavigator1,
        navigationOptions: {
            headerTitle: 'StackNavigator',
        },
    },

    //界面之间传递数据 使用
    NavigationDemo1: {
        screen: React_NavigationDemo1,
        navigationOptions: {
            headerTitle: 'Navigation传递数据',
        },
    },


    // stack 嵌套 tab 进行页面跳转
    HomePage: {
        screen: MainScreenNavigator,
        navigationOptions: {
            headerTitle: 'TabStackDrawer 使用',
        },
    },
    // stack 嵌套 tab 进行页面跳转
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            headerTitle: 'TabStackDrawer 使用',
        },
    },


});
