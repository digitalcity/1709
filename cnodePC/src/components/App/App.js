import React from 'react'
import './app.css'
import
{
  BrowserRouter as Router,
  Route
}
from 'react-router-dom'
import Home from '../Home/Home'
import ShowTopic from '../ShowTopic/ShowTopic'
import UserInfo from '../UserInfo/UserInfo'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route path='/' exact component={Home}/>
            <Route path='/topic/:id'  component={ShowTopic}/>
            <Route path='/user/:loginname' component={UserInfo} />
            <Footer />
          </div>
        </Router>

      </div>
    )
  }
}

export default App
