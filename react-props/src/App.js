import React,{ Component } from 'react'
import Button from './Component/Button/Button'
// function Button(props) {
//   return <input type={props.type || 'text'} placeholder={props.name || '用户名'}
//   className='btn'
//   ></input>
// }
class App extends Component {
  render () {
    return (
      <div>
        <Button /> <br />
        <Button type='text'/><br />
        <Button type='password'/>
      </div>
    )
  }
}
//单页面应用
//所有的css都是全局的尽量所有命名不重复
//react 组件内部有一个默认的参数叫 props 作用是接收父组件传过来的参数
//如果是函数组件的话 函数的第一个参数 默认就是 props
//如果是es6 class组件的话 组件内部使用 this.props 获取props
// props 对象 是只读的



// <Button>
//   <span>1</span>
// </Button>
//当父组件传给子组件一个react节点的时候 子组件使用 this.props.children 接收
export default App
