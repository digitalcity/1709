import React from 'react'
import './modal.css'
class Modal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
  }
  handleClose = () => {
    this.setState({
      show: false
    })
    this.props.click()
  }
  handleMaskClose = e =>{
    // console.log(e)
    // if(e.target.className === 'wrap')this.handleClose()
    // e.currentTarget绑定事件的对象
    if( e.target=== e.currentTarget )this.handleClose()
  }
  componentWillReceiveProps(nextProps) {
    // 父组件传过来的 props 改变的时候被触发
    // console.log(nextProps.show)
    if(nextProps.show)this.setState({show:nextProps.show})
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shoud')
  //   return true
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('willup');
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('didup')
  // }

  render () {
    let { title, children, cancleText, okText, onCancle, onOk } = this.props
    return (
      <div className='wrap' onClick={ this.handleMaskClose } style={ {display : this.state.show ? 'block' : 'none'} }>
        <div className='modal' >
          <div className='title'>
            <h3>{ title }</h3>
            <span onClick={ this.handleClose }>x</span>
          </div>
          <div className='modal-content'>
            { children }
          </div>
          <div className='modal-button'>
            <button onClick={ ()=>{
                this.handleClose()
                onCancle && onCancle()
              } }>{cancleText}</button>
            <button onClick={ () => {
              this.handleClose()
              onOk && onOk()
              } }>{okText}</button>
          </div>
        </div>
      </div>
    )
  }
}
Modal.defaultProps = {
  title:'default title',
  children:<p>默认的内容</p>,
  cancleText: 'cancle',
  okText:'OK'
}
export default Modal
// constructor 函数内部 不做设置是拿不到父组件 传过来的 props 的，想要拿到 需要在constructor函数传一个 props 参数，并且也需要在 super 方法内传一个参数 props 这样就可以在 constructor 内部获取到 props 了
