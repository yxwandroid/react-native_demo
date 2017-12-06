/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    ART,
    PanResponder,
    Dimensions
} from 'react-native'
import Utils from './Utils'
const {width, height} = Dimensions.get('window')
const {
    Shape,
    Surface,
    Path
} = ART

let cv = {
    touch_begin: 0,
    touch_move: 1,
    touch_ended: 2
}

export default class Air_anim_shape extends Component {
    constructor (props, context) {
        super(props, context)
        this._panResponder = {}
        this.mousePosition = null
        this.lastMousePostion = {x: 0, y: 0}
        this.arrOrgPoint = []
        this.arrUsedPoint = []
        this.blnCanDraw = false
        this.showPoints = new Path()

        this.wrongCount = 0
        this.state = {
            blnUpdate: false
        }

        // this.onResponderGrant = this.onResponderGrant.bind(this)
        // this.onPanResponderMove = this.onPanResponderMove.bind(this)
        // this.onPanResponderRelease = this.onPanResponderRelease.bind(this)
        // this.onPanResponderTerminate = this.onPanResponderTerminate.bind(this)
    }
    setUpdate () {
        this.setState({
            blnUpdate: !this.state.blnUpdate
        })
    }
    componentWillMount () {
        this.gestureHandlers = PanResponder.create({
            onStartShouldSetPanResponder: (e, g) => true, // 用户开始触摸屏幕的时候，是否愿意成为响应者；默认返回false，无法响应，当返回true的时候则可以进行之后的事件传递。
            onMoveShouldSetPanResponder: (e, g) => true, // 在每一个触摸点开始移动的时候，再询问一次是否响应触摸交互；

            onPanResponderGrant: (e, g) => this.onResponderGrant(e, g), // 开始手势操作，也可以说按下去。给用户一些视觉反馈，让他们知道发生了什么事情！
            onPanResponderMove: (e, g) => this.onResponderMove(e, g), // 最近一次的移动距离.如:(获取x轴y轴方向的移动距离 gestureState.dx,gestureState.dy)
            onPanResponderRelease: (e, g) => this.onResponderRelease(e, g), // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
            onPanResponderTerminate: (e, g) => this.onResponderTerminate(e, g) // 另一个组件已经成为了新的响应者，所以当前手势将被取消(就是说点到另外一个可以响应点击事件的组件)
        })
    }
    componentDidMount () {
        // this._autoUpdate = setInterval(this.autoUpdate.bind(this), 1 / 60)
    }
    componentWillUnmount () {
        // this._autoUpdate && clearInterval(this._autoUpdate)
        this.ResetDrawPoint()
        this.showPoints = null
    }

    onResponderGrant (e, g) {
        if (g.numberActiveTouches === 1) {
            this.mousePosition = {
                x: e.nativeEvent.pageX,
                y: e.nativeEvent.pageY
            }
            this.ResetDrawPoint()
            this.showPoints.moveTo(e.nativeEvent.pageX, e.nativeEvent.pageY)
            this.arrUsedPoint.push(this.mousePosition)
            this.AddUsePoint(this.mousePosition, cv.touch_begin)
        }
    }
    onResponderMove (e, g) {
        if (g.numberActiveTouches === 1) {
            this.mousePosition = {
                x: e.nativeEvent.pageX,
                y: e.nativeEvent.pageY
            }
            var s = Utils.DisP(this.mousePosition, this.lastMousePostion)
            if (s >= 5) {
                this.AddUsePoint(this.mousePosition, cv.touch_move)
            }
        }
    }
    onResponderRelease (e, g) {
        this.endResponder(e, g)
    }
    onResponderTerminate (e, g) {
        this.endResponder(e, g)
    }
    endResponder (e, g) {
        this.ResetDrawPoint()
        this.mousePosition = { //  保存当前的鼠标坐标
            x: e.nativeEvent.pageX,
            y: e.nativeEvent.pageY
        }
        this.lastMousePostion = this.mousePosition
    }
    ResetDrawPoint () {
        this.arrOrgPoint = []
        this.arrUsedPoint = []
        this.blnCanDraw = false
    }
    AddUsePoint (pos, kind) {
        if (kind === cv.touch_begin) {
            this.lastMousePostion = this.mousePosition
            this.arrOrgPoint.push(pos)
            this.blnCanDraw = true
        } else if (this.blnCanDraw) {
            this.arrOrgPoint.push(pos)
            var blnSet = false
            if (this.arrOrgPoint.length > 2) {
                var listTemp = []// 将最新的三个点加入一个临时数组里面
                listTemp.push(this.arrOrgPoint[this.arrOrgPoint.length - 3])
                listTemp.push(this.arrOrgPoint[this.arrOrgPoint.length - 2])
                listTemp.push(this.arrOrgPoint[this.arrOrgPoint.length - 1])
                listTemp = this.BSpline2Smooth1(listTemp, false)// 将数组传入算法中进行计算
                for (var i = 0; i < listTemp.length; i++) {
                    this.AddSinglePoint(listTemp[i])
                }
                blnSet = true
            } else {
                var count = Utils.DisP(this.lastMousePostion, pos)
                if (count > 1) {
                    var c = Math.ceil(count)
                    for (let i = 0; i < c; i++) {
                        if (i === c - 1) {
                            this.AddSinglePoint(pos)
                        } else {
                            var p = Utils.LerpP(this.lastMousePostion, pos, (i + 1) / c)
                            this.AddSinglePoint(p)
                        }
                    }
                    blnSet = true
                } else {
                    blnSet = false
                }
            }
        }
        if (blnSet) {
            this.lastMousePostion = this.mousePosition
        }
        this.setUpdate()
    }
    BSpline2Smooth1 (list, blnSet) { // 曲线算法处理函数
        var aList = []
        aList = aList.concat(list)
        if (blnSet) {
            aList.unshift(list[0])
            aList.push(list[list.length - 1])
        }
        var tList = []
        var loc1 = 1
        let start = {}
        let end = {}
        while (loc1 < aList.length - 1) {
            start = aList[loc1 - 1]
            end = aList[loc1 + 1]
            tList.push(Utils.LerpP(aList[loc1 - 1], aList[loc1], 0.5))// 添加两点的中点
            this.BSpline2Smooth2(tList, start, aList[loc1], end)// 最主要的是这里
            tList.push(Utils.LerpP(aList[loc1], aList[loc1 + 1], 0.5))
            ++loc1
        }
        var rl = Utils.ResampleByLen(tList, 20)// 得到处理之后的点之后，对点数组进行标准化处理，就算输出总长度，每个2个单位距离去一个插值点，得到新数据
        if (rl != null) {
            return rl
        } else {
            return tList
        }
    }
    BSpline2Smooth2 (list, arg1, arg2, arg3) {
        var locx = []
        var locy = []
        locx.push((arg1.x + arg2.x) * 0.5)
        locx.push(arg2.x - arg1.x)
        locx.push((arg1.x - 2 * arg2.x + arg3.x) * 0.5)
        locy.push((arg1.y + arg2.y) * 0.5)
        locy.push(arg2.y - arg1.y)
        locy.push((arg1.y - 2 * arg2.y + arg3.y) * 0.5)
        var loc6 = parseInt(Utils.CountDistance(arg1, arg3))
        var loc7 = 0
        var loc8 = 0
        while (loc7 < loc6) {
            loc8 = loc7 / loc6
            var loc5 = {
                x: locx[0] + loc8 * (locx[1] + locx[2] * loc8),
                y: locy[0] + loc8 * (locy[1] + locy[2] * loc8)
            }
            list.push(loc5)
            loc7++
        }
    }
    AddSinglePoint (pos) {
        this.arrUsedPoint.push(pos)
        this.showPoints.lineTo(pos.x, pos.y)
    }
    render () {
        return (
            <View style={styles.container} {...this.gestureHandlers.panHandlers}>
                <View style={styles.mouseView}>
                    <Surface ref={'lineView'} width={width} height={height}>
                        <Shape d={this.showPoints} stroke={'rgb(0,0,255)'} strokeWidth={3} />
                    </Surface>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    mouseView: {
        flex: 1,
        backgroundColor: 'pink',
        borderWidth: 1,
        borderColor: 'black'
    }
})
