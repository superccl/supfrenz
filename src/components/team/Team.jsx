import React from 'react'
import TeamCard from './TeamCard'
import uuid from 'react-uuid'
import { data } from '../../data/data'
const Team = () => {
  const items = data.team

  return (
    <div id="team" className="m-12">
      <h1 className="text-center my-8 text-5xl">
        Meet The Team
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map(item => <TeamCard {...item} key={uuid()} />)}
      </div>
    </div>
  )
}

export default Team