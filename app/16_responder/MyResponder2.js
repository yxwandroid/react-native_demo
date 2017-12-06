import React, {PureComponent, Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ART,
    PanResponder,
} from 'react-native';

const {
    Shape,
    Surface,
    Path
} = ART

export default class TouchStartAndRelease extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'red',
            marginTop: 100,
            marginLeft: 100,
            backgroundColor1: 'grey',
            marginTop1: 100,
            marginLeft1: 100,
        };
        this.showPoints = new Path();
        this.showPoints.moveTo(1, 1);
        this.lastX = this.state.marginLeft;
        this.lastY = this.state.marginTop;
        this.lastX1 = this.state.marginLeft1;
        this.lastY1 = this.state.marginTop1;
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onPanResponderGrant: (evt, gestureState) => {
                this._highlight();
                console.log('highlight');
            },
            onPanResponderMove: (evt, gestureState) => {
                console.log(`gestureState.dx : ${gestureState.dx}   gestureState.dy : ${gestureState.dy}`);
               // this.showPoints.lineTo(this.lastX + gestureState.dx, this.lastY + gestureState.dy);
                this.setState({
                    marginLeft: this.lastX + gestureState.dx,
                    marginTop: this.lastY + gestureState.dy,
                })

            },
            onPanResponderRelease: (evt, gestureState) => {
                this._unhighlight();
                this.lastX = this.state.marginLeft;
                this.lastY = this.state.marginTop;
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
        });

        this._panResponder1 = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onPanResponderGrant: (evt, gestureState) => {
                this._highlight1();
            },
            onPanResponderMove: (evt, gestureState) => {
                console.log(`gestureState.dx : ${gestureState.dx}   gestureState.dy : ${gestureState.dy}`);
                this.setState({
                    marginLeft1: this.lastX1 + gestureState.dx,
                    marginTop1: this.lastY1 + gestureState.dy,
                });
            },
            onPanResponderRelease: (evt, gestureState) => {
                this._unhighlight1();
                this.lastX1 = this.state.marginLeft1;
                this.lastY1 = this.state.marginTop1;
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
        });
    }

    _unhighlight() {
        this.setState({
            backgroundColor: 'red',
        });
    }

    _highlight() {
        this.setState({
            backgroundColor: 'blue',
        });
    }

    _unhighlight1() {
        this.setState({
            backgroundColor1: 'grey',
        });
    }

    _highlight1() {
        this.setState({
            backgroundColor1: 'green',
        });
    }

    render() {

        const path = Path()  //实线
            .moveTo(1, 1)//移动起始点
            .lineTo(300, 30).close();//绘制结束后的坐标点
        return (
            <View style={styles.container}>
                <View style={
                    [styles.greyView,
                        {
                            backgroundColor: this.state.backgroundColor1,
                            marginTop: this.state.marginTop1,
                            marginLeft: this.state.marginLeft1,
                        }
                    ]}
                      {...this._panResponder1.panHandlers}
                >

                    <Surface width={300} height={2}>
                        {/*
                        stroke : 描边颜色
                        strokeWidth : 描边宽度
                        strokeDash : 定义虚线
                        fill : 填充颜色
                        */}
                        <Shape d={this.showPoints} stroke="#000000" strokeWidth={1}/>
                    </Surface>
                </View>
                <View style={[styles.redView,
                    {
                        backgroundColor: this.state.backgroundColor,
                        marginTop: this.state.marginTop,
                        marginLeft: this.state.marginLeft,
                    }
                ]}
                      {...this._panResponder.panHandlers}
                ></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greyView: {
        width: 200,
        height: 200,
    },
    redView: {
        width: 100,
        height: 100,
    },
});
