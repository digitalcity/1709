import React from 'react'

class App1 extends React.Component {
  state = {
    username:'',
    sex:'yao',
    comment:'',
    grade: 'B'
  }
  //如果一个带参数的事件函数，要使用 event 参数的话，需要把 event 放在参数的最后面
  // handleInput = e => {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }
  // handleRadio = e => {
  //   this.setState({
  //     sex: e.target.value
  //   })
  // }
  // handleComment = e => {
  //   this.setState({
  //     comment:e.target.value
  //   })
  // }
  // handleSelect = e => {
  //   this.setState({
  //     grade:e.target.value
  //   })
  // }
  handleClick = (stateName,e) => {
    this.setState({
      [stateName]:e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { username, sex, comment, grade} = this.state
    console.log(`用户名:${username}`)
    console.log(`性别:${sex}`)
    console.log(`评论:${comment}`)
    console.log(`等级:${grade}`)
  }
  render () {
    let obj = {
      name: 'zzt'
    }
    let a = 'name'
    console.log(obj[a])
    return(
      <div>

        <form >
          username:<input type='text' value={  this.state.username } onChange={ (e)=>{
            this.handleClick('username',e)
          }  }></input><br/>
        性别:
        男<input type='radio' name='sex' value='male' checked={this.state.sex === 'male'? true :false } onChange={ (e)=>{
          this.handleClick('sex',e)
        }  }></input>

        女<input type='radio' name='sex' value='female' checked={this.state.sex === 'female'? true :false } onChange={ (e)=>{
          this.handleClick('sex',e)
        }  }></input>

        人妖<input type='radio' name='sex' value='yao' checked={this.state.sex === 'yao'? true :false } onChange={ (e)=>{
          this.handleClick('sex',e)
        }  }></input><br/>

        评论
        <textarea value={ this.state.comment } onChange = { (e)=>{
          this.handleClick('comment',e)
        }  }></textarea><br />

        等级
        <select value={ this.state.grade } onChange={(e)=>{
          this.handleClick('grade',e)
        } }>
          <option value='A'>A</option>
          <option value='B'>B</option>
          <option value='C'>C</option>
          <option value='D'>D</option>
        </select><br />
        <input type='submit' onClick={this.handleSubmit}></input>
        </form>
      </div>
    )
  }
}


export default App1
