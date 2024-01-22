import React, { useState } from 'react'

function SearchBar(props) {
    // let [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
        <form>
        <input type="text" placeholder="Search Here"
        onChange={
            (e) => props.handleSearch(e, e.target.value)
            }/>
        <input type="submit" />
        </form>

    </div>
  )
}

export default SearchBar