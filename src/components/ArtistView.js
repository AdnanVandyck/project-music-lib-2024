// These components will be making separate API calls from the app
// component to serve specific data about our artist
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
          try {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
          } catch (error) {
            console.log(error)
          }  
        }
        fetchData()
    }, [id])


    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i) => {
      return (
        <div key={i}>
          <p>{album.collectionName}</p>
        </div>
      )
    })


    return(
      <div>
        <h2>The is passed was: {id}</h2>
        <p>Artist Data goes Here!</p>
        {renderAlbums}
      </div>
    )
}

export default ArtistView