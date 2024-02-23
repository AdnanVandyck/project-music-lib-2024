import React, { useEffect, useState, Fragment} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
import './App.css'


function App() {
  let [search, setSearch] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')
  

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if(search) {
      
    // fetchData()
    }
  }, [search])

  const fetchData = async () => {
    document.title = `${search} Music`
    const response = await fetch(API_URL + search)
    const resData = await response.json()
    if (resData.results.length > 0) {
      setData(resData.results)
    } else {
      setMessage('Not Found')
    }
}

  const handleSearch = (e, term) => {
    setSearch(term)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
  }

  return (
    <div className="App">
      {message}
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <SearchBar handleSearch ={handleSearch} handleSubmit={handleSubmit}/>
              <Gallery data={data}/>
            </Fragment>
          } />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
