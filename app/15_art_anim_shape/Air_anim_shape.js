import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    ART,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

var {
    Surface, //一个矩形可渲染的区域，是其他元素的容器
    Group, // 可容纳多个形状、文本和其他的分组
    Shape, // 形状定义，可填充
    Path,
    Text, //文本形状定义
} = ART;

export default class Air_anim_shape extends Component {


    constructor(props) {
        super(props);

    }


    componentDidMount() {
        this.refs.mycomponent.measure((fx, fy, width, height, px, py) => {
            console.log('Component width is: ' + width)
            console.log('Component height is: ' + height)
            console.log('X offset to frame: ' + fx)
            console.log('Y offset to frame: ' + fy)
            console.log('X offset to page: ' + px)
            console.log('Y offset to page: ' + py)
        })
    }

    render() {

        const path = Path()  //实线
            .moveTo(1, 1)//移动起始点
            .lineTo(300, 1).close();//绘制结束后的坐标点
        const path2 = Path()  //虚线
            .moveTo(1, 50)//移动起始点
            .lineTo(300, 50)//绘制结束后的坐标点


        const path3 = new Path()
            .moveTo(1, 100)
            .lineTo(1, 199)
            .lineTo(99, 199)
            .lineTo(99, 100)
            .close();


        const path4 = new Path()
            .moveTo(50, 1)
            .arc(0, 99, 25)
            .arc(0, -99, 25)
            .close();

        return (
            <View ref="mycomponent" style={styles.container}>
                <Surface width={300} height={300}>
                    <Group>
                        {/*

                        stroke : 描边颜色
                        strokeWidth : 描边宽度
                        strokeDash : 定义虚线
                        fill : 填充颜色
                        */}
                        <Shape d={path} stroke="#000000" strokeWidth={1}/>
                        <Shape d={path2} stroke="#000000" strokeWidth={1} strokeDash={[10, 5]}/>

                        <Shape d={path3} stroke="#000000" strokeWidth={1} fill="#892265"/>
                        <Shape d={path4} stroke="#000000" strokeWidth={1}/>

                        <Text strokeWidth={1} stroke="#000" font="bold 35px Heiti SC"
                              path={new Path().moveTo(40, 40).lineTo(99, 10)}>React</Text>

                    </Group>
                </Surface>

                <Button title='wilson'/>

            </View>
        );
    };
}

const styles = StyleSheet.create({

        container: {
            width: 110,
            height: 100,
            backgroundColor: 'yellow',
            margin: 20,
        },
        imaga: {
            height: 20,
            width: 20,
        },
        shape: {
            margin: 20,
        }
    })
;

