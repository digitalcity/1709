import React from 'react'
import './app.css'
class App extends React.Component {
  state = {
    show: 0
  }
  handleClick = ind => {
    this.setState({
      show: ind
    })
  }
  handleLeft = () => {
    let { show } = this.state
    show--
    if(show === -1){
      show = 2
    }
    this.setState({
      show : show
    })
  }
  right = () => {
    let { show } = this.state
    show++
    if(show === 3){
      show = 0
    }
    this.setState({
      show : show
    })
  }
  handleRight = () => {
    this.right()
  }
  timer = () => {
    return setInterval(() => {
      this.right()
    },1750)
  }
  componentDidMount() {
    this.loop = this.timer()
  }
  handleEnter = () => {
    clearInterval(this.loop)
  }
  handleLeave = () => {
    this.loop = this.timer()
  }
  render () {
    const { show } = this.state
    return (
      <div className='show' onMouseEnter={ this.handleEnter } onMouseLeave={ this.handleLeave }>
        <div className='pic' style={ {marginLeft: `${show*-500}px`} }>
          <img src='http://img3.imgtn.bdimg.com/it/u=3887543048,3426369677&fm=27&gp=0.jpg' alt='11'></img>
          <img src='http://img0.imgtn.bdimg.com/it/u=1804374987,897057441&fm=27&gp=0.jpg' alt='11'></img>
          <img src='http://img2.imgtn.bdimg.com/it/u=155983156,3239703256&fm=27&gp=0.jpg' alt='11'></img>
        </div>
        <ul>
          <li className={`${show===0&&'active'}`} onClick={ () => { this.handleClick(0) } }></li>
          <li className={`${show===1&&'active'}`} onClick={ () => { this.handleClick(1) } }></li>
          <li className={`${show===2&&'active'}`} onClick={ () => { this.handleClick(2) } }></li>
        </ul>
        <button onClick={ this.handleLeft } className='left'>{'<'}</button>
        <button onClick={ this.handleRight } className='right'>></button>
      </div>
    )
  }
}

export default App
