import React from 'react'
import './antdemo.css'
import
{
  DatePicker,
  Button,
  message,
  Modal,
  Icon,
  Carousel
}
from 'antd'
import moment from 'moment'

message.config({
  top:200,
  duration:2
})
class AntDemo extends React.Component {
  state = {
    visible: false
  }
  handleClose = () => {
    this.setState({
      visible : false
    })
  }
  showModal = () => {
    this.setState({
      visible : true
    })
  }
  showModal1 = () => {
    Modal.success({
      content:'成功了',
      width:200
    })
  }
  render () {
    const { visible } = this.state
    return (
      <div>
        <DatePicker allowClear={false}
          autoFocus={true}
          defaultValue={moment('2017/01/01', 'YYYY/MM/DD')}
          showTime
          onOk={function(dateString){
            alert(dateString)
          }}

        />

      <Button onClick={()=>message.success('哈哈哈哈')}>Success</Button>
      <Button onClick={()=>message.error('哈哈哈哈')}>Error</Button>
      <Button onClick={()=>message.warning('哈哈哈哈')}>Warning</Button>

      <Button type="primary" onClick={this.showModal}>Open</Button>
      <Button type="primary1" onClick={this.showModal1}>Open2</Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onCancel={this.handleClose}
        maskClosable={false}
        closable={false}
      >
        <p>Some contents...</p>
      </Modal>
      <Icon type="step-backward" />
      <Icon type="wechat" />
      <Carousel ref={carousel => this.carousel = carousel} autoplay >
        <div className='item1'><h3>1</h3></div>
        <div className='item2'><h3>2</h3></div>
        <div className='item3'><h3>3</h3></div>
        <div className='item4'><h3>4</h3></div>
      </Carousel>
      <Button onClick={()=>this.carousel.prev()}>prev</Button>
      <Button onClick={()=>this.carousel.next()}>next</Button>
      </div>
    )
  }
}

export default AntDemo
