import React from 'react'

class App extends React.Component {
  state = {
    tabsTitle : ['tab1','tab2','tab3']
  }
  handleClick = () => {
    console.log(1)
  }
  render () {
    let tabs = this.state.tabsTitle.map( item => {
      return <button onClick = { this.handleClick }>{ item }</button>
    } )

    return (
      <div>
        <div className='tabsTItle'>
          { tabs }
        </div>
        <div>
          
        </div>
      </div>
    )
  }
}

export default App
