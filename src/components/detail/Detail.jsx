import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const { id } = useParams()
  return (
    <div>Serial #{id}</div>
  )
}

export default Detail