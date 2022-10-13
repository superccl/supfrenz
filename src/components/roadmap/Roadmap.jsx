import React from 'react'
import './roadmap.scss'
import RoadmapItem from './RoadmapItem'
import uuid from 'react-uuid'

const Roadmap = () => {

  const items = [
    {
      title: 'Title 1',
      body: 'Body 1',
      style: {top: '10px', left: '10px'}
    },
    {
      title: 'Title 2',
      body: 'Body 2',
      style: {top: '10%', left: '10%'}
    },
    {
      title: 'Title 3',
      body: 'Body 3',
      style: {top: '20px', left: '30px'}
    },
    {
      title: 'Title 4',
      body: 'Body 4',
      style: {top: '50%', left: '50%'}
    },
  ]
  return (
    <div id="roadmap" className="roadmap-container">Roadmap
      {items.map(item => <RoadmapItem key={uuid()} {...item}/>)}
    </div>
  )
}

export default Roadmap