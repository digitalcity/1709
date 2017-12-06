import React from 'react'
import './button.css'
class Button extends React.Component {
  handleClick = () => {
    this.props.click()
  }
  render () {
    return (
      <button className='btn' onClick={ this.handleClick }>{ this.props.txt }</button>
    )
  }
}

export default Button;
