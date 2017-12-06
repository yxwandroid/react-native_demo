import React, {PureComponent, Component} from 'react';
import {
    StyleSheet,
    View,
    ART,
    PanResponder,
} from 'react-native';

const {
    Shape,
    Surface,
    Path
} = ART


export default class MyResponder extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            firstX: 0,
            firstY: 0,
            lastX: 0,
            lastY: 0

        };
        this.MousePostion = {x: 0, y: 0}

        this.MousePostions = []
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
                console.log(`Grant:  firstX: ${evt.nativeEvent.pageX}   firstY : ${evt.nativeEvent.pageY}`);
                this.setState({
                    firstX: evt.nativeEvent.pageX,
                    firstY: evt.nativeEvent.pageY,

                })


            },//激活时做的动作
            onPanResponderMove: (evt, gestureState) => {
                console.log(`dx : ${gestureState.dx}   dy : ${gestureState.dy}`);
                this.MousePostion = {
                    x: this.state.firstX + gestureState.dx,
                    y: this.state.firstY + gestureState.dy
                }
                this.MousePostions.push(this.MousePostion);

                this.setState({
                    lastX: this.state.firstX + gestureState.dx,
                    lastY: this.state.firstY + gestureState.dy,
                })



            }, //移动时作出的动作

            onPanResponderRelease: (evt, gestureState) => {
                console.log('Release');
            },///动作释放后做的动作

            onPanResponderTerminate: (evt, gestureState) => {
            },
        });

    }


    render() {

        const path = new Path()
       path.moveTo(this.state.firstX, this.state.firstY)

        for(let i=0;i<this.MousePostions.length-1;i++){
           const tempX=this.MousePostions[i].x
           const tempY=this.MousePostions[i].y
            path.lineTo(tempX, tempY)
        }
        // path.lineTo(this.state.lastX, this.state.lastY)
       // path.close()
        return (
            <View style={styles.container} {...this._panResponder.panHandlers} >
                <Surface width={800} height={800}>
                    <Shape d={path} stroke="#000000" strokeWidth={1}/>
                </Surface>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // width: 300,
        // height: 300,
        flex: 1,
    },
});
