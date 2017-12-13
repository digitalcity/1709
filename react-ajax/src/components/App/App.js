import React from 'react'
import axios from 'axios'
class App extends React.Component {
  state = {
    info:null
  }
  componentDidMount() {
    axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:'9948d556-1825-416f-934f-b3ce046403e3'})
      .then( res => {
        console.log(res)
        this.setState({
          info:res.data
        })
      })
      .catch( err => {
        alert(err)
      })
  }
  render () {
    const info = this.state.info ? (
      <div>
        <h2>{this.state.info.loginname}</h2>
        <img src={this.state.info.avatar_url} alt="111"/>
      </div>
    ) : '请稍等'
    return (
      <div>{info}</div>
    )
  }
}

export default App
