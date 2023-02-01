import logo from './logo.svg';
import './App.css';
import api from './ScrapeApi/AxiosConf';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import GraphCenter from './components/graph/GraphCenter';

//example data
import TestDataAll from './ExampleDataAll.json'
import TestDataOne from './ExampleDataOneDay.json'

function App() {

  const [scrapes, setScrapes] = useState()
  const [scrapesByDate, setByDatScrape] = useState()

  const getScrapes = async () => {
    try{
      const response = await api.get("/api/v1/Scrape")
      setScrapes(response.data)
      console.log(response.data)
    
    } catch(err){
      console.warn(err)
    }
  }

  const getScrapeByDate = async () => {
    try{
      const response = await api.get("/api/v1/Scrape/28-01-2023")
      setByDatScrape(response.data)
      console.log(response.data)
    
    } catch(err){
      console.warn(err)
    }
  }


  useEffect(() => {
    // getScrapes();
    // getScrapeByDate();
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/graphs' element={<GraphCenter scrapes={TestDataAll} scrapesByDate={TestDataOne}></GraphCenter>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
