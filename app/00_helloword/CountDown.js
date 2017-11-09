import React, {Component} from 'react'
import {
    Text,
    View,
} from 'react-native'

/**
 * 定时器倒计时   使用方式是箭头函数
 */
export  default class CountDown extends Component {
    state = {
        count: 30,
    };

    render() {
        const {count} = this.state;
        return (
            <Text>{count}</Text>
        )
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const {count} = this.state;
            if (count === 0) {
                return clearInterval(this.timer);
            }
            this.setState({
                count: count - 1,
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
}

