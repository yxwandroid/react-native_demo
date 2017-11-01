import React,{Component} from  'react';
import {
    Text,
} from  'react-native';

class Greeting extends  React.Component{
    render(){
        return (
            <Text>hello {this.props.name}</Text>
        );
    };
}
module.export=Greeting;
