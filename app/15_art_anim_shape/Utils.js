/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
    Dimensions,
} from 'react-native'

// import Dimensions from 'Dimensions'
global.ScreenWidth = global.ScreenWidth || Dimensions.get('window').width
global.ScreenHeight = global.ScreenHeight || Dimensions.get('window').height
global.curWidth = global.curWidth || Math.min(ScreenWidth / 4, ScreenHeight)
global.scaleWidth = global.scaleWidth || curWidth / 400
global.minUnit = global.minUnit || ScreenWidth / 100
global.unitDisSt = global.unitDisSt || curWidth / 25
global.unitDisMv = global.unitDisMv || curWidth / 15
global.relativeX = global.relativeX || (ScreenWidth - curWidth) / 2
global.relativeY = global.relativeY || (ScreenHeight - curWidth) / 2

// console.log('=====scaleWidth:', scaleWidth)

var Utils = {
  NormalizedPointsCount: 32,
  blnGesture: false,
  matched: [],
  Dis: function (x, y) { // 计算第三边长度
    return Math.sqrt(x * x + y * y)
  },
  DisP: function (p1, p2) { // 计算两点间距离
    return Utils.Dis(p1.x - p2.x, p1.y - p2.y)
  },
  Lerp: function (a, b, f) { // 通过f来取a，b之间的差值，f取0-1
    if (f <= 0) return a
    if (f >= 1) return b
    return a + (b - a) * f
  },
  LerpP: function (a, b, f) { // 通过f来取a点，b点之间的差值，f取0-1
    if (f <= 0) return a
    if (f >= 1) return b
    return {
      'x': Utils.Lerp(a.x, b.x, f),
      'y': Utils.Lerp(a.y, b.y, f)
    }
  },
  PathLength: function (points) { // 计算点集总共的长度
    var d = 0
    for (var i = 1; i < points.length; i++) {
      d += Utils.DisP(points[i - 1], points[i])
    }
    return d
  },
  Resample: function (points, normalizedPointsCount) { // 按照设点的数量标准化点集
    normalizedPointsCount = Math.max(3, normalizedPointsCount)
    var intervalLength = Utils.PathLength(points) / (normalizedPointsCount - 1)
    var D = 0
    var q = {x: 0, y: 0}
    var normalizedPoints = []
    normalizedPoints.push(points[0])
    var pointBuffer = []
    pointBuffer = pointBuffer.concat(points)
    for (var i = 1; i < pointBuffer.length; i++) {
      var a = pointBuffer[i - 1]
      var b = pointBuffer[i]
      var d = Utils.DisP(a, b)
      if ((D + d) > intervalLength) {
        q = Utils.LerpP(a, b, (intervalLength - D) / d)
        normalizedPoints.push(q)
        pointBuffer.splice(i, 0, q)
        D = 0
      } else {
        D += d
      }
    }
    if (normalizedPoints.length == normalizedPointsCount - 1) {
      normalizedPoints.push(pointBuffer[pointBuffer.length - 1])
    }
    return normalizedPoints
  },
  ResampleByLen: function (points, len) { // 按照len的长度来标准化点集，使每个点的距离都一样
    len = Math.max(2, len)
    var normalizedPointsCount = parseInt(Utils.PathLength(points) / len)
    if (normalizedPointsCount <= 0) {
      return null
    }
    return Utils.Resample(points, normalizedPointsCount)
  },
  CountDistance: function (arg1, arg2) { // 两点距离
    return Math.round(Math.sqrt(Math.pow(arg1.x - arg2.x, 2) + Math.pow(arg1.y - arg2.y, 2)))
  },
  CalDistance: function (line1, line2, arr, i, j) {
    if (arr[i][j] > -1) {
      return arr[i][j]
    } else if (i == 0 && j == 0) {
      arr[i][j] = Utils.DisP(line1[0], line2[0])
    } else if (i > 0 && j == 0) {
      arr[i][j] = Math.max(Utils.CalDistance(line1, line2, arr, i - 1, 0), Utils.DisP(line1[i], line2[0]))
    } else if (i == 0 && j > 0) {
      arr[i][j] = Math.max(Utils.CalDistance(line1, line2, arr, 0, j - 1), Utils.DisP(line1[0], line2[j]))
    } else if (i > 0 && j > 0) {
      arr[i][j] = Math.max(Math.min(
        Utils.CalDistance(line1, line2, arr, i - 1, j),
        Utils.CalDistance(line1, line2, arr, i - 1, j - 1),
        Utils.CalDistance(line1, line2, arr, i, j - 1)),
        Utils.DisP(line1[i], line2[j])
      )
    } else {
      arr[i][j] = Number.MAX_VALUE
    }
    return arr[i][j]
  },
  CompareGesture: function (line1, line2) { // 比较手势，需要循环比较
    Utils.blnGesture = true
    var nLine1 = Utils.Normalize(line1)
    var nLine2 = Utils.Normalize(line2)
    var e = 0.5
    var step = Math.floor(Math.pow(nLine1.length, 1 - e))
    var min = Number.MAX_VALUE
    for (var i = 0; i < nLine1.length; i += step) {
      var d1 = Utils.CloundDistance(nLine1, nLine2, i)
      var d2 = Utils.CloundDistance(nLine2, nLine1, i)
      min = Math.min(min, d1, d2)
    }
    return min
  },
  CloundDistance: function (points1, points2, startIndex) { // 以一个数组中的一个起点为标准开始循环比较
    var numPoints = points1.length
    Utils.ResetMatched(numPoints)
    if (points1.length != points2.length) {
      console.warn('CloundDistance points1 count != points2 count')
      return Number.MAX_VALUE
    }
    var sum = 0
    var i = startIndex
    do {
      var index = -1
      var minDistance = Number.MAX_VALUE
      for (var j = 0; j < numPoints; j++) {
        if (!Utils.matched[j]) {
          var distance = Utils.DisP(points1[i], points2[j])
          if (distance < minDistance) {
            minDistance = distance
            index = j
          }
        }
      }
      Utils.matched[index] = true
      var weight = 1 - ((i - startIndex + points1.length) % points1.length) / points1.length
      sum += weight * minDistance
      i = (i + 1) % points1.length
    } while (i != startIndex)
    return sum
  },
  ResetMatched: function (count) { // 设置临时匹配数组，用于是否已经比较完毕的标识
    Utils.matched = []
    for (var i = 0; i < count; i++) {
      Utils.matched.push(false)
    }
  },
  CompareNormal: function (line1, line2) { // 普通线段比较相似度
    Utils.blnGesture = false
    var nLine1 = Utils.Normalize(line1)
    var nLine2 = Utils.Normalize(line2)
    return Utils.CloundNormal(nLine1, nLine2)
  },
  CloundNormal: function (points1, points2) { // 在相同的数量下进行比较
    if (points1.length != points2.length) {
      console.warn('CloundNormal points1 count != points2 count')
      return Number.MAX_VALUE
    }
    var sum = 0
    for (var i = 0; i < points1.length; i++) {
      var distance = Utils.DisP(points1[i], points2[i])
      sum += distance
    }
    return sum
  },
  Normalize: function (points) { // 标准化处理
    return Utils.Apply(points, Utils.NormalizedPointsCount)
  },
  Apply: function (inputPoints, normalizedPointsCount) {
    var normalizedPoints = Utils.Resample(inputPoints, normalizedPointsCount)
    if (Utils.blnGesture) {
      Utils.Scale(normalizedPoints)
      Utils.TranslateToOrigin(normalizedPoints)
    }
    return normalizedPoints
  },
  Scale: function (points) { // 缩放点数组到标准尺寸
    var side = Utils.MaxSize(points)
    var size = Math.max(side.maxX - side.minX, side.maxY - side.minY)
    var invSize = 1 / size
    for (var i = 0; i < points.length; i++) {
      var p = points[i]
      p = Utils.PMulV(Utils.PSubP(p, {x: side.minX, y: side.minY}), invSize)
      points[i] = p
    }
  },
  TranslateToOrigin: function (points) { // 数组中每一个点到几何中心做偏移处理
    var c = Utils.Centriod(points)
    for (var i = 0; i < points.length; i++) {
      var p = points[i]
      p = Utils.PSubP(p, c)
      points[i] = p
    }
  },
  Centriod: function (points) { // 获取几何中心
    var c = {x: 0, y: 0}
    for (var i = 0; i < points.length; i++) {
      c = Utils.PAddP(c, points[i])
    }
    c = Utils.PDivV(c, points.length)
    return c
  },
  ImageCenter: function (points) { // 获取外框中心
    var side = Utils.MaxSize(points)
    return {
      x: (side.maxX + side.minX) / 2,
      y: (side.maxY + side.minY) / 2
    }
  },
  MaxSize: function (points) {
    var size = {
      maxX: Number.MIN_VALUE,
      maxY: Number.MIN_VALUE,
      minX: Number.MAX_VALUE,
      minY: Number.MAX_VALUE
    }
    for (var i = 0; i < points.length; i++) {
      var p = points[i]
      size.minX = Math.min(size.minX, p.x)
      size.minY = Math.min(size.minY, p.y)
      size.maxX = Math.max(size.maxX, p.x)
      size.maxY = Math.max(size.maxY, p.y)
    }
    return size
  },
  SumAngle: function (points, blnGest) { // 获取所有点的转向角度之和
    var sumAngle = 0
    var tempAngle = 0
    var lastAngle = 0
    if (points.length > 2) {
      Utils.blnGesture = blnGest
      points = Utils.Normalize(points)
      lastAngle = Math.atan2(points[1].y - points[0].y, points[1].x - points[0].x)
      for (var i = 2; i < points.length; i++) {
        tempAngle = Math.atan2(points[i].y - points[i - 1].y, points[i].x - points[i - 1].x)
        var add = Math.abs(tempAngle - lastAngle) * 180 / Math.PI
        sumAngle += add
        lastAngle = tempAngle
      }
    }
    return sumAngle
  },
  PointInPolygon: function (p, points) { // 判断点是否在多边形之内
    var side = Utils.MaxSize(points)
    if (p.x < side.minX || p.x > side.maxX || p.y < side.minY || p.y > side.maxY) {
      return false
    }
    var count = points.length
    if (count < 3) {
      return false
    }
    var i, j, bln = false
    for (i = 0, j = count - 1; i < count; j = i++) {
      if (((points[i].y > p.y) != (points[j].y > p.y)) &&
        (p.x < (points[j].x - points[i].x) * (p.y - points[i].y) / (points[j].y - points[i].y) + points[i].x)) {
        bln = !bln
      }
    }
    return bln
  },
  PAddP: function (a, b) { // 两点相加
    return {x: a.x + b.x, y: a.y + b.y}
  },
  PSubP: function (a, b) { // 两点相减
    return {x: a.x - b.x, y: a.y - b.y}
  },
  PMulV: function (a, v) { // 点乘以数值
    return {x: a.x * v, y: a.y * v}
  },
  PDivV: function (a, v) { // 点除以数值
    if (v == 0) {
      console.warn('Utils PDivV the v is zero!!!!')
      v = 1
    }
    return {x: a.x / v, y: a.y / v}
  }
}

module.exports = Utils
