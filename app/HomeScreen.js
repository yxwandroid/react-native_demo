import React from 'react';
import {
    View,
    Button,
    Text,
    ScrollView
} from 'react-native';

/**
 * 应用的主界面
 */
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <ScrollView>
                    <Button
                        //HelloWord
                        onPress={() => navigate('HelloWord')}
                        title="HelloWord"/>

                    <Button
                        //image 的使用
                        onPress={() => navigate('ImageDemo')}
                        title="image的使用"/>

                    <Button
                        //定时器使用 的使用
                        onPress={() => navigate('CountDown')}
                        title="定时器使用"/>
                    <Button
                        //点赞控件
                        onPress={() => navigate('Likes')}
                        title="点赞控件"/>
                    <Button
                        //flex 布局总结
                        onPress={() => navigate('FlexDiceTest')}
                        title="flex 布局总结"/>
                    <Button
                        //FetchNetData 布局总结
                        onPress={() => navigate('FetchNetData')}
                        title="FetchNetData 网络获取数据"/>
                    <Button
                        //跳转界面   并且传递参数
                        onPress={() => navigate('NavigationDemo1', {user: 'wilson'})}
                        title="react-navigation 传递参数"/>
                    <Button
                        //跳转界面   并且传递参数
                        onPress={() => navigate('HomePage', {user: 'wilson'})}
                        title="tabstackdrawer使用"/>
                    <Button
                        //全局变量和 Storage 界面
                        onPress={() => navigate('GlobaStoragelUtil')}
                        title="全局变量和是 Storage 的使用"/>
                    <Button
                        onPress={() => navigate('ScrollableTabDemo1')}
                        title="ScrollableTabView 使用"/>
                    <Button
                        onPress={() => navigate('ListViewDemo')}
                        title="listView 使用"/>
                    <Button
                        onPress={() => navigate('FlatListDemo')}
                        title="FlatList使用"/>
                    <Button
                        onPress={() => navigate('PropStateDemo')}
                        title="Prop State 的区别"/>
                    <Button
                        onPress={() => navigate('I18nDemo')}
                        title="国际化"/>

                    <Button
                        onPress={() => navigate('MyResponder')}
                        title="Responder使用"/>
                    <Button
                        onPress={() => navigate('Air_anim_shape')}
                        title="AnimShape"/>
                    <Button
                        onPress={() => navigate('CreateQRCode')}
                        title="CreateQRCode"/>

                    <Button
                        onPress={() => navigate('ScreenOn')}
                        title="屏幕常亮"/>
                </ScrollView>
            </View>
        );
    }
}
