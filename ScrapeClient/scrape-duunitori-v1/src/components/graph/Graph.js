import React from 'react'
import './Graph.css'
import {  BarChart, Bar, Tooltip, Legend, LineChart, Line,  CartesianGrid, XAxis, YAxis } from 'recharts'

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
                {name: 'Page b', uv: 300, pv: 2100, amt: 2100},
                {name: 'Page c', uv: 800, pv: 2800, amt: 200}];

const renderLineChart = (
    null
);

function Graph({data}) {
  return (
    <div className='bar-chart'>
      <BarChart
        width={700}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="runDate" />
        <YAxis/>
        <Tooltip />
        <Legend />
        <Bar dataKey="python" fill="#645CBB" />
        <Bar dataKey="java" fill="#A084DC" />
        <Bar dataKey="csharp" fill="#BFACE2" />
        <Bar dataKey="cplus" fill="#EBC7E6" />
        <Bar dataKey="javascript" fill="#AEE2FF" />
        <Bar dataKey="typescript" fill="#93C6E7" />
      </BarChart>
    </div>
  )
}

export default Graph
