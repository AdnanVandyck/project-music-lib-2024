import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar(props) {

    let {term, handleSearch} = useContext(SearchContext)

  return (
    <div>
        <form>
        <input ref={term} type="text" placeholder="Search Here" />
        <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>

    </div>
  )
}

export default SearchBar