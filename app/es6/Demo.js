//
// let videoNamesMap = new Map([
//     ['正在热映', 'in_theaters'],
//     ['即将上映', 'coming_soon'],
//     ['Top250', 'top250'],
//     ['口碑榜', 'weekly'],
//     ['北美票房榜', 'us_box'],
//     ['新片榜', 'new_movies'],]);
//
//
// let map = new Map([
//     ['F', 'no'],
//     ['T', 'yes'],
// ]);
//
// for (let key of map.keys()) {
//     console.log(key);
// }


let  myArrayS=[]
let temp=[]
temp.push('a')
temp.push('a')
temp.push('a')
temp.push('a')
let temp2=[]
temp2.push('b')
temp2.push('b')
temp2.push('b')
temp2.push('b')

myArrayS.push(temp)
myArrayS.push(temp2)
temp2=[]


console.log(temp2);

for(let i=0;i<myArrayS.length;i++){
    console.log(myArrayS[i]);

}
