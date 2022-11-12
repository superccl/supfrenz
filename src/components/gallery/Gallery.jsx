import React from 'react'
import './gallery.scss'
import GalleryCard from './GalleryCard.jsx'
import uuid from 'react-uuid'
import { data } from '../../data/data'
const Gallery = () => {
  const items = data.gallery
  return (
    <div id="gallery" className="gallery-container m-3">
      <h1 className="gallery-container__header">
        Gallery
      </h1>
      <div className="gallery-container__cards">
        {items.map(item => <GalleryCard {...item} key={uuid()} />)}
      </div>
    </div>
  )
}

export default Gallery