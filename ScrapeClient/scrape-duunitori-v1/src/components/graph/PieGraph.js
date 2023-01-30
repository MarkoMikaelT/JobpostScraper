import React from 'react'
import './Graph.css'
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer} from 'recharts'

const scrapeArr = [{name: "python", value: 0},
                    {name: "java", value: 0},
                    {name: "csharp", value: 0},
                    {name: "cplus", value: 0},
                    {name: "javascript", value: 0},
                    {name: "typescript", value: 0}
                    ]

function formatData(data){
    data.forEach(doc =>{
        scrapeArr[0].value = doc.python
        scrapeArr[1].value = doc.java
        scrapeArr[2].value = doc.csharp
        scrapeArr[3].value = doc.cplus
        scrapeArr[4].value = doc.javascript
        scrapeArr[5].value = doc.typescript
    }) 
    console.log("AAAAA  " + scrapeArr)
    return scrapeArr
}

function PieGraph({data}) {

    const pieVal = formatData(data)
  return (
    <div className='chart'>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={730} height={250}>
            <Pie data={pieVal} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={100} fill="#82ca9d" label/>
            <Legend verticalAlign="top" height={36}/>
            <Tooltip/>
        </PieChart>
        
      </ResponsiveContainer>
    </div>
  )
}

export default PieGraph
