import React from 'react'

// setState方法是异步操作        异步非阻塞 同步阻塞
// console.log(this.state.start)
// requestAnimationFrame
// 组件内的计时器 要当做组件的属性去设置
let eats = ['香蕉','芒果','apple','li','on shit!!','不吃了']
class App1 extends React.Component {
  state = {
    start : false,
    eat: '请点击开始按钮'
  }
  handleStart = () => {
    let { start } = this.state
    if ( start ) {
      //停止
      clearInterval(this.timer)
    } else {
      //开始
      this.timer = setInterval(() => {
        this.setState({
          eat: eats[Math.floor(Math.random()*eats.length)]
        })
      },100)
    }
    this.setState({
      start : !start
    })
  }
  render () {
    let txt = this.state.start ? '停止' : '开始'
    return (
      <div>
        <p>今天吃什么：{ this.state.eat }</p>
        <button onClick={ this.handleStart}>{ txt }</button>
      </div>
    )
  }
}
export default App1
