import React from 'react'
import Button from './Cpmponent/Button/Button'
import Modal from './Cpmponent/Modal/Modal'
class App extends React.Component {
  state={
    show: false
  }
  handleOpen = () => {
    this.setState({
      show: true
    })
  }
  render () {
    console.log(this.state.show)
    return (
      <div>
        <Button click={ this.handleOpen }/>
        <Modal />
      </div>
    )
  }
}

export default App
//子组件如何修改父组件的状态值
//将父组件改变状态值的方法(函数) 当做 props 传递给子组件，让子组件执行这个方法(函数),从而子组件就可以改变父组件的状态值了
