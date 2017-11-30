import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
// import './index.css'
// import img from './images/1.jpg'

// let ele = <div className='wrap'>
//   <img src={img} alt='加载失败' title='1111'/>
// </div>
// let tick = () => {
//   let ele = <div>
//     <h1>ReactDom 渲染</h1>
//     <p>{ Date() }</p>
//   </div>
//   ReactDom.render(ele,document.getElementById('root'))
// }
// tick()
// setInterval( tick, 1000)


// JSX 语法  js内写html
// 1.严格区分大小写
// 2.标签必须闭合
// 3.一个JSX节点必须包裹在一个闭合标签内
// 4.JSX 内部嵌入 js语法 使用大括号内部必须是一个值
// let ele = React.createElement('h1',null,'123')
// class ==> className
// for  ==> htmlFor

//组件
//1.函数式声明组件  函数名首字母必须大写
//2.组件不一定复用，组件代码100行左右
// function Welcome() {
//   return <h1>Hello</h1>
// }
// let Welcome = () => <h1>123</h1>
ReactDom.render(<App />,document.getElementById('root'))
