import React from 'react'
import './app.css'
import Goods from '../Goods/Goods'
import Car from '../Car/Car'
class App extends React.Component {
  state={
    carGoods:[],
    total:0
  }
  componentDidMount() {
    this.setState({
      total : this.countTotal(this.state.carGoods)
    })
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
  countTotal = (carGoods) => {
    // let total = 0
    // for( let i = 0;i<carGoods.length;i++){
    //   total+=carGoods[i].price*carGoods[i].count
    // }
    // return total
    return carGoods.reduce((sum,item) => {
      return sum + item.price*item.count
    },0)
  }

  handleAdd = id => {
    this.setState({
      carGoods : this.state.carGoods.map( item => {
        if(item.id === id)item.count++
        return item
      }),
      total :  this.countTotal(this.state.carGoods)
    })
  }
  handleMinus = id => {
    this.setState({
      carGoods : this.state.carGoods.map( item => {
        if(item.id === id && item.count > 1)item.count--
        return item
      }),
      total : this.countTotal(this.state.carGoods)
    })
  }
  handleDelete = id => {
    this.setState({
      carGoods: this.state.carGoods.filter( item => {
        return item.id !== id
      }),
      total : this.countTotal(this.state.carGoods)
    })
  }
  render () {
    console.log(this.state.carGoods)
    return (
      <div>
        <Goods addCar={this.handleAddCar}/>
        <Car carGoods={this.state.carGoods} handleAdd={this.handleAdd} handleMinus={this.handleMinus} handleDelete={this.handleDelete} total={this.state.total}/>
      </div>
    )
  }
}

export default App
