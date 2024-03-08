import React, { useState, Suspense, useRef } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
import { createResource as fetchData } from './helper'
import Spinner from './Spinner';


function App() {
  let [search, setSearch] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')
  




function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if(search) {
      
    // fetchData()
    }
  }, [search])
    if(searchTerm) {
      setData(fetchData(searchTerm))
    }
  }, [searchTerm])

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

    e.preventDefault()
    setSearchTerm(term)
  }

  const renderGallery = () => {
    if(data){
      return (
        <Suspense fallback={<Spinner />}>
        <Gallery data={data}/>
        </Suspense>
      )
    }
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
      {renderGallery()}
    </div>
  );
}

export default App;
