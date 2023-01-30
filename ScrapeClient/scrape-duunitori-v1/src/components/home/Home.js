import React from 'react'
import Graph from '../graph/Graph'

const Home = ({scrapes, scrapesByDate}) => {
  return (
    <div className='graph-container'>
        <Graph data={scrapes}></Graph>
        <Graph data={scrapesByDate}></Graph>
    </div>
  )
}

export default Home
