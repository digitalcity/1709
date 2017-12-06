import React from 'react'
import Button from './Cpmponent/Button/Button'
import Modal from './Cpmponent/Modal/Modal'
// import Test from './Cpmponent/Test/Test'
class App extends React.Component {
  state={
    show: false,
    showSign: false
  }
  //点击按钮更改父组件app的状态 --->  true
  handleOpen = () => {
    this.setState({
      show: true
    })
  }
  handleSignOpen = () => {
    this.setState({
      showSign: true
    })
  }
  //点击关闭对话框更改父组件app的状态 --->  false
  handleClose = () => {
    this.setState({
      show: false
    })
  }
  handleSignClose = () => {
    this.setState({
      showSign: false
    })
  }
  render () {
    console.log(this.state.showSign)
    return (
      <div>
        <Button click={ this.handleOpen } txt='登录'/>

        <Modal show={ this.state.show } click={this.handleClose}
        cancleText='取消'
        okText='确认'>
        登录：<input></input>
        </Modal>

        <Button click={ this.handleSignOpen } txt='注册'/>

        <Modal show={ this.state.showSign } click={this.handleSignClose}
        cancleText='cancle'
        okText='ok'>
        注册：<input></input>
        </Modal>


        {
          // this.state.show ? null : <Test />
        }
      </div>
    )
  }
}

export default App
//子组件如何修改父组件的状态值
//将父组件改变状态值的方法(函数) 当做 props 传递给子组件，让子组件执行这个方法(函数),从而子组件就可以改变父组件的状态值了
