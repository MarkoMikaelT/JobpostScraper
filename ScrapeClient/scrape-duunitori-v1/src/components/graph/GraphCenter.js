import React from 'react'
import BarGraph from '../graph/BarGraph'
import PieGraph from '../graph/PieGraph'
import './Graph.css'

const COLORS = ['#645CBB', '#A084DC', '#BFACE2', '#EBC7E6', '#AEE2FF', '#93C6E7'];

function GraphCenter({scrapes, scrapesByDate}) {
  return (
    <div className='graph-container'>
      <BarGraph data={scrapes} COLORS={COLORS}></BarGraph>
      
      <PieGraph data={scrapes} COLORS={COLORS}></PieGraph>
      <BarGraph data={scrapesByDate} COLORS={COLORS}></BarGraph>
    </div>
  )
}

export default GraphCenter
