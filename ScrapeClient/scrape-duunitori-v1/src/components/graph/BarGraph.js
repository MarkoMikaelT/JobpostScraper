import React from 'react'
import './Graph.css'
import {  BarChart, Bar, Tooltip, Legend, ResponsiveContainer,CartesianGrid, XAxis, YAxis } from 'recharts'

function Graph({data}) {
  return (
    <div className='chart'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart

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
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
