import React from 'react'
import './box.css'
class Box1 extends React.Component {
  state = {
    active : false
  }
  handleClick = () => {
    this.setState({
      active : !this.state.active
    })
  }
  render () {
    // let className = this.state.active ? 'box active' :'box'
    let box = `box ${this.state.active && 'active'}`
    return(
      <div>
        <button onClick={ this.handleClick }>切换</button>
        <div className={ box }></div>
      </div>
    )
  }
}

export default Box1
