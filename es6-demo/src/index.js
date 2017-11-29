// function f1() {
//   let n = 5
//   if (true) {
//     let n = 10
//   }
//   console.log(n)
// }
// f1()

// if(true){
//   let a = 1
//   let a = 2
// }
// if(true){
// 	console.log(i)
// 	let i=10;
// }
// 结果 i is not defined

// for (let i = 0; i < 3; i++) {
//   console.log("out", i);
//   for (let i = 0; i < 2; i++) {
//     console.log("in", i);
//   }
// }
// var tmp = 123;
// if (true) {
//   tmp = 'abc'
//   let tmp
// }
// {
// 	let a = 10
// 	console.log(a)
// }
// let a = 10
// console.log(a)

// const a = 10
// a = 11
//let const es6 声明变量的方式
//const 是用来声明常量,不允许被修改
//1.拥有块级作用域 只要在大括号内声明就会形成作用域
//2.同一个作用域下不允许重复声明相同变量
//3.变量声明不提升
//4.在let作用域内声明之前使用变量 会报错

//解构赋值

// console.log(obj.username)
// var arr = [10,20]
// var a = arr[0],b = arr[1]
// let [a,b,c,d] = [10,20,30]
// console.log(d)

// var [x,y]=getVal()
// function getVal() {
//     return [ 1, 2 ]
// }
// console.log(x,y)
// let [foo, [bar, baz]] = [1, [[2], 3]];
// console.log(foo)
// console.log(bar)
// console.log(baz)

// const [a, b, c, d, e] = 'hello'
// console.log(a,b,c,d,e)
// var obj = {
// 	name:'zzt',
// 	age:10
// }
// var {name,age} = obj
// console.log(name)
// console.log(age)

//{name} = obj

// function fun(username) {
// 	console.log(username)
// }
// var obj = {
// 	name:'zzt',
// 	age:10
// }
// var {name} = obj
// fun(name)

// var username = 'zzt'
// var age = 10
// var obj = {
// 	username,
// 	age
// }

// 字符串模板 ``
// $('<input class="1'+a+'1" >')
// var username = 'zzt'
// var age = 10
// var c = 'my name is '+username+',my age '+age
// var c = `my name is ${username},my age is ${age}`
// console.log(c)

//箭头函数

// function add() {
//   console.log(this)
// }
// let add = () => console.log(this)
// var obj = {
// 	name:'111',
// 	say:add
// }
// obj.say()
//参数除了一个之外 必须使用小括号 ,当只有一个参数的时候可以省略小括号
// let add = () => {
// 	var a = 10
// 	var b = 20
// 	var c = a + b
// 	return c
// }
//右面 要做的事 当要做的事不只一句的时候 必须加上大括号 当只有一句执行的时候可以省略大括号,但是同时这句会被当作该函数的返回值,当需要写返回值得时候需要在大括号最后面添加return
// console.log(add())







// 箭头函数有几个使用注意点。
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// function a() {
// 	console.log(arguments)
// }
// a(1,2,3,4,5,6,7,8)

//es6 函数参数
//参数的默认值 函数声明的时候在小括号内部直接给参数赋值相当于给了参数默认值
// function fun(x=0,y=0) {
// 	// if(!x){
// 	// 	x = 0
// 	// }
// 	// if(!y){
// 	// 	y = 0
// 	// }
// 	// var a = x || 0
// 	// var b = y || 0
// 	return x*y
// }
// var z = fun()
// console.log(z)


//es6 函数参数的集合
// 剩余参数 ...rest
// let sum = (...rest) => console.log(rest)
// sum(1,2,3,4,5,67)


//扩展操作符    ...
// var arr = [1,2,3]
// var arr1 = [4,5,6]
// var arr2 = [7,8,9]
// // var newArr = arr.concat(arr1,arr2)
// var newArr = [...arr,...arr1,...arr2]
// console.log(newArr)

// var obj = {
// 	name:'zzt',
// 	age:10
// }
// var obj1 = {
// 	name:'zzt1',
// 	say:function () {
// 		console.log(this.name)
// 	}
// }
// var newObj = {...obj1,...obj}
// console.log(newObj)





//回顾
// es6
// let  const    {}
// 解构赋值
// let obj = {name:'11',age:11}
// let {name,age} = obj
// 模板字符串
// let b = 'qqq'
// let a = `11111${b}`
// 箭头函数
// setTimeout(a=>{console.log(1)},1000)
// 函数参数 函数的参数默认值
// ...rest  剩余参数
// let add = (a,...rest) => console.log(rest)

// add(1,2,3)

//怎么拷贝新数组
// let arr = [1,2,3]
// let arr1 = [...arr,4]
// console.log(arr,arr1)

// let obj = {
// 	username:'zzt',
// 	age:1111
// }

// let obj1 = {...obj}


// let name = 'zzt'
// let age = 11
// let obj = {
// 	name,
// 	age,
// 	say(){
// 		console.log(this.name)
// 	}
// }
// obj.say()


// class  类
// function Person(firstName) {
// 	this.firstName = firstName
// }
// Person.prototype.say = function(){
// 	console.log('hello')
// }
// var people = new Person('张')
// // console.log(people)
// function Son(name){
// 	this.name = name
// }
// Son.prototype = people
// var son = new Son('zzt')
// console.log(son.firstName)
// son.say()


//es6 类的写法
// class Person{
// 	constructor(name){
// 		this.firstName = name
// 	}
// 	say(){
// 		console.log('hello')
// 	}
// }
//class内部只能写方法,并且方法之间不能加 逗号
//constructor函数 当执行 new + class名 是就会默认执行
// let people = new Person('zhang')
// console.log(people)
// people.say()
// class Son extends Person{
// 	constructor(name,firstName){
// 		//super() 处理this指向的  如果继承的话 子类constructor内部必须添加 super() 向super内部传参相当于向继承的父类传参
// 		super(firstName)
// 		this.name = name
// 	}
// 	jump(){
// 		console.log('jump')
// 	}
// }
// let son = new Son('hahaha','张')
// son.say()
// son.jump()
// console.log(son.name)
// console.log(son.firstName)
// let a = 10
// console.log(a)

// Object.assign()
// let obj = {
// 	name:'zzt',
// 	age:10
// }
// let obj1 = {...obj}
// Object.assign(obj,obj1,...) 将第一个参数之后的对象合并到第一个对象参数内
// let obj1 = Object.assign({},obj,{tall:100})
// obj1.name = 'zzt1'
// console.log(obj1,obj)

// let obj = {
// 	name:'zzt',
// 	age:10
// }
// let obj1 = {
// 	tall:100,
// 	name:'zzt1'
// }

// Object.assign(obj,obj1)
// console.log(obj)

// function fun(){
// 	console.log(new Error('a is not defined'))
// }
// fun()

// 数组的一些方法    filter过滤   findIndex map find
// let objArr =[
// 	{name:'liu',age:10},
// 	{name:'zhang',age:11},
// 	{name:'wang',age:15}
// ]
// let newArr = objArr.filter(function(item){
// 	return item.age < 15 && item.name === 'zhang'
// })
// let newArr = objArr.filter( item => item.age < 15 && item.name === 'zhang')
// console.log(newArr)
// let arr = [1,2,3,4,5]
// let num = arr.findIndex( item => item === 3)
// console.log(arr[num])
//
// let newArr = arr.map( item => item * item)
// console.log(newArr)
//
// let arr1 = [
//   {name:'zhang',age:10},
//   {name:'liu',age:11},
//   {name:'zhao',age:12},
//   {name:'zhang',age:13}
// ]
// let obj = arr1.find( item => item.name ==='zhang')
// console.log(obj);
//
// let arr2 = [4,2,5,111,3,45,6]
// arr2.sort( (a,b) => b-a )
// console.log(arr2);

//Object.keys()

// let obj = {
//   name:'sunny',
//   age:20,
//   say(){
//     console.log(this.name);
//   }
// }
//拿到一个包括obj对象的所有属性值的数组  for in语句
// for( let i in obj){
//   console.log(i)
// }
// let arr = Object.keys(obj)
// console.log(arr)
// require('./modules.js')
// let a = 20
// console.log(a);
// console.log(b)
//es6 模块导入导出
//导入  import
//命名导出的话 导入的变量名和导出必须一致
//当想要把导出的内容全部导入的话使用 (* as 变量)  导入
// 模块导入必须写在当前模块的最顶端
// import * as name from './modules'
// console.log(name)

// import * as obj from './modules'
// import './test'
// console.log(_)
// console.log(obj)
// let _ = require('lodash')
//lodash 按需加载
import findIndex from 'lodash/findIndex'
let arr = [1,2,3,4,5,3,2,1]
let num = findIndex(arr,item => item === 4,3)
console.log(num)
