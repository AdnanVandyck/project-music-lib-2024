import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'


function Gallery() {
    const data = useContext(DataContext)
    const myData = data.result.read()

    const display = myData.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} />
        )
    })

  return (
    <div>
        {display}
    </div>
  )
}

export default Gallery