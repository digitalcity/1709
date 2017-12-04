import React from 'react'

class Box extends React.Component {
  state = {
    active: false
  }
  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render () {
    let color = this.state.active ? 'yellow' : 'teal'
    let styles = {
      box:{
        width:'200px',
        height:'200px',
        backgroundColor:color,
        borderRadius:'5px'
      },
      btn:{
        width:'80px',
        height:'40px',
        outline:'none',
        backgroundColor:'hotpink',
        color:'white',
        fontSize:'20px',
        border:'1px solid #ccc',
        borderRadius:'3px'
      }
    }
    return (
      <div>
        <button style={styles.btn} onClick={ this.handleClick }>切换</button>
        <div className='box' style={ styles.box}></div>
      </div>
    )
  }
}

export default Box;
