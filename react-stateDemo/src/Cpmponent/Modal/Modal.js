import React from 'react'
import './modal.css'
class Modal extends React.Component {
  state = {
    show:false
  }
  handleClose = () => {
    this.setState({
      show: false
    })
  }
  render () {

    return (
      <div className='wrap' style={ {display : this.state.show ? 'block' : 'none'} }>
        <div className='modal'>
          <div className='title'>
            <h3>Basic Modal</h3>
            <span onClick={ this.handleClose }>x</span>
          </div>
          <div className='modal-content'>
            内容
          </div>
          <div className='modal-button'>
            <button onClick={ this.handleClose }>cancle</button>
            <button onClick={ this.handleClose }>OK</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
