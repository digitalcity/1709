import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
class Header extends React.Component {
  state = {
    login:false,
    token:'',
    userInfo:null
  }
  handleChange = e => {
    console.log(this.state.token)
    this.setState({
      token: e.target.value
    })
  }
  handleLogin = () => {
    const { token } = this.state
    axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:token})
    .then(res=>{
      console.log(res)
      this.setState({
        login: true,
        userInfo: res.data
      })
    })
    .catch(err=>{
      alert(err)
    })
  }
  handleLogout = () => {
    this.setState({
      login: false,
      userInfo: null,
      token:''
    })
  }
  render () {
    const { token, login, userInfo } = this.state

    return (
      <header>
        <Link to='/'>
          <img style={{width:'140px'}} src='https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg' alt="111" />
        </Link>
        {
          login ? (<div className='logout'>
            <img className='author-pic' src={userInfo.avatar_url} alt="111"/>
            <button onClick={this.handleLogout}>退出</button>
          </div>) : (<div className='login'>
            <input  type="text" value={token} onChange={this.handleChange}/>
            <button onClick={this.handleLogin}>登录</button>
          </div>)
        }
      </header>
    )
  }
}

export default Header
