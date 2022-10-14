import React from 'react'
import './gallerycard.scss'
import { Link } from 'react-router-dom'

const GalleryCard = ({ img, serialNumber }) => {
  return (
    <div className="gallery-container__cards__item">
        <Link to={`/details/${serialNumber}`}>
            <img src={img} alt="image" className="gallery-container__cards__item__img" />
            <p className='gallery-container__cards__item__nftid'>Serial #{serialNumber}</p>
        </Link>
    </div>
  )
}

export default GalleryCard