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
    Path,
    Group,
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
        this.MousePostion = {x: 0, y: 0};
        this.MousePostions = [];
        this.allPostions = [];
        this.temp = [];
        this.tag = true;


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
             //   console.log(`Grant:  firstX: ${evt.nativeEvent.pageX}   firstY : ${evt.nativeEvent.pageY}`);
                console.log('grant')
                // this.MousePostion = {
                //     x: evt.nativeEvent.pageX,
                //     y: evt.nativeEvent.pageY
                // }
                // this.temp = [];
                // this.temp.push(this.MousePostion);

                this.setState({
                    firstX: evt.nativeEvent.pageX,
                    firstY: evt.nativeEvent.pageY,
                })


            },//激活时做的动作
            onPanResponderMove: (evt, gestureState) => {
              //  console.log(`dx : ${gestureState.dx}   dy : ${gestureState.dy}`);

                this.MousePostion = {
                    x: this.state.firstX + gestureState.dx,
                    y: this.state.firstY + gestureState.dy
                }
               // this.temp.push(this.MousePostion);
                this.MousePostions.push(this.MousePostion);

                this.setState({
                    lastX: this.state.firstX + gestureState.dx,
                    lastY: this.state.firstY + gestureState.dy,
                })


            }, //移动时作出的动作

            onPanResponderRelease: (evt, gestureState) => {
                console.log('Release');
                this.allPostions.push(this.temp);

            },///动作释放后做的动作

            onPanResponderTerminate: (evt, gestureState) => {
            },
        });

    }


    render() {


        let tempPath=[];//所有的画笔数组
        // for (let i = 0; i < this.MousePostions.length; i++) {
        //     let temp = this.MousePostions[i];
        //
        //     console.log('第'+i+'个画笔'+JSON.stringify(this.MousePostions[i]))
        //
        //     let  path = new Path();
        //     //创建画笔的起始点
        //     path.moveTo(temp[0].x, temp[0].y)
        //     //创建画笔的路径
        //     for(let j=1;j<temp.length;j++){
        //         const tempX = this.temp[i].x
        //         const tempY = this.temp[i].y
        //         path.lineTo(tempX, tempY)
        //    }
        //     tempPath.push(path);
        // }


        const path = new Path()
        path.moveTo(this.state.firstX, this.state.firstY)
        for (let i = 0; i < this.MousePostions.length; i++) {
            const tempX = this.MousePostions[i].x
            const tempY = this.MousePostions[i].y
            path.lineTo(tempX, tempY)
        }
        const jsonTest = JSON.stringify(this.MousePostions)
        console.log(jsonTest)
        // path.lineTo(this.state.lastX, this.state.lastY)
        // path.close()
        return (
            <View style={styles.container} {...this._panResponder.panHandlers} >
                <Surface width={800} height={800}>
                    <Group>
                        {
                            // tempPath.map((item,index)=><Shape key={index} d={item} stroke="#000000" strokeWidth={1}/>)
                        }

                        <Shape d={item} stroke="#000000" strokeWidth={1}/>
                    </Group>
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
