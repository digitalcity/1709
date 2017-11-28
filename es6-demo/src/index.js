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
//3.变量声明不提升？
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
var arr = [1,2,3]
var arr1 = [4,5,6]
var arr2 = [7,8,9]
// var newArr = arr.concat(arr1,arr2)
var newArr = [...arr,...arr1,...arr2]
console.log(newArr)

var obj = {
	name:'zzt',
	age:10
}
var obj1 = {
	name:'zzt1',
	say:function () {
		console.log(this.name)
	}
}
var newObj = {...obj1,...obj}
console.log(newObj)

