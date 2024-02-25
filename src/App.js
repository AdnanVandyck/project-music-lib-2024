import React, { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar'
import { createResource as fetchData } from './helper'


function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if(searchTerm) {
      setData(fetchData(searchTerm))
    }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className="App">
      <SearchBar handleSearch = {handleSearch}/>
      {message}
      <Suspense fallback={<h1>Loading...</h1>}>
      <Gallery data={data}/>
      </Suspense>
      
    </div>
  );
}

export default App;
