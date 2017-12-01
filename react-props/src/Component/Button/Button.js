import React from 'react'
import './button.css'
class Button extends React.Component {
  render () {
    // console.log(this.props);
    let { name, type } = this.props
    // let col = 'teal'
    let styles = {
      username:{
        backgroundColor:'red'
      },
      password:{
        backgroundColor:'teal'
      }
    }
    let style = type === 'password'? styles.password : styles.username
    let a = 10
    return(
      <input type={ type || 'text'} placeholder={ name || '用户名' }
       className='btn'
       style={ style }
       value = { a }
       ></input>
    )
  }
}

export default Button;
