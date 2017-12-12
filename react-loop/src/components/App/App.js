import React from 'react'
import './app.css'
import Goods from '../Goods/Goods'
import Car from '../Car/Car'
class App extends React.Component {
  state={
    carGoods:[]
  }
  handleAddCar = (carGoods) => {
    this.setState({
      carGoods : [...this.state.carGoods,{...carGoods,...{count:1} }]
    })
    // carGoods.count = 1
    // let oldCarGoods = this.state.carGoods
    // oldCarGoods.push(carGoods)
    // this.setState({
    //   carGoods : oldCarGoods
    // })
  }


  handleAdd = id => {
    this.setState({
      carGoods : this.state.carGoods.map( item => {
        if(item.id === id)item.count++
        return item
      })
    })
  }
  handleMinus = id => {
    this.setState({
      carGoods : this.state.carGoods.map( item => {
        if(item.id === id && item.count > 1)item.count--
        return item
      })
    })
  }
  handleDelete = id => {
    this.setState({
      carGoods: this.state.carGoods.filter( item => {
        return item.id !== id
      })
    })
    this.goods.handleDelete(id)
  }
  render () {
    return (
      <div>
        <Goods ref={ goods => this.goods = goods } addCar={this.handleAddCar} />
        <Car carGoods={this.state.carGoods} handleAdd={this.handleAdd} handleMinus={this.handleMinus} handleDelete={this.handleDelete} />
      </div>
    )
  }
}

export default App
