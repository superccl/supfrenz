import React from 'react'
import { Link } from 'react-router-dom'

const GalleryCard = ({ img, serialNumber }) => {
  return (
    <div className="w-full">
        <Link to={`/details/${serialNumber}`}>
            <img src={img} alt="image" className="w-full aspect-square object-cover rounded-lg" />
            <p className='text-center m-4 text-2xl'>Serial #{serialNumber}</p>
        </Link>
    </div>
  )
}

export default GalleryCard