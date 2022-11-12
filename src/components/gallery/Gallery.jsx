import React from 'react'
import GalleryCard from './GalleryCard.jsx'
import uuid from 'react-uuid'
import { data } from '../../data/data'
const Gallery = () => {
  const items = data.gallery
  return (
    <div id="gallery" className="m-12">
      <h1 className="text-5xl m-12 text-center md:m-20">
        Gallery
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map(item => <GalleryCard {...item} key={uuid()} />)}
      </div>
    </div>
  )
}

export default Gallery