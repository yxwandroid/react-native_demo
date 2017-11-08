import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';


export default class HomePage extends React.Component {

    static navigationOptions = {
        title: '首页',//设置标题内容

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
                    title="tab 跳转 stack"/>
            </View>
        )
    }
}

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
