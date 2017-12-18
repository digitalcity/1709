import React from 'react'
// import { Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import 'typeface-roboto'
class App extends React.Component {
  render () {
    return (
      <div>
        {
        //   <Button>Default</Button>
        // <Button bsStyle="primary">Primary</Button>
        }
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
            <RaisedButton label='哈哈哈' backgroundColor='teal' buttonStyle={{width:'100px'}}/>
            <RaisedButton label="Secondary" secondary={true} />
            <AppBar
              title="Title"
              iconElementRight={<FontIcon className="material-icons" color='red'>home</FontIcon>}
              onTitleClick={()=>alert(2)}
              onLeftIconButtonClick={()=>alert(1)}
            />
          <FontIcon className="material-icons" >home</FontIcon>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
