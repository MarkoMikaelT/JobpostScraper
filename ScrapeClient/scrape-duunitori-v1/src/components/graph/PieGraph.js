import React from 'react'

import {Text, PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer} from 'recharts'

const scrapeArr = [{name: "python", value: 0},
                    {name: "java", value: 0},
                    {name: "csharp", value: 0},
                    {name: "cplus", value: 0},
                    {name: "javascript", value: 0},
                    {name: "typescript", value: 0}
                    ]

function formatData(data){

    data.forEach(doc =>{
        scrapeArr[0].value += doc.python
        scrapeArr[1].value += doc.java
        scrapeArr[2].value += doc.csharp
        scrapeArr[3].value += doc.cplus
        scrapeArr[4].value += doc.javascript
        scrapeArr[5].value += doc.typescript
    }) 

    return scrapeArr
}


const customLabel = ({percent}) => {
  return (
    `${(percent * 10000).toFixed(0) / 100}%`
  )
}

function PieGraph({data, COLORS}) {

  const pieVal = formatData(data)

  return (
    <div className='pie-chart'>
      <ResponsiveContainer width="100%" height="100%" debounce={1}>
        <PieChart width="100%" height="100%">
            <Pie data={pieVal} dataKey="value" nameKey="name"
             cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" fill="#82ca9d" label={customLabel}>
              {pieVal.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie> 
            <Legend iconType='diamond'></Legend>
        </PieChart>

      </ResponsiveContainer>
    </div>
  )
}

export default PieGraph
