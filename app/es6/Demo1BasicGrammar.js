/**
 * Created by yangxuewu on 2017/10/25.
 */

// -----------------变量 定义------------------------------------

// 定义变量写法1
// let  a=1, b=2,c='33'
// console.log(a);
// console.log(b);
// console.log(c);
//
//
// // 定义变量写法2
// let [a, b, c] = [1, 2, 'wilson'];
// console.log(a);
// console.log(b);
// console.log(c);






// -----------------集合定义------------------------------------


// collective  集合的书写方式
// myCollection ={
//     mystr:'wilso',
//
// }
// console.log(myCollection);





// 参考 http://es6.ruanyifeng.com/#docs/let
// ----------------- 数组 定义------------------------------------


// var a=[1,23,33,2,];
// var b=new Array();
// b[0]='11';
// a[1]='33';
// console.log(a);
// console.log(b);
//-------------  把方法赋值给数组-----------------------
// var aaa=[];
// aaa[2]= function add() {
//     return 1;
//
// }
// console.log(aaa[2]());





//-------------let 和 const 区别-----------------------
// ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
// let  代码块有效
// var  在全局范围内都有效，
//
// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6](); // 10



// // ES6 新特性块级作用域
// //  const 定义的常量
// const  pt=10399393;
// console.log(pt);
//
//




//------------------------map 定义
// var s = new Set();
// [ 2,  3, 4, 2, 56, 6].map(x => s.add(x));
//
// for (i of s) {
//     console.log(i);
// }

