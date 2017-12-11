import React from 'react'
import './car.css'
class Car extends React.Component {

  

  render () {
    const { carGoods, handleAdd, handleMinus, handleDelete , total} = this.props
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
          <button onClick={()=>{ handleDelete(item.id)}}>删除</button>
        </div>
      )
    })
    return (
      <div>
        <div className='total'>
          { carGoods.length !== 0 ? <span>{total}</span> : <p>请添加商品到购物车</p>}
        </div>
        <div className='car'>
          {carList}
        </div>
      </div>
    )
  }
}

export default Car;
