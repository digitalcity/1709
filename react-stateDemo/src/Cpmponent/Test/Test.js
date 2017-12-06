import React from 'react'

class Test extends React.Component {
  constructor(){
    super()
    // console.log('初始化 props 和 state')
    this.state={
      // num : null
      num : 1
    }
  }
  componentWillMount(){
    // console.log('组件首次将要挂载')
  }
  componentDidMount(){
    // console.log('组件首次挂载完毕')
    //获取远端的数据并且将远端数据设置成 state
    // setTimeout( () => {
    //   let str = [1,2,3]
    //   this.setState({
    //     num : str
    //   })
    // },1000)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('组件是否应该进行更新')
    //此方法   return true 意思就是 同意更新
    //如果 return false 意思就是 不同意更新
    // console.log(nextState)
    if(nextState.num > 10) return false
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log('组件将要更新了')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
    // console.log('组件更新完毕了')
  }

  componentWillUnmount() {
    // console.log('test 组件销毁')
  }
  handleClick = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render () {
    // console.log('组件渲染')
    return (
      <div>
        {
          /*<p>{ this.state.num ?  this.state.num.map( (item,index) =>{
          return <span key={ index } >{ item }</span>
          }) : '空的'}</p>*/
        }
        <span>{ this.state.num }</span>
        <button onClick={ this.handleClick }>+</button>
      </div>
  )
  }
}

export default Test;
//组件的生命周期
//组件实例首次创建和插入DOM中时调用下面四个方法
// constructor()
// componentWillMount()
// render()
// componentDidMount()
//属性(props)或状态(state)的改变会触发一次更新。当一个组件在被重渲时，这些方法将会被调用：
//componentWillReceiveProps()   只有在修改了 props 时调用
//shouldComponentUpdate()
//componentWillUpdate()
//render()
//componentDidUpdate()


// 当你修改了 state 的时候 上述 生命周期函数会被执行 除了componentWillReceiveProps 之外 ，此时在这些函数内不能修改 state

//当父组件想要修改子组件的状态时，需要父组件传 props 修改子组件的状态 ,但是 props 传递的时候有五个生命周期函数被触发，只有 componentWillReceiveProps 这个生命周期函数可以 修改 state

// 可以再componentWillReceiveProps函数内部修改 state

//组件销毁 或不被挂载的时候
//componentWillUnmount
