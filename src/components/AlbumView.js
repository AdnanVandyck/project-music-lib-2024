import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner'

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
      const API_URL = `http://localhost:4000/song/${id}`
      const fetchData = async () => {
        const response = await fetch(API_URL)
        const resData = await response.json()
        setAlbumData(resData.results)
      }
      fetchData()
    }, [id])


    const allSongs = albumData.filter(entity => entity.kind === 'song')
    .map((album, i) => {
      return (
        <div key={i}>
          {album.trackName}
        </div>
      )
    })

  return (
    <div>
      {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <Spinner />}
      {allSongs}
    </div>
  )
}

export default AlbumView