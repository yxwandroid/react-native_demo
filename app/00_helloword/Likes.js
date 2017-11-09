import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native'

export default class Likes extends Component {
    state = {
        likes: 0,
    };


    //箭头函数
    onPress = () => {
        const {likes} = this.state;
        this.setState({
            likes: likes + 1,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.Touchable} onPress={this.onPress}>
                    <Text>点赞</Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/js/Thumbnails/like.png?raw=true',
                        }}
                    />
                </TouchableOpacity>
                <Text>{this.state.likes}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        width: 65,
        height: 65,
    },

    Touchable: {
        backgroundColor: 'red',
    }
})

