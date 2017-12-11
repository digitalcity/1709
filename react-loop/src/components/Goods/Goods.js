import React from 'react'
import './goods.css'
class Goods extends React.Component {
  state = {
    goods:[
      {
        id:123,
        src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512972540575&di=a3c73197ee3836fc3049e74f4d46cde4&imgtype=0&src=http%3A%2F%2Fpic34.photophoto.cn%2F20150210%2F0042040398038072_b.jpg',
        name:'提拉米苏',
        price:11,
        buy:false
      },
      {
        id:345,
        src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512972514130&di=494e0023485fdf605a992ba5fb7bf0db&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20160604%2Ftooopen_sy_164225183255.jpg',
        name:'黑森林',
        price:15,
        buy:false
      },
      {
        id:567,
        src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512972489002&di=ba0aa5d9b702795b15a7c55fe51e1366&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20160604%2Ftooopen_sy_164226674751.jpg',
        name:'芝士',
        price:20,
        buy:false
      }
    ]
  }
  handleClick = id =>{
    this.setState({
      goods : this.state.goods.map(item=>{
        if(item.id === id)item.buy = true
        return item
      })
    })
    this.props.addCar(this.state.goods.find( item => item.id === id))
  }
  render () {
    const { goods } = this.state
    const list = goods.map( item =>{
      return (
        <div key={item.id} className='good'>
          <img src={item.src} alt='加载失败'></img>
          <button className={`btn ${item.buy&&'active'}`}
            disabled={item.buy}
            onClick={ ()=>{this.handleClick(item.id)} }>
              {item.buy?'已购':'购买'}
          </button>
        </div>
      )
    })
    return (
      <div className='goods-wrap'>
        { list }
      </div>
    )
  }
}

export default Goods;
