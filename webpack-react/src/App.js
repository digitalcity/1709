import React from 'react'
import './app.css'
import Img from './images/dog.jpg'
import Home from './Home'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1 className='hello'>hello webpack</h1>
        <img src={Img} alt="111"/>
        <Home />
      </div>
    )
  }
}

export default App
