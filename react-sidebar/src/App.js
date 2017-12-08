import React from 'react'

class App extends React.Component {
  state = {
    username:'',
    sex:'yao',
    fruit:[],
    comment:'',
    grade: 'B'
  }
  // handleClick = () => {
  //   console.log(this.input.value)
  // }
  handleInput = e => {
    //作为 input 修改 state 的函数
    this.setState({
      username: e.target.value
    })
    // console.log(this.state.username)
  }
  handleRadio = e => {
    //作为 input 修改 state 的函数
    this.setState({
      sex: e.target.value
    })
    // console.log(this.state.username)
  }
  handleSubmit = e => {
    e.preventDefault()
    const { username, fruit, sex, comment, grade} = this.state
    console.log(`用户名:${username}`)
    console.log(`性别:${sex}`)
    console.log(`水果:${fruit}`)
    console.log(`评论:${comment}`)
    console.log(`等级:${grade}`)
  }
  handleCheck = e => {
    //fruit[]
    let { fruit } = this.state
    const value = e.target.value
    const ind = fruit.indexOf(value)
    if(ind === -1){
      fruit.push(value)
    }else{
      fruit.splice(ind,1)
    }
    this.setState({
      fruit : fruit
    })
  }
  handleComment = e => {
    this.setState({
      comment:e.target.value
    })
  }
  handleSelect = e => {
    this.setState({
      grade:e.target.value
    })
  }
  render () {
    return(
      <div>
        {
        //   <button onClick={ this.handleClick }>按钮</button>
        // <input ref={ inp => this.input = inp } type='text' defaultValue='111' ></input>
      }
        <form >
          username:<input type='text' value={  this.state.username } onChange={ this.handleInput }></input><br/>
        性别:
        男<input type='radio' name='sex' value='male' checked={this.state.sex === 'male'? true :false } onChange={ this.handleRadio }></input>

        女<input type='radio' name='sex' value='female' checked={this.state.sex === 'female'? true :false } onChange={ this.handleRadio }></input>

        人妖<input type='radio' name='sex' value='yao' checked={this.state.sex === 'yao'? true :false } onChange={ this.handleRadio }></input><br/>
        你喜欢的水果？<br />
        香蕉<input type='checkbox' value='banana' onChange={ this.handleCheck}></input>
        苹果<input type='checkbox' value='apple' onChange={ this.handleCheck}></input>
        大鸭梨<input type='checkbox' value='pear' onChange={ this.handleCheck}></input><br/>
        评论
        <textarea value={ this.state.comment } onChange = { this.handleComment }></textarea><br />

        等级
        <select value={ this.state.grade } onChange={this.handleSelect}>
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

//react   form
// 受控组件
// 1.将变化的值 设置为 state
// 2.修改 state 使用 onChange 事件

// 非受控组件
// value ===>  defaultValue
// checked ===> defaultChecked
// selected ===> defaultSelected
// 变化的 值不受state控制  只能使用 真实dom节点获取

// 如果不使用 form 本身的提交功能传递数据，而使用 ajax 提交的话，
// 依然想使用 type=submit 按钮提交, 注意 要阻止 submit 按钮的默认事件
export default App
