import React from 'react'
import './gallery.scss'
import imgPath from '../../asset/44.webp'
import GalleryCard from './GalleryCard.jsx'
import uuid from 'react-uuid'
const Gallery = () => {
  const items = [
    {
      img: imgPath,
      serialNumber: 1,
    },
    {
      img: imgPath,
      serialNumber: 2,
    },
    {
      img: imgPath,
      serialNumber: 3,
    },
    {
      img: imgPath,
      serialNumber: 4,
    },
    {
      img: imgPath,
      serialNumber: 5,
    },
    {
      img: imgPath,
      serialNumber: 6,
    },
    {
      img: imgPath,
      serialNumber: 7,
    },
    {
      img: imgPath,
      serialNumber: 8,
    },
    {
      img: imgPath,
      serialNumber: 9,
    },
    {
      img: imgPath,
      serialNumber: 10,
    },
    {
      img: imgPath,
      serialNumber: 11,
    },
    {
      img: imgPath,
      serialNumber: 12,
    },
  ]

  return (
    <div id="gallery" className="gallery-container">
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