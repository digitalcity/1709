import React from 'react'
import './button.css'

class Button extends React.Component {
  render () {
    let { text, style } = this.props
    console.log(style)
    return (
        <button className='btn'
          style={ style }>{ text || '按钮' }</button>
    )
  }
}

export default Button
//组件默认有一个 props 属性 这个属性值是一个对象
//该对象内部存储的是父组件 传过来的值
//在子组件内部获取props使用 this.props
//props 是只读的，不可更改
//jsx 内部嵌套 js(必须是一个值)
// props 对象下默认有一个 children 属性
