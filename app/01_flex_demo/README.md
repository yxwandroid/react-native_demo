
### React-Native flex 布局使用总结
#### 父视图属性(容器属性)：
1. flexDirection  : 对子布局方向的设置 
        
        row : 从左到右依次排列
        row-reverse :从右向左依次排列
        column:(default) 从上到下排列
        column-reverse :从下到上排列
        
    ![](http://oo0vme8mf.bkt.clouddn.com/15133044910502.jpg)

     
2. flexWrap: 定义子布局是否在父布局中多行排列

        wrap: 允许多行排列
        nowarp:(defaut) 不允许多行排列
        
    ![](http://oo0vme8mf.bkt.clouddn.com/15133046370447.jpg)

3. justifyContent : 定义子元素之间的排列方式

        flex-start:(default) 从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。
        flex-end: 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
        center: 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
        space-between: 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
        space-around: 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。
  
        

  ![](http://oo0vme8mf.bkt.clouddn.com/15133046555484.jpg)

4. alignItems: 属性以与justify-content相同的方式在侧轴方向上将当前行上的弹性元素对齐，默认为stretch。

![](http://oo0vme8mf.bkt.clouddn.com/15133060581597.jpg)


### 子视图属性
        上面介绍的是父视图的属性,接下来介绍的是子视图的属性
        
1. alignSelf :  定义子视图相对父容器的属性 相当于在父视图基础上从新设置子视图的位置

        enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
    
        stretch:元素被拉伸以适应容器。
        center: 元素位于容器的中心。
        flex-start: 元素位于容器的开头。
        flex-end: 元素位于容器的结尾。
        
![](http://oo0vme8mf.bkt.clouddn.com/15133062948518.jpg)
2. flex :相当于设置子视图的权重

![](http://oo0vme8mf.bkt.clouddn.com/15133063629656.jpg)
 

### 参考 

具体教程参考
http://www.jianshu.com/p/688b9108a922


###### 源码地址

链接 https://github.com/yxwandroid/rnMydemo

![](http://oo0vme8mf.bkt.clouddn.com/15133065651936.jpg)

######    关注公众号获取更多内容

![公众号8cm](http://oo0vme8mf.bkt.clouddn.com/公众号8cm.jpg)


