import React from 'react'
import BarGraph from '../graph/BarGraph'
import PieGraph from '../graph/PieGraph'

const Home = ({scrapes, scrapesByDate}) => {
  return (
    <div className='graph-container'>
        <BarGraph data={scrapes}></BarGraph>
        <BarGraph data={scrapesByDate}></BarGraph>
        <PieGraph data={scrapesByDate}></PieGraph>
    </div>
  )
}

export default Home
