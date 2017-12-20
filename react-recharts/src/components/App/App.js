import React from 'react'
import './app.css'
import {PieChart, Pie, Legend, Tooltip, Cell, LabelList} from 'recharts'
class App extends React.Component {
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
          <Pie dataKey="value"  data={data01} cx={200} cy={150}  outerRadius={80} fill="#8884d8" label>
            {data01.map((item,index) => <Cell key={index} fill={COLORS[index]} />)}
          </Pie>
          <Tooltip/>
         </PieChart>
      </div>
    )
  }
}

export default App
