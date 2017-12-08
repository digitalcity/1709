import React from 'react'
import './loginform.css'
class LoginForm extends React.Component {
  state = {
    username : '',
    password : '',
    visiable : false
  }
  handleLogin = (stateName,e) => {
    this.setState({
      [stateName] : e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    if(username === 'zzt' && password === '88888888'){
      // alert('允许登录')
      this.setState({
        visiable : false,
        username : '',
        password : ''
      })
      this.props.handleLogin(username)
    }else{
      alert('用户名和密码不匹配')
    }
  }
  handleShow = () => {
    this.setState({
      visiable : true
    })
  }
  render () {

    return (
      <div className='form-wrap' style={{display: this.state.visiable ? 'block' : 'none' }}>
        <form onSubmit={ this.handleSubmit }>
          <div className='username'>
            <label htmlFor='username'>用户名:</label>
            <input id='username' type='text' value={this.state.username} onChange={ (e)=>{ this.handleLogin('username',e) } }></input>
          </div>
          <div className='password'>
            <label htmlFor='password'>密码:</label>
            <input id='password' type='password' value={this.state.password} onChange={ (e)=>{ this.handleLogin('password',e) }}></input>
          </div>
          <input type='submit' defaultValue='登录'></input>
        </form>
      </div>
    )
  }
}

export default LoginForm;
