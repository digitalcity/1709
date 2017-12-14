import React from 'react'

class ShowTopics extends React.Component {
  render () {
    const { data } = this.props
    console.log(data)
    const showTopics = data.map( item => {
      return (
        <div key={item.id}>
          <img src={item.author.avatar_url} alt="11"/>
          <span>{item.reply_count}/{item.visit_count}</span>
          <span>{item.top?'置顶':item.good?'精华':item.tab==='share'?'分享':'问答'}</span>
          <span>{item.title}</span>
        </div>
      )
    })
    return (
      <div>{showTopics}</div>
    )
  }
}

export default ShowTopics
