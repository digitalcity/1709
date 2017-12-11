import React from 'react'
import './car.css'
class Car extends React.Component {
  state={
    carGoods:[
      {
        id:123,
        src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512972540575&di=a3c73197ee3836fc3049e74f4d46cde4&imgtype=0&src=http%3A%2F%2Fpic34.photophoto.cn%2F20150210%2F0042040398038072_b.jpg',
        name:'提拉米苏',
        price:11,
        buy:false,
        count: 1
      },
      {
        id:345,
        src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512972514130&di=494e0023485fdf605a992ba5fb7bf0db&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20160604%2Ftooopen_sy_164225183255.jpg',
        name:'黑森林',
        price:15,
        buy:false,
        count: 1
      }
    ],
    total:0
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

  render () {
    const { carGoods } = this.state
    const carList = carGoods.map( item => {
      return (
        <div key={item.id} className='car-good'>
          <div className='good-info'>
            <img src={item.src} alt='111'></img>
            <div>
              <h3>{item.name}</h3>
              <span>￥{item.price}</span>
            </div>
          </div>
          <div className='count'>
            <button onClick={ ()=>{ this.handleMinus(item.id)} }>-</button>
            <span>{item.count}</span>
            <button onClick={ ()=>{ this.handleAdd(item.id)} }>+</button>
          </div>
          <button>删除</button>
        </div>
      )
    })
    return (
      <div>
        <div className='total'>
          { this.state.carGoods.length !== 0 ? <span>{this.state.total}</span> : <p>请添加商品到购物车</p>}
        </div>
        <div className='car'>
          {carList}
        </div>
      </div>
    )
  }
}

export default Car;
