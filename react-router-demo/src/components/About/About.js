import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

let Dijia = (props) => {
  console.log(props);
  const { name } = props.match.params
  if(name === 'dijia'){
    return <div>dijia</div>
  }else if(name === 'zzt'){
    return <div>zzt</div>
  }else{
    return <Redirect from={props.match.url} to='/404'/>
  }
}
// let Zzt = () => <div>zzt</div>
let Select = () => <div>Select one</div>
class About extends React.Component {
  render () {

    // console.log(this.props)
    console.log(this.props)
    const { match } = this.props
    return (
      <div>
        <h1>About</h1>
        <span onClick={()=>this.props.history.goBack()}>返回来的地方</span><br></br>
        <span onClick={()=>this.props.history.push('/')}>返回首页</span>
        <ul>
          <li><Link to={`${match.url}/dijia`}>第嘉</Link></li>
          <li><Link to={`${match.url}/zzt`}>zzt</Link></li>

        </ul>
        <Route path={`${match.url}/:name`} component={Dijia}/>
        <Route path={match.url} exact component={Select}/>
      </div>
    )
  }
}

export default About
