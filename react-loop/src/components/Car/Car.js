import React from 'react'
import './car.css'
class Car extends React.Component {

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
  render () {
    const { carGoods, handleAdd, handleMinus, handleDelete } = this.props
    const carList = carGoods.map( item => {
      return (
        <div key={item.id} className='car-good'>
          <div className='good-info'>
            <img src={item.src} alt='111'></img>
            <div>
              <h3>{item.name}</h3>
              <span>￥ {item.price}</span>
            </div>
          </div>
          <div className='count'>
            <button onClick={ ()=>{ handleMinus(item.id)} }>-</button>
            <span>{item.count}</span>
            <button onClick={ ()=>{ handleAdd(item.id)} }>+</button>
          </div>
          <button onClick={ ()=>{ handleDelete(item.id)}}>删除</button>
        </div>
      )
    })
    return (
      <div>
        <div className='total'>
          { carGoods.length !== 0 ? <span>{this.countTotal(carGoods)}</span> : <p>请添加商品到购物车</p> }
        </div>
        <div className='car'>
          {carList}
        </div>
      </div>
    )
  }
}

export default Car;
