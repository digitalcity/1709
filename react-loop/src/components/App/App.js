import React from 'react'
import './app.css'
import Goods from '../Goods/Goods'
import Car from '../Car/Car'
class App extends React.Component {
  render () {
    return (
      <div>
        <Goods />
        <Car />
      </div>
    )
  }
}

export default App
