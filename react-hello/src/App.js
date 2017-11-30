import React from 'react'
import Header from './Component/Header'
import Main from './Component/Main'
import Footer from './Component/Footer'
// let App = () => <h1>hello world</h1>
class App extends React.Component{
    render(){
      return <div>
        <Header />
        <Main />
        <Footer />
      </div>
    }
}

export default App
