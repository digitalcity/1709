import React from 'react'
//当组件中放 一组相同jsx接点的时候 需要给每个节点一个 唯一的 key值 这个 key 值最好是一直不变的
import './app.css'
class App extends React.Component {
  state = {
    tabs : [
      {
        title:'tab1',
        content: 'tba1 content',
        id:1
      },
      {
        title:'tab2',
        content: 'tba2 content',
        id:2
      },
      {
        title:'tab3',
        content: 'tba3 content',
        id:3
      }
    ],
    show: 0
  }
  handleClick = (ind) => {
    this.setState({
      show : ind
    })
  }
  render () {
    let { tabs } = this.state
    let style = {
      width:'100px'
    }
    //Object.assgin({},style,{color: this.state.show === index?'red':'black'})
    let tabsTitle = tabs.map( (item,index) => {
      return <button key={ item.id } onClick={ () => {
          this.handleClick(index)
        } } style={ {...style,...{color: this.state.show === index?'red':'black'}} }>{ item.title }</button>
    } )
    let tabsContent = tabs.map( item => {
      return (
        <div className='tab' key={ item.id }>{ item.content } </div>
      )
    } )
    let ml = `${this.state.show*-300}px`
    return (
      <div>
        <div className='tabsTitle'>
          { tabsTitle }
        </div>
        <div className='show'>
          <div className='tabs' style={{marginLeft:ml}}>
            { tabsContent }
          </div>
        </div>
      </div>
    )
  }
}

export default App
