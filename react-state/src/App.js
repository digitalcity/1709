import React from 'react'
class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state ={
  //     num : 3
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }
  // handleClick(test,e){
  //   e.preventDefault()
  //   console.log(test)
  // }
  state = {
    num : 1
  }
  addClick = () =>{
    let { num } = this.state
    this.setState({
      num: num + 1
    })
  }
  subClick = () =>{
    let { num } = this.state
    if ( num > 0 ){
      this.setState({
        num: num - 1
      })
    }
  }
  render () {
    return(
      <div>
        {
          //非箭头函数 事件传参
          //<a href = "#" onClick={this.handleClick.bind(this,a)}>按钮</a>
        }
        <button  onClick={() => {
            this.subClick()
          }}>按钮</button>
        <span>{ this.state.num }</span>
          <button  onClick={() => {
              this.addClick()
            }}>按钮</button>

      </div>
    )
  }
}

export default App;
// 组件 1.props  2.state  3.生命周期函数
// 给react 组件中的节点绑定事件 必须使用行内事件方式绑定 事件名称使用驼峰方式
// 有个问题 就是当在行内绑定事件的时候 事件函数内部的 this 就会指向 window  所有在组件内部 声明事件函数的时候 通常使用 箭头函数
// 也可以使用 constructor 方法 在其内部改变事件函数的 this 指向
// react 的事件函数的最后一个参数默认是 事件对象
// onCopy onCut onPaste
// onKeyDown onKeyPress onKeyUp
// onFocus onBlur
// onChange onInput onSubmit
// onClick onDoubleClick onDrag onDragEnd onDragEnter onDragExitonDragLeave
//onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
//onMouseMove onMouseOut onMouseOver onMouseUp
// onTouchCancel onTouchEnd onTouchMove onTouchStart
// onScroll onWheel
