import React from 'react'
import Header from './components/Header/Header'
import LoginForm from './components/LoginForm/LoginForm'
class App extends React.Component {
  //1. header 改变 app 状态 ，app 将改变的状态 传递给 login 从而改变 login 组件的状态 显示 login

  //2.通过 header 触发 父组件的事件，因为父组件可以获取到 login 组件，所以，这个事件内部就可以触发 login 组件下的方法，从而改变 login 组件的状态显示 login
  state = {
    loginName : ''
  }
  handleClick = () => {
    this.loginForm.handleShow()
  }
  handleLogin = (username) => {
    this.setState({
      loginName : username
    })
  }
  render () {
    return (
      <div>
        <Header showForm={ this.handleClick } loginName={this.state.loginName} handleLogout={ this.handleLogin }/>
        <LoginForm ref={loginform => this.loginForm = loginform} handleLogin={ this.handleLogin }/>
      </div>
    )
  }
}

export default App
