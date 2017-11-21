
// () => { ... } // 零个参数用 () 表示；
var func1=()=>{
    return 1+2;

}
console.log(func1());



// (x, y) => { ... } // 多参数不能省略 ()；
var func2=(x=1,y=2)=>x+y;
console.log(func2());


// x => { ... } // 一个参数可以省略 ()；
var func3=x=>{
    return x+122;
}

console.log(func3(2));
