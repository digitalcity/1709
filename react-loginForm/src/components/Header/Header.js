import React from 'react'
import './header.css'
class Header extends React.Component {
  render () {
    let text = this.props.loginName
    let login = <span onClick={this.props.showForm}>登录</span>
    let logout = <a><span>{text}</span> | <span onClick={ () => { this.props.handleLogout('')}}>退出</span></a>
    return (
      <header>
        { text ? logout : login }
      </header>
    )
  }
}

export default Header;
