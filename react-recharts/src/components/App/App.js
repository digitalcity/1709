import React from 'react'
import './app.css'
import {PieChart, Pie, Legend, Tooltip, Cell, LabelList} from 'recharts'
class App extends React.Component {
  constructor(){
    super()
    this.state={
      items:[]
    }
    this.handle = this.handle.bind(this)
  }
  handle(item){
    if(!this.state.items.find((t)=>t.name===item.name)){
      this.setState({
        items:[
          ...this.state.items,
          {
            value:item.value,
            name:item.name
          }
        ]
      })
    }
  }
  render () {
    const data01 = [
      {name: 'React', value: 500},
      {name: 'Vue', value: 470},
      {name: 'Angular', value: 200},
      {name: 'Backbone', value: 100}
    ]
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
    return (
      <div>
        <PieChart width={400} height={300} style={{margin: '0 auto',border:'2px solid #ccc'}}>
          <Pie dataKey="value"  data={data01} cx={200} cy={150}  outerRadius={80} fill="#8884d8" label >
            {data01.map((item,index) => <Cell key={index} fill={COLORS[index]} onClick={()=>{this.handle(data01[index])}}
            />)}
          </Pie>
          <Tooltip />
         </PieChart>
         <div>
          {
            this.state.items.map((item,index)=><p key={index}>{item.name}:{item.value}</p>)
          }
         </div>
      </div>
    )
  }
}

export default App
