import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';
import {StackNavigator} from 'react-navigation';


const HomeScreen = ({navigation}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Text>react_navigation的简单使用</Text>


        <Text>接收传递过来的参数 {navigation.state.params.user}</Text>
        <Button
            onPress={() => navigation.navigate('Details')}
            title="Go to details"
        />
    </View>
);

const DetailsScreen = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>


    </View>
);


const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },

});


export default RootNavigator;
