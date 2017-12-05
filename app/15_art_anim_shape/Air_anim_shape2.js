import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    ART,
    PanResponder,
    TouchableOpacity,
    StatusBar,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

var {
    Shape,
    Group,
    Transform,
    Surface,
    Path,
    Pattern,
    LinearGradient,
    RadialGradient,
    // Text,
    ClippingRectangle,
} = ART;

import Utils from './Utils';

let cv = {
    status_norm: 0,
    status_auto: 1,
    status_pause: 2,

    touch_begin: 0,
    touch_move: 1,
    touch_ended: 2,
};

export default class Air_anim_shape extends Component {

    constructor(props) {
        super(props);
        this._panResponder = {};
        this.mousePosition = null;
        this.lastMousePostion = null;
        this.arrOrgPoint = [];
        this.arrUsedPoint = [];
        this.nowR = 10;
        this.blnCanDraw = false;
        this.showPoints = null;

        this.status = cv.status_norm;
        this.wrongCount = 0;
        this.state = {
            blnUpdate: false,
        };
    }

    setUpdate() {
        this.setState({
            blnUpdate: !this.state.blnUpdate,
        });
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this.onStartShouldSetPanResponder.bind(this),
            onMoveShouldSetPanResponder: this.onMoveShouldSetPanResponder.bind(this),
            onPanResponderGrant: this.onPanResponderGrant.bind(this),
            onPanResponderMove: this.onPanResponderMove.bind(this),
            onPanResponderRelease: this.onPanResponderRelease.bind(this),
            onPanResponderTerminate: this.onPanResponderTerminate.bind(this),
        });
    }

    componentDidMount() {
        this._autoUpdate = setInterval(this.autoUpdate.bind(this), 1 / 60);
    }

    componentWillUnmount() {
        this._autoUpdate && clearInterval(this._autoUpdate);
    }

    onStartShouldSetPanResponder(e, g) {
        if (this.status == cv.status_auto || this.status == cv.status_pause) {
            return false;
        }
        return true;
    }

    onMoveShouldSetPanResponder(e, g) {
        if (this.status == cv.status_auto || this.status == cv.status_pause) {
            return false;
        }
        return true;
    }

    onPanResponderGrant(e, g) {
        if (g.numberActiveTouches == 1) {
            this.mousePosition = {
                x: e.nativeEvent.locationX,
                y: e.nativeEvent.locationY
            };
            this.ResetDrawPoint();
            this.AddUsePoint(this.mousePosition, cv.touch_begin);
        }
    }

    onPanResponderMove(e, g) {
        if (g.numberActiveTouches == 1) {
            this.mousePosition = {
                x: e.nativeEvent.locationX,
                y: e.nativeEvent.locationY
            };
            var s = Utils.DisP(this.mousePosition, this.lastMousePostion);
            if (s >= 1) {
                this.AddUsePoint(this.mousePosition, cv.touch_move);
            }
        }
    }

    onPanResponderRelease(e, g) {
        this.endPanResponder(e, g);
    }

    onPanResponderTerminate(e, g) {
        this.endPanResponder(e, g);
    }

    endPanResponder(e, g) {
        this.mousePosition = {
            x: e.nativeEvent.locationX,
            y: e.nativeEvent.locationY
        };
        this.AddUsePoint(this.mousePosition, cv.touch_ended);
    }

    ResetDrawPoint() {
        this.arrOrgPoint = [];
        this.arrUsedPoint = [];
        this.nowR = 5;
        this.blnCanDraw = false;
        this.showPoints = null;
    }

    AddUsePoint(pos, kind) {
        if (kind == cv.touch_begin) {
            this.lastMousePostion = this.mousePosition;
            this.arrOrgPoint.push(pos);
            this.AddSinglePoint(pos, this.nowR);
            this.blnCanDraw = true;
        } else if (this.blnCanDraw) {
            this.arrOrgPoint.push(pos);
            var blnSet = false;
            if (this.arrOrgPoint.length > 2) {
                var count = Utils.DisP(this.lastMousePostion, pos);
                if (count > 1) {
                    for (var i = 0; i < count; i++) {
                        var p = Utils.LerpP(this.lastMousePostion, pos, (i + 1) / count);
                        this.AddSinglePoint(p, this.nowR);
                    }
                }
                blnSet = true;
            } else {
                var count = Utils.DisP(this.lastMousePostion, pos);
                if (count > 1) {
                    var c = Math.ceil(count);
                    for (var i = 0; i < c; i++) {
                        if (i == c - 1) {
                            this.AddSinglePoint(pos, this.nowR);
                        } else {
                            var p = Utils.LerpP(this.lastMousePostion, pos, (i + 1) / c);
                            this.AddSinglePoint(p, this.nowR);
                        }
                    }
                    blnSet = true;
                } else {
                    // this.AddSinglePoint(pos, this.nowR);
                    blnSet = false;
                }
            }
        }
        if (kind == cv.touch_ended) {
            // this.ResetDrawPoint();
        }
        if (blnSet) {
            this.lastMousePostion = this.mousePosition;
        }
        this.setUpdate();
    }

    AddSinglePoint(pos, r) {
        this.arrUsedPoint.push(pos);
        d = new Path();
        for (var i = 0; i < this.arrUsedPoint.length; i++) {
            var p = this.arrUsedPoint[i];
            if (i == 0) {
                d.moveTo(p.x, p.y);
            } else {
                d.lineTo(p.x, p.y);
            }
        }
        this.showPoints = d;
    }

    render() {
        return (
            <View style={styles.container} {...this._panResponder.panHandlers}>
                <View style={styles.container}>
                    <Surface ref={'lineView'} width={ScreenWidth} height={ScreenHeight}>
                        <Shape d={this.showPoints} stroke={'rgb(0,0,255)'} strokeWidth={this.nowR}/>
                    </Surface>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

        container: {
            width: 500,
            height: 500,
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

