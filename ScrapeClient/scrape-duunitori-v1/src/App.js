import logo from './logo.svg';
import './App.css';
import api from './ScrapeApi/AxiosConf';
import { useState, useEffect } from 'react';

function App() {

  const [scrapes, setScrapes] = useState()

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
      setScrapes(response.data)
      console.log(response.data)
    
    } catch(err){
      console.warn(err)
    }
  }


  useEffect(() => {
    getScrapes();
    getScrapeByDate();
  }, [])

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
