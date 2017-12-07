import React from 'react'
import './app.css'
class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     num : 10
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }
  state = {
    num : 'world'
  }
  handleClick = () => {
    this.setState({
      num : 'dream'
    })
  }
  render () {
    let style = { color:'green' }
    let style1 = { fontSize:'20px' }
    let newStyle = Object.assign({},style,style1)
    console.log(this.props)
    return (
      <div onClick={ this.handleClick }>
        hello { this.state.num }
        <span className='color' style={ newStyle }> { this.props.test }</span>
        { this.props.children }
      </div>
    )
  }
}
App.defaultProps = {
  test:100
}
export default App
