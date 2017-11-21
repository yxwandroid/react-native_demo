// 函数的扩展

// --------------------------设置函数默认值-----------------------
// let  funcName=function func1(x = 1, y = 10) {
//     return x + y;
//
// }
// console.log(funcName(1,22));
// console.log(funcName.name);
//


//
// --------------------  this在箭头函数中的作用域
// 在箭头函数中的作用域
// 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//     // 箭头函数
//     setInterval(() =>{
//         this.s1++
//         console.log('s1  '+this.s1);
//     } , 1000);
//     // 普通函数
//     setInterval(function () {
//         this.s2++;
//         console.log('s2  '+this.s2);
//     }, 1000);
// }
//
// var timer=new Timer();
// setTimeout(()=>console.log('s1',timer.s1),3100);
// setTimeout(()=>console.log('s2',timer.s2),3100);
//


//------------------定时器和全局变量
// var i=0;
// setInterval(()=>{
//     i++;
//     console.log('wilson'+i);
//
// },100);
//






