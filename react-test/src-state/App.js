import React from 'react'
// import Box from './Box'
import Box1 from './Box1'
class App extends React.Component {
  // constructor(){
    // super()
    // this.state = {
      //设置状态
      // num : 1
    // }
    // this.handelClick = this.handelClick.bind(this)
  // }
  // state 状态 , 组件的 state 变,组件就会重新渲染，页面也就改变了
  // react 组件默认有一个 state 属性 ,这个属性是一个对象
  // 使用 this.state.num  获取 num 状态值
  // 使用 setState 方法修改 state 值

  state = {
    num : 1
  }
  handelClick = (number) => {
    this.setState({
      num : this.state.num + number
    })
  }
  render () {
    // let { num } = this.state
    return (
      <div>
        {
          /*<button onClick={ () => {
            this.handelClick(-1)
          } }>-1</button>
        <span> { num } </span>
        <button onClick={ () => {
            this.handelClick(1)
          }  }>+1</button>*/
        }
        <Box1 />
      </div>
    )
  }
}

export default App
// 函数名.bind(对象)
// 返回 一个新的函数，和原函数内部功能一样 但是 函数的内部 this 已经指向了 bind 方法的第一个参数
