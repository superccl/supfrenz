import React from 'react'
import './roadmap.scss'
import RoadmapItem from './RoadmapItem'
import uuid from 'react-uuid'
import data from '../../data/data.json'

const Roadmap = () => {

  const items = data['roadmap']
  return (
    <div id="roadmap" className="roadmap-container">Roadmap
      {items.map(item => <RoadmapItem key={uuid()} {...item}/>)}
    </div>
  )
}

export default Roadmap