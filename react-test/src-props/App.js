import React,{ Component }  from 'react'
import Button from './Button/Button'
import Wrap from './Wrap/Wrap'
class App extends Component {
  render () {
    return (
      <div>
        <Button text='登录' style={{color:'red',backgroundColor:'yellow'}}/>
        <Wrap>
          <Button />
        </Wrap>
      </div>
    )
  }
}

export default App
//组件文件夹 首字母大写 多个单词组成的话驼峰命名
//文件夹下的js 首字母大写。。。   css全部小写，多个单词的话最好使用 - 连接
