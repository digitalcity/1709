import React from 'react'
import axios from 'axios'
class ShowTopic extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
      .then(res => {
        console.log(res)
      })
      .catch( err => {
        alert(err)
      })
  }
  render () {
    return (
      <div>
        ShowTopic
      </div>
    )
  }
}

export default ShowTopic
