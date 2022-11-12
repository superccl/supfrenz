import React from 'react'
import RoadmapItem from './RoadmapItem'
import uuid from 'react-uuid'
import {data} from '../../data/data'

const Roadmap = () => {

  const items = data['roadmap']
  return (
    <div id="roadmap" className="h-[300px] border-[2px] border-red-500 text-center relative">Roadmap
      {items.map(item => <RoadmapItem key={uuid()} {...item}/>)}
    </div>
  )
}

export default Roadmap