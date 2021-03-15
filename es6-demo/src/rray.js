
// export default {

 // ### 一、创建数组方法
console.log('-array----')
// 1. 数组直接量创建数组
// var empty=[] //无元素的数组
// var primes=[1,2,3] //三个元素的数组
// var misc=[1,1,true,"a",]//三个不同元素和结尾的逗号
// // 2.构造函数Array创建数组
// var a =new Array()//无元素的空数组
// var a =new Array(10)//有一个数值参数，他指定长度
// var a =new Array(1,2,3,'a')//指定多个数组元素

// #### ES6中的创建方法：
// Array.of() 方法创建一个具有可变数量参数的新数组实例
// Array.of(7); // [7]
// Array.of(1, 2, 3); // [1, 2, 3]

// Array(7); // [ , , , , , , ]
// Array(1, 2, 3); // [1, 2, 3]


// ### 二、数组的遍历方法
// #### ES5中的遍历方法：
// for循环
// forEach()：没有返回值，只针对每个元素调用func
// map()：返回新数组，每个元素为调用func的结果
// filter()：返回符合func的元素数组
// some()：返回boolean，判断 是否有元素 是否符合func条件
// every()：返回boolean，判断 每个元素 是否符合func条件
// reduce()：接受一个函数作为累加器
// for in ?

// #### 1.for循环
let arr = [1, 2, 3, 2, 4]
// for(var i=0;i<arr.length;i++){
//     console.log(i,arr[i])//索引，值
// }
// arr.length可优化遍历，只查询一次数组长度


// 2.for/in循环
// 场景：处理稀疏矩阵，不存在的索引将不会被遍历到
// for (var index in arr) {
//     console.log(index,arr[index]);//索引，值
// }

// arr.forEach((val,index,array)=>{
//     console.log(val,index,array) //值，索引，数组
// })
// 注：forEach 的代码块中不能使用 break、continue，它会抛出异常。

// map()：返回新数组，每个元素为调用func的结果
// var result=arr.map(val=>{
//     val+=1
// console.log(val) //1, 2, 3, 2, 4
//     return val
// })
// console.log(arr,result)
// [1, 2, 3, 2, 4]   [2, 3, 4, 3, 5]
// 不改变原数组

// filter() 返回符合func条件的元素数组
// var result=arr.filter(val=>{
// console.log(val) //1, 2, 3, 2, 4
//     return val ==2
// })
//  console.log(arr,result)
// [1, 2, 3, 2, 4] [2, 2]
// 不改变原数组

// some() 返回boolean，判断是否有元素符合func条件
// var result=arr.some(val=>{
// console.log(val) //1,2
// return val ==2
// })
// console.log(arr,result)
//  [1, 2, 3, 2, 4],true
// 不改变原数组

// every() 返回boolean，判断每个元素都符合func条件
// var result=arr.every(val=>{
// console.log(val) //1
// return val ==2
// })
// console.log(arr,result)
// [1, 2, 3, 2, 4],false
// 不改变原数组
// every 的代码块中不能使用 break、continue，它会抛出异常。
//  return false 等同于 break，return true 等同于 continue

// reduce() 接收一个函数作为累加器
// let sum = arr.reduce(function (prev, cur, index, array) {
//     console.log(prev, cur, index) // prev 累加值 0 1 3 6 8 遍历的值
//     return prev + cur
// }, 0) //0初始值
// console.log(sum)

//     let max = arr.reduce((pre,cur)=>{
//         return pre*cur
//     },1)
// console.log(arr,max)// [1, 2, 3, 2, 4] 48
// 不改变原数组

// for...in 可以遍历数组?

// for (var index in arr) {
//     console.log(arr[index]);
// }
// for...in 确实可以遍历数组，而且还支持 continue、break等功能
// 如果 array 有自定义属性，你发现也会被遍历出来

// --------------------
// #### ES6中的遍历方法：
// find()：返回第一个通过测试的元素
// findIndex()：返回的值为该通过第一个元素的索引
// for...of
// valuse()
// keys()
// entries()

// find()：返回第一个通过测试的元素
// let found=arr.find((val,index,array)=>{
//     return val>2;
// })
// console.log(arr,found)// [1, 2, 3, 2, 4] 3
// // 不改变原数组

// findIndex()：返回的值为该通过第一个元素的索引
// let found=arr.findIndex((val,index,array)=>{
//     return val>2
// })
// console.log(arr,found)// [1, 2, 3, 2, 4] 3
// 不改变原数组

// for...of
// for...of 遍历的是一切可遍历的元素（数组、对象、集合）等
// for (let val of arr) { //arr->iterable
//     console.log(val)//1, 2, 3, 2, 4
// }

// valuse()
// keys()
// entries()

// for(let item of arr.values()){
//     console.log(item)//item为value
//     // 1, 2, 3, 2, 4
// }

// for(let item of arr.keys()){
//     console.log(item)//item = key下标
//     //  0, 1, 2, 3, 4
// }

// for(let [key,val] of arr.entries()){
//     console.log(key,val) // 
//     // 0, 1
//     // 1, 2
//     // 2, 3
//     // 3, 2
//     // 4, 4
// }


// ### 三、数组的方法及扩展
// #### ES5中的方法：
// 待整理

// #### ES6中的其他扩展方法：
// 类数组/伪数组
// Array.from()
// copyWithin()
// fill()
// includes()

// Array.from()
// 前置：类数组/伪数组
// 在 JavaScript 的世界里有些对象被理解为数组，然而缺不能使用数组的原生 API，比如函数中的 arguments、DOM中的 NodeList，
// ，还有一些可遍历的对象，看上去都像数组却不能直接使用数组的 API，因为它们是伪数组
// 伪数组具备两个特征，1. 按索引方式储存数据 2. 具有length属性

// Array.from()将伪数组转换成数组
// Array.from(arrayLike[, mapFn[, thisArg]])
// arrayLike 想要转换成数组的伪数组对象或可迭代对象 Y
// mapFn 如果指定了该参数，新数组中的每个元素会执行该回调函数 N
// thisArg 可选参数，执行回调函数 mapFn 时 this 对象 N

// 比如我们想初始化一个长度为 5 的数组，
// var res=Array.from({0:1,length:5},function(val){
//     return val?val:2
// })
// console.log(res)//[1, 2, 2, 2, 2]

// copyWithin() 将指定位置的成员复制到其他位置（会覆盖原有成员）

// arr.copyWithin(target, start = 0, end = this.length)
// arget 从该位置开始替换数据。如果为负值，表示倒数
// var arr1=[1, 2, 3, 4, 5,6]
// var res=arr1.copyWithin(0,2,4)//索引为 2-4 的数据 从0索引开始复制
// console.log(arr1,res)//[1, 2, 2, 4, 4] [1, 2, 2, 4, 4]
// // 改变原数组

// fill() 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
//  arr.fill(val, start = 0, end = this.length) //val固定值
//  var arr1=[1, 2, 3, 4, 5,6]
//  var res=arr1.fill(0,2,4)//用 0填充 索引 2-4之间的数
// //  var res=arr.fill(0)//[0, 0, 0, 0, 0,0]
//  console.log(arr1,res) //[1, 2, 0, 0, 5, 6] [1, 2, 0, 0, 5, 6]
//改变原数组


// #### ES7中的扩展方法：
//  数组中是否包含一个元素

// arr.find(function(item) {
// return item === 2
// })
//  includes() 判断一个数组是否包含一个指定的值
//  var res =arr.includes(2) //true
//  console.log(arr,res) // [1, 2, 3, 2, 4] true
// 不改变原数组

var res = arr.sort() //true
console.log(arr, res)







// 改变原数组
// arr.push()
// arr.pop()
// arr.unshift()
// arr.shift()


// arr.sort()
// arr.reverse()
// arr.splice()
// arrayObject.splice(index,howmany,item1,.....,itemX)
// index 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
// howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
// item1, ..., itemX 可选。向数组添加的新项目。

// arr.fill()
// arr.copyWithin()
// }