import React from 'react'

import {  BarChart, Bar, Tooltip, Legend, ResponsiveContainer,CartesianGrid, XAxis, YAxis } from 'recharts'

function Graph({data, COLORS}) {
  return (
    <div className='bar-chart'>
      <ResponsiveContainer width="100%" height="100%" debounce={1}>
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
          <Bar dataKey="python" fill={COLORS[0]} />
          <Bar dataKey="java" fill={COLORS[1]} />
          <Bar dataKey="csharp" fill={COLORS[2]} />
          <Bar dataKey="cplus" fill={COLORS[3]} />
          <Bar dataKey="javascript" fill={COLORS[4]} />
          <Bar dataKey="typescript" fill={COLORS[5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
